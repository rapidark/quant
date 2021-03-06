package com.pureblue.quant.quantAPI;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;

import com.pureblue.quant.TencentAPI.HushenMarket;
import com.pureblue.quant.dao.StockDatebaseFactory;

public class YahooHistoryStock implements IGeneralAPI {
    static ThreadPoolExecutor pool = (ThreadPoolExecutor) Executors.newCachedThreadPool();
    static Collection<YahooHistoricalThread> threadArray = new ArrayList<YahooHistoricalThread>();
    Logger logger;
    
    public YahooHistoryStock() {
        this.logger = Logger.getLogger(getClass());
    }
    public void fetchActions() {
        logger.info("YahooHistoryStock::fetchActions: fetch yahoo web history stock quotes entry.");
        Connection connection = StockDatebaseFactory.getInstance("test");
        if (null == connection) {
            logger.fatal("YahooHistoryStock::fetchActions: connect to SQL database failure.");
            return;
        }
        Set<String> quotes = null;
        try {
            HushenMarket market = new HushenMarket(connection);
            quotes = market.findAll();
            connection.close();
        } catch (SQLException e) {
            logger.fatal("YahooHistoryStock::fetchActions: get hushen stock list failure.");
            return;
        }

        for (String symbol : quotes) {
            YahooHistoricalThread t = new YahooHistoricalThread("test", symbol);
            threadArray.add(t);
            pool.execute(t);
        }
        logger.info("YahooHistoryStock::fetchActions: fetch yahoo web history stock quotes exit!");
    }
    public void pending() {
        logger.info("YahooHistoryStock::pending entry.");
        pool.shutdown();
        try {
            while (!pool.isTerminated()) {
                Thread.sleep(5000);
                logger.info("YahooHistoryStock::fetchActions: complete task count: " + pool.getCompletedTaskCount());
            }
            if (!pool.awaitTermination(15, TimeUnit.MINUTES)) {
                logger.fatal("YahooHistoryStock::fetchActions: yahoo history quote has been timeout!");
            }
        } catch (InterruptedException e) {
            logger.fatal("YahooHistoryStock::fetchActions: waiting the yahoo web fetch complete with error info: " + e.toString());
        }
        logger.info("YahooHistoryStock::pending exit.");
    }
    
    public void stop(){
        logger.info("YahooHistoryStock::stop entry.");
        Iterator<YahooHistoricalThread> iter = threadArray.iterator();
        while(iter.hasNext()){
            pool.remove(iter.next());
        }
        logger.info("YahooHistoryStock::stop exit.");
    }
}
