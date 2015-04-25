/*******************************************************************************
 * Copyright (c) 2013 Luigi Sgro. All rights reserved. This
 * program and the accompanying materials are made available under the terms of
 * the Eclipse Public License v1.0 which accompanies this distribution, and is
 * available at http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Luigi Sgro - initial API and implementation
 ******************************************************************************/
package dao;

import java.net.ConnectException;
import java.util.Date;
import java.util.List;

import model.RequestFailedException;
import model.BarSize;
import model.DataType;
import model.IContract;
import model.ITaskMonitor;
import model.OrderSide;

/**
 * Low-level interface to be implemented by broker adapters to deal with market data
 */
public interface IMarketDataProvider {
	/**
	 * Data types available - default as first element
	 * @return an array of DataType
	 */
	DataType[] availableDataTypes();
	/**
	 * Bar sizes available - default as first element
	 * @return an array of BarSize
	 */
	BarSize[] availableBarSizes();
	/**
	 * Listener of realtime price bars
	 */
	public interface IRealTimeDataListener {
		void onRealTimeBar(IOHLCPoint bar);
	}
	/**
	 * Listener of realtime price ticks
	 */
	public interface ITickListener {
		void onTick(ITickPoint tick);
	}
	/**
	 * Listener of price book updates
	 */
	public interface IMarketDepthListener {
		/**
		 * Inserts a new price level
		 * @param level price level ID
		 * @param side BUY(BID)/SELL(ASK)
		 * @param price level price
		 * @param size level size
		 */
		void onPriceLevelInsert(int level, OrderSide side, double price, int size);
		/**
		 * Updates a price level
		 * @param level price level ID
		 * @param side BUY(BID)/SELL(ASK)
		 * @param price level price
		 * @param size level size
		 */
		void onPriceLevelUpdate(int level, OrderSide side, double price, int size);
		/**
		 * Deletes a price level
		 * @param level price level ID
		 * @param side BUY(BID)/SELL(ASK)
		 */
		void onPriceLevelDelete(int level, OrderSide side);
	}
	/**
	 * Search contracts based on criteria
	 * @param criteria a partially filled contract bean, to be used as criteria for search
	 * @param taskMonitor a task monitor to control the task
	 * @return a list of contracts matching the criteria
	 */
	List<IContract> searchContracts(IContract criteria, ITaskMonitor taskMonitor) throws ConnectException, RequestFailedException;
	/**
	 * Retrieves the historical bars for a contract for a specific a time period
	 * @param contract the contract 
	 * @param startDateTime start of the historical period
	 * @param endDateTime end of the historical period
	 * @param barSize bar size of the wanted data
	 * @param dataType data type requested
	 * @param includeAfterHours true if after hours trading data is requested, false otherwise
	 * @param taskMonitor a task monitor to control the task
	 * @return a list of price bars
	 */
	List<IOHLCPoint> historicalBars(IContract contract, Date startDateTime, Date endDateTime,
			BarSize barSize, DataType dataType, boolean includeAfterHours, ITaskMonitor taskMonitor) throws ConnectException, RequestFailedException;
}
