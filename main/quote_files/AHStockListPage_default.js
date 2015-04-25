/* ----- */

AHStockListPage = new function(){
	this.dataArray;
	this.currentColumn;
	this.divName = "AHStockListPage";
	this.columnArray = new Array();
	this.reloadTime = 60000;
	this.reload = true;
	this.setTimeObj;
	this.GetData = function(array,time)
	{
		HKStockListRequest.totalpage = 1;
		this.currentColumn = this.ConvertSort(HKStockListRequest.sorttype);
		this.columnArray[this.currentColumn] = HKStockListRequest.updown;
		this.dataArray = array;
		this.ShowTime(time);
		this.LoadDataFinish();
	}
	this.LoadDataFinish = function()
	{
		var hc = new Array();
		hc.push("<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"dou_table\">");
		hc.push("<tr><td class=\"toptd\">���</td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:AHStockListPage.DataSort(0)\">A�ɴ���" + this.Arrow(0)+ "</a></td>");
		hc.push("<td class=\"toptd\">A������</td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:AHStockListPage.DataSort(2)\">H�ɴ���" + this.Arrow(2)+ "</a></td>");
		hc.push("<td class=\"toptd\">H������</td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:AHStockListPage.DataSort(4)\">A�ɼ۸�(RMB)" + this.Arrow(4)+ "</a></td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:AHStockListPage.DataSort(5)\">H�ɼ۸�(HKD)" + this.Arrow(5)+ "</a></td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:AHStockListPage.DataSort(6)\">���رȼ�" + this.Arrow(6)+ "</a></td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:AHStockListPage.DataSort(7)\">A���ǵ���" + this.Arrow(7)+ "</a></td>");
		hc.push("<td class=\"toptd\"><a href=\"javascript:AHStockListPage.DataSort(8)\">H���ǵ���" + this.Arrow(8)+ "</a></td>");
		hc.push("<td class=\"toptdend\"><a href=\"javascript:AHStockListPage.DataSort(9)\">�ɽ�����(H/A)" + this.Arrow(9)+ "</a></td></tr>");
		for(var i=0;i < (this.dataArray.length && HKStockListRequest.count);i++){
			hc.push("<tr" + this.TrBgColor(i) + ">");
			hc.push("<td>" + (i+1) + "</td>");//���
			hc.push("<td" + this.TdBgColor(i,0) + "><a href=\"http://stockdata.stock.hexun.com/" + this.dataArray[i][0] + ".shtml\" target=\"_blank\">" + this.dataArray[i][0] + "</a></td>");//A�ɴ���
			hc.push("<td><a href=\"http://stockdata.stock.hexun.com/" + this.dataArray[i][0] + ".shtml\" target=\"_blank\">" + this.dataArray[i][1] + "</a></td>");//A������
			hc.push("<td" + this.TdBgColor(i,2) + "><a href=\"http://hkquote.stock.hexun.com/urwh/hkstock/" + this.dataArray[i][2] + ".shtml\" target=\"_blank\">" + this.dataArray[i][2] + "</a></td>");//H�ɴ���
			hc.push("<td><a href=\"http://hkquote.stock.hexun.com/urwh/hkstock/" + this.dataArray[i][2] + ".shtml\" target=\"_blank\">" + this.dataArray[i][3] + "</a></td>");//H������
			hc.push("<td" + this.TdBgColor(i,4) + ">" + this.dataArray[i][4].toFixed(3) + "</td>");//A�ɼ۸�(RMB)
			hc.push("<td" + this.TdBgColor(i,5) + ">" + this.dataArray[i][5].toFixed(3) + "</td>");//H�ɼ۸�(HKD)
			hc.push("<td" + this.TdBgColor(i,6) + ">" + this.dataArray[i][6].toFixed(3) + "</td>");//���رȼ�
			hc.push("<td" + this.TdBgColor(i,7) + ">" + Common.GetColor3DEC(this.dataArray[i][7],0) + "</td>");//A���ǵ���
			hc.push("<td" + this.TdBgColor(i,8) + ">" + Common.GetColor3DEC(this.dataArray[i][8],0) + "</td>");//H���ǵ���
			hc.push("<td class=\"tdend\">" + this.dataArray[i][9] + "</td></tr>");//�ɽ�����(H/A)
		}
		
		hc.push("</table>");
		Common.$(this.divName).innerHTML = hc.join('');
	
		if(this.reload){
			clearTimeout(this.setTimeObj);
			this.setTimeObj = setTimeout(this.AutoReload,this.reloadTime);//������ʱ���ض�����
		}
	}
	this.AutoReload = function(){
		HKStockListRequest.Request();
	}
	this.ConvertSort = function(value)
	{
		return "6";//H�ɼ۸�(HKD)
	}
	this.ShowTime = function(time)
	{
		Common.$("updatetime").innerHTML = time;
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
		if(order == "up"){
			this.dataArray.sort(function(a,b){ return b[column]-a[column]; });
		}
		if(order == "down"){
			this.dataArray.sort(function(a,b){ return a[column]-b[column]; });
		}
		this.currentColumn = column;
		this.LoadDataFinish();
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