
// ����������
ConceptionHkstock = new function()
{
	this.divID = "ConceptionHkstockDiv";
	
	this.ShowData = function (data)
	{
		if(data == null || data.length == 0) return;
		
		var hc = new Array();
		
		hc.push('<table>');
		hc.push(' <tr>');
		
		var cellSize = 15; // 20�����ݻ�һ��
		
		var cols = 2; // ����������
		
		var colsIndex = 0; // ��ǰ��
		
		for(var index in data)
		{
			if(index % cellSize == 0)
			{
				colsIndex++; 
				hc.push('<td style="border-right:1px solid #ccc" width="200">');
				hc.push('<ul>');
			}
			
			hc.push('<li>');
			hc.push(' <a href="/hkstock/conseption.aspx?type=' + data[index].type_code + '&name=' + data[index].type_name + '" class="black" onclick="IframeOpen(this.href);return false" title="' + data[index].type_name + '">' + data[index].type_name + '</a>');
			hc.push('</li>');
			
			if(Math.round((parseInt(index) + 1) % cellSize) == 0 || index == (data.length - 1))
			{			
				if((parseInt(index) + 1) < (colsIndex * cellSize))
				{		
					for(var i = parseInt(index) + 1; i < colsIndex * cellSize; i++)
					{
						hc.push('<li><a>&nbsp;</a></li>');
					}
				}
				
			hc.push('</ul>');
			hc.push('</td>');
			}
		}
		
		hc.push(' </tr>');
		hc.push('</table>');
		
		document.getElementById(this.divID).innerHTML = hc.join('');
	}
}
