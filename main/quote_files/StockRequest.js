/* ----- */

StockCodeRequest = new function(){
// private fields 

// private static methods 

// public fields 
	this.scriptid ="StockCodeRequest";
	this.url = "http://quote.tool.hexun.com/hqzx/getstock.aspx";
	this.code = "";
// public methods 
	this.CreateLink = function()
	{
		var request = this.url + "?";
		if(!Common.IsCodeMarket(this.code))
		{
			this.code = "000001_1|399001_2";
		}
		request += "stocklist=" + this.code + "&time=" + Common.Time();
		return request;
	}
	this.Request = function()
	{
		Common.AppendDataArray(this.scriptid,this.CreateLink());
	}
// constructor
	{
	}
}

/* ----- */

StockListRequest = new function(){
// private fields 

// private static methods 

// public fields 
	this.scriptid ="StockListRequest";
	this.url = "http://quote.tool.hexun.com/hqzx/quote.aspx";
	this.type = "2";
	this.market = "";
	this.sorttype = "3";
	this.updown = "up";
	this.count = 50;//ÿҳ����
	this.page = 1;//��ǰҳ
	this.totalpage = 1;//��ҳ��
// public methods 
	this.CreateLink = function()
	{
		var request = this.url + "?";
		if(this.type != "")
		{
			request += "type=" + this.type + "&";
		}
		if(this.market != "")
		{
			request += "market=" + this.market + "&";
		}
		request += "sorttype=" + this.sorttype + "&updown=" + this.updown + "&page=" + this.page + "&count=" + this.count + "&time=" + Common.Time();
		return request;
	}
	this.Request = function()
	{
		Common.AppendDataArray(this.scriptid,this.CreateLink());
	}
	this.FirstPage = function()
	{
		this.page = 1;
		Common.AppendDataArray(this.scriptid,this.CreateLink());
	}
	this.EndPage = function()
	{
		this.page = this.totalpage;
		Common.AppendDataArray(this.scriptid,this.CreateLink());
	}
	this.NextPage = function()
	{
		if(this.page < this.totalpage)
		{
			this.page += 1;
			Common.AppendDataArray(this.scriptid,this.CreateLink());
			//��ȡ��һҳ����
		}
	}
	this.PrevPage = function()
	{
		if(this.page >1)
		{
			this.page -= 1;
			Common.AppendDataArray(this.scriptid,this.CreateLink());
			//��ȡ��һҳ����
		}
	}
	this.GoToPage = function(input)
	{
		if(Common.IsNumber(input)){
			if(input > 0 && input <= this.totalpage && input != this.page)
			{
				this.page = Number(input);
				Common.AppendDataArray(this.scriptid,this.CreateLink());
			}
		}
	}
// constructor
	{
	}
}