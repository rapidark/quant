/* ----- */

StockListPage = new function(){
	this.dataArray;
	this.currentColumn;
	this.divName = "StockListPage";
	this.columnArray = new Array();
	this.reloadTime = 30000;
	this.reload = true;
	this.setTimeObj;
	this.GetData = function(array,total,time)
	{
		StockListRequest.totalpage = total;
		this.currentColumn = StockListRequest.sorttype;
		this.columnArray[this.currentColumn] = StockListRequest.updown;
		this.dataArray = array;
		this.ShowTime(time);
		this.ShowPage(StockListRequest.page,StockListRequest.totalpage);
		this.InitDataSort(this.currentColumn,StockListRequest.updown);
		this.LoadDataFinish();
	}
	this.LoadDataFinish = function()
	{
		var hc = new Array();
		hc.push("<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"dou_table\">");
		hc.push("<tr><td class=\"toptd\"><a href=\"javascript:StockListPage.DataSort(0)\">����" + this.Arrow(0)+ "</a></td>");
		hc.push("<td class=\"toptd\">����</td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:StockListPage.DataSort(2)\">���¼�" + this.Arrow(2)+ "</a></td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:StockListPage.DataSort(3)\">�ǵ���" + this.Arrow(3)+ "</a></td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:StockListPage.DataSort(4)\">����" + this.Arrow(4)+ "</a></td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:StockListPage.DataSort(5)\">��" + this.Arrow(5)+ "</a></td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:StockListPage.DataSort(6)\">���" + this.Arrow(6)+ "</a></td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:StockListPage.DataSort(7)\">���" + this.Arrow(7)+ "</a></td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:StockListPage.DataSort(8)\">�ɽ���" + this.Arrow(8)+ "</a></td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:StockListPage.DataSort(9)\">�ɽ���" + this.Arrow(9)+ "</a></td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:StockListPage.DataSort(10)\">����" + this.Arrow(10)+ "</a></td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:StockListPage.DataSort(11)\">���" + this.Arrow(11)+ "</a></td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:StockListPage.DataSort(12)\">����" + this.Arrow(12)+ "</a></td>");
		hc.push("<td class=\"toptd\">�ʽ�</td>");
		hc.push("<td class=\"toptdend\">�ɰ�</td></tr>");
		for(var i=0;i < this.dataArray.length;i++){
			hc.push("<tr" + this.TrBgColor(i) + ">");
			hc.push("<td" + this.TdBgColor(i,0) + "><a href=\"http://stockdata.stock.hexun.com/" + this.dataArray[i][0] + ".shtml\" target=\"_blank\">" + this.dataArray[i][0] + "</a></td>");//����
			hc.push("<td><a href=\"http://stockdata.stock.hexun.com/" + this.dataArray[i][0] + ".shtml\" target=\"_blank\">" + this.dataArray[i][1] + "</a></td>");//����
			if(this.dataArray[i][2] == 0 && this.dataArray[i][8] == 0 && this.dataArray[i][9]==0){
				hc.push("<td" + this.TdBgColor(i,2) + ">--</td>");//���¼�
				hc.push("<td" + this.TdBgColor(i,3) + ">--</td>");//�ǵ���
				hc.push("<td" + this.TdBgColor(i,4) + ">" + this.dataArray[i][4].toFixed(2) + "</td>");//����
				hc.push("<td" + this.TdBgColor(i,5) + ">--</td>");//��
				hc.push("<td" + this.TdBgColor(i,6) + ">--</td>");//���
				hc.push("<td" + this.TdBgColor(i,7) + ">--</td>");//���
				hc.push("<td" + this.TdBgColor(i,8) + ">--</td>");//�ɽ���
				hc.push("<td" + this.TdBgColor(i,9) + ">--</td>");//�ɽ���
				hc.push("<td" + this.TdBgColor(i,10) + ">--</td>");//����
				hc.push("<td" + this.TdBgColor(i,11) + ">--</td>");//���
				hc.push("<td" + this.TdBgColor(i,12) + ">--</td>");//����
			}else{
				hc.push("<td" + this.TdBgColor(i,2) + ">" + Common.GetColor2DEC(this.dataArray[i][2],this.dataArray[i][4]) + "</td>");//���¼�
				hc.push("<td" + this.TdBgColor(i,3) + ">" + Common.GetColor2DEC(this.dataArray[i][3],0) + "</td>");//�ǵ���
				hc.push("<td" + this.TdBgColor(i,4) + ">" + this.dataArray[i][4].toFixed(2) + "</td>");//����
				hc.push("<td" + this.TdBgColor(i,5) + ">" + Common.GetColor2DEC(this.dataArray[i][5],this.dataArray[i][4]) + "</td>");//��
				hc.push("<td" + this.TdBgColor(i,6) + ">" + Common.GetColor2DEC(this.dataArray[i][6],this.dataArray[i][4]) + "</td>");//���
				hc.push("<td" + this.TdBgColor(i,7) + ">" + Common.GetColor2DEC(this.dataArray[i][7],this.dataArray[i][4]) + "</td>");//���
				hc.push("<td" + this.TdBgColor(i,8) + ">" + this.dataArray[i][8].toFixed(2) + "</td>");//�ɽ���
				hc.push("<td" + this.TdBgColor(i,9) + ">" + this.dataArray[i][9] + "</td>");//�ɽ���
				hc.push("<td" + this.TdBgColor(i,10) + ">" + this.dataArray[i][10].toFixed(2) + "</td>");//����
				hc.push("<td" + this.TdBgColor(i,11) + ">" + this.dataArray[i][11].toFixed(2) + "</td>");//���
				hc.push("<td" + this.TdBgColor(i,12) + ">" + this.dataArray[i][12].toFixed(2) + "</td>");//����
			}
			hc.push("<td><a href=\"http://vol.stock.hexun.com/" + this.dataArray[i][0] + ".shtm\" target=\"_blank\"><img src=\"/img/img004.gif\" align=\"absmiddle\"/></a></td>");
			hc.push("<td class=\"tdend\"><a href=\"http://guba.hexun.com/" + this.dataArray[i][0] + ",guba.html\" target=\"_blank\">�ɰ�</a></td></tr>");
		}
		
		hc.push("</table>");
		Common.$(this.divName).innerHTML = hc.join('');
		
		if(this.reload){
			clearTimeout(this.setTimeObj);
			this.setTimeObj = setTimeout(this.AutoReload,this.reloadTime);//������ʱ���ض�����
		}
	}
	this.AutoReload = function(){
		StockListRequest.Request();
	}
	this.ShowTime = function(time)
	{
		Common.$("updatetime").innerHTML = time;
		Common.$("topupdatetime").innerHTML = time;
	}
	this.ShowPage = function(page,total){
		Common.$("pagenum").innerHTML = page + "/" + total;
	}
	this.InitDataSort = function(column,order)
	{
		if(order == "up"){
			this.dataArray.sort(function(a,b){ return b[column]-a[column]; });
		}
		if(order == "down"){
			this.dataArray.sort(function(a,b){ return a[column]-b[column]; });
		}
	}
	this.DataSort = function(column)
	{
		if(this.columnArray[column] == "down" || this.columnArray[column] == undefined)
		{
			this.columnArray[column] = "up";
			this.ArraySort(column,"up");
		}
		else
		{
			this.columnArray[column] = "down";
			this.ArraySort(column,"down");
		}
	}
	this.ArraySort = function(column,order)
	{
		this.currentColumn = column;
		StockListRequest.updown = order;
		StockListRequest.sorttype = column;
		StockListRequest.Request();
	}
	this.TrBgColor = function(i)
	{
		if(i%2 == 0){
			return "";
		}else{
			return " bgcolor=\"#F7F7F7\"";
		}
		return "";
	}
	this.TdBgColor = function(i,column)
	{
		if(column == this.currentColumn){
			if(i%2 == 0){
				return " bgcolor=\"#FFF3EB\"";	
			}else{
				return " bgcolor=\"#F9ECE4\"";	
			}
		}
		return "";
	}
	this.Arrow = function(column)
	{
		if(column == this.currentColumn){
			if(this.columnArray[column] == "up"){
				return "<img src=\"/img/dot3.gif\" align=\"absmiddle\"/><img src=\"/img/dot2_2.gif\" align=\"absmiddle\" />";	
			}else{
				return "<img src=\"/img/dot1_1.gif\" align=\"absmiddle\"/><img src=\"/img/dot1_2.gif\" align=\"absmiddle\"/>";	
			}
		}
		return "";
	}
}