// search
function ch_w(str)
{
  if(str=="����"|| str=="����")
  {
	document.hexun_search.wf.value="2";
  }

}
function prepare_It()
{
if(document.getElementById('rdinfo').checked==true){
	document.hexun_search.sw.value=document.hexun_search.tempsw.value; 
	document.hexun_search.action = "http://news.search.hexun.com/forinfosearch.aspx";
}
if(document.getElementById('rdstock').checked==true||document.getElementById('rdfunds').checked==true){
	document.hexun_search.sw.value=document.hexun_search.tempsw.value;
	document.hexun_search.action = "http://search.hexun.com/forwikiSearch.aspx";
}
if(document.getElementById('blog').checked==true){
	document.hexun_search.sw.value=document.hexun_search.tempsw.value;
	document.hexun_search.action = "http://news.search.hexun.com/cgi-bin/search/blog_search.cgi";
}
}
function click_Search(){
    if(document.hexun_search.tempsw.value!=""){
	prepare_It();
    	document.hexun_search.submit();
    }else{
	alert("����������ؼ���");
    }
}
function check_It(){
    if(document.hexun_search.tempsw.value!="")
    {
		prepare_It();

    }else{
		alert("����������ؼ���");
		return false;
    }	
}
//�ƾ�Ҫ�š�ʱ��Ҫ�ű�ǩ�л�
function SwitchNewsTag(id,num,count)
{
	ClearTagClass(id,count);
	document.getElementById("tagname_" + id + num).className = "tagf";
	document.getElementById(id + num).style.display = "";
}
function ClearTagClass(id,count)
{
	for(i=1;i<=count;i++)
	{
		document.getElementById("tagname_" + id + i).className = "tagn";
		document.getElementById(id + i).style.display = "none";
	}
}
// �ɰ�����
function StockBar_Submit()
{
	var swValue = document.getElementById("search_word").value;		
	if(swValue == "" || swValue==null)
	{
		alert("�������ѯ����");
		return false;
	}		
	else
	{
		//var url = "http://bar.hexun.com/PostSearch.aspx?sw=" + swValue + "&radiobutton=1";		
		var url = "http://guba.hexun.com/search/ResultAll.aspx?sw=" + swValue + "&radiobutton=1";		
		window.open(url);
	}
}
//���Ѳ�ѯ
function CheckSubmit()
{
	if( findfrm.zone.value == '')
	{
		alert("ʡ�ݲ���Ϊ��");
		return false;
	}
}
//����������
function OpenSelected(url)
{
	if(url != "" && url != null)
	{
		window.open(url);
	}
}
//�ƾ��ٿ�����
function WikiSearchCheck()
{
	if(document.getElementById("wiki_search").value!="")
	{
		var url = "http://wiki.hexun.com/wikisearch.aspx?sw=" + document.getElementById("wiki_search").value;
		window.open(url);
	}
	else
	{
		alert("����������ؼ���");
		return false;
	}
}

/*-------------------------------------------------------------------------------------------
**********************************************************************************************
**********************************************************************************************
**********************************************************************************************
**********************************************************************************************
-----------------------------------09-30--------------------------------------------------***/

var defaultMessage=new Array('����/����/ƴ��','�����Ʊ�������','�������Źؼ���','���벩�Ĺؼ��ʻ�������')
var radios_x=document.getElementsByName("whichDB")
function wrDefault(my_obj)
	{
		var messageObj=document.getElementById("textMessage")
		var change=false;
		for(var i=0; i<radios_x.length; i++)
			{
				if(messageObj.value==defaultMessage[i])
				{ change=true;break}
			}
		if(change==false && messageObj.value!="")
			{
				return;	
			}
		for(var i=0; i< radios_x.length; i++)
			{
				if(my_obj==radios_x[i]) {
				messageObj.value=defaultMessage[i];
				messageObj.style.color = '#858585';
				}
			}
	}

function clearDefault(my_obj)
	{
		var ret=false;
		for(var i=0;i<defaultMessage.length;i++)
		{
			if(my_obj.value==defaultMessage[i])
				ret=true;
		}
		if(ret)
			my_obj.value=""
	}

function submitForm_x()
	{
		var submit_info=document.getElementById("textMessage").value;
		if(radios_x[0].checked == true && hxSuggest.util.trim(submit_info)!='') submit_info = hxSuggest.submitValue;
 		var my_form=document.hexunsearch;
		var myNum=0;
		for(var i=0; i< radios_x.length; i++)
			{
				if(radios_x[i].checked)
				myNum=i;
			}
		changeAction( myNum,submit_info,my_form);
		checkSubmit ( myNum,submit_info,my_form);
	}
function isNumber(str)
	{
		if(''==str){
			return false;
		}
		var reg= /\D/;
		return str.match(reg)==null;
	}	
function changeAction(myNum,submit_info,my_form)
	{   
		if(myNum==0)
			{ 
				//my_form.action="http://data.stock.hexun.com/search/default.aspx";
				my_form.action="http://data.stock.hexun.com/search/default.aspx";
				document.getElementById("stockid").value=submit_info;
				if(document.getElementById("stocktype")) document.getElementById("stocktype").value = hxSuggest.typeValue;
			}	
		if(myNum==1)
			{
				//my_form.action="http://guba.hexun.com/PostSearchNew.aspx?sw="+submit_info+"&radiobutton=1";
				//my_form.action="http://guba.hexun.com/search/ResultAll.aspx?sw="+submit_info+"&radiobutton=1";
				if(isNumber(submit_info)){
					my_form.action="http://t.hexun.com/g/"+submit_info+"_1.html";
				}else{
					my_form.action="http://t.hexun.com/k/topic.html?value="+submit_info;
				}
			}
		if(myNum==2)
			{
				my_form.action="http://news.search.hexun.com/infosearch.aspx?sw="+submit_info+"&wf=2";
				my_form.action="http://news.search.hexun.com/cgi-bin/search/info_search.cgi?key="+submit_info+"&f=0";
			}
		if(myNum==3)
			{
				my_form.action="http://news.search.hexun.com/cgi-bin/search/blog_search.cgi?key="+submit_info;
			}
	}
function checkSubmit(myNum,submit_info,my_form)
	{
		if(submit_info=="")
			{alert('����д��ѯ��Ϣ');return false;}
		for(var i=0; i< defaultMessage.length;i++)
			{
				if(submit_info==defaultMessage[i])
				{ alert('����д��ѯ��Ϣ');return false;}
			}
		if(myNum==0 || myNum==1 || myNum==3)
			{
				my_form.submit();
			}
		else
			{	
				window.open(my_form.action);
			}
	}
function BlogSearchCheck(type,num)
{
	if(document.getElementById(type).value!="")
	{
		document.getElementById("sw").value=document.getElementById(type).value; 
		if(num == 1)
		{
			document.hexunsearch.submit();
		}
		else
		{
			var url = "http://blog.search.hexun.com/forblogsearch.aspx?sw=" + document.getElementById(type).value + "&wf=2";
			window.open(url);
		}
	}
	else
	{
		alert("�����벩�͹ؼ���");
		return false;
	}	
}
//iPad������ж�100730,���Ӷ�androidϵͳ�ж�֧��0830
function testiPad(sid,ieurl,ipadurl){
	var testAppleMobile = /\((iPhone|iPad|iPod)/i;
	var testAndroid = /(android)/i;
	var appleD=document.getElementById(sid);
	if(appleD!=null){
		if(testAppleMobile.test(navigator.userAgent)||testAndroid.test(navigator.userAgent))
		{
			appleD.src = ipadurl;
		}else{
			appleD.src = ieurl;	
		}
	}
}


//����18����ʱ���������ֺ�100813
function resetFontSize_Ipad(_obj)
{	
	var testAppleMobile = /\((iPhone|iPad|iPod)/i;
	if(testAppleMobile.test(navigator.userAgent))
	{
		var obj=document.getElementById(_obj);
		if(obj)obj.style.fontSize="17px";			
	}			
}


//
function submitForm_notIE(e) {
   var e = e?e:window.event;
   if(e.keyCode==13){submitForm_x();return false;}	
}


/*2010-02-28*/
var hxSuggest =  function(inputObj,url,options) {
   this.input = hxSuggest.util.$(inputObj);
   this.url = url;
   this.setDefault(options);
   this.gaper = this.options.gaper;
   this.maxRow = this.options.maxRow;
   this.scriptId = this.options.scriptId;
   this.contrainer = hxSuggest.util.$(this.options.contrainer);
   this.tempObj = hxSuggest.util.$(this.options.tempObj);
   this.common = this.options.common;   
   //������ʱ��
   this.timer = null;
   //DOM����
   this.fragment = document.createDocumentFragment();
   //��¼��ֵ
   this.oldValue = hxSuggest.util.trim(this.input.value).toUpperCase();
   //��������¼�����
   this.step = 0;
   //��ʼ���������
   this.drawPanel();
   //�ύ��ֵ
   this.temp = '';
   //�ύ����
   this.tempType = '';
}
//��¼�����ύ��ֵ
hxSuggest.submitValue = '';
//��¼����
hxSuggest.typeValue = '';

//ԭ����
hxSuggest.prototype = {
    //�趨Ĭ��ֵ
    setDefault:function(options){
	   this.options = {
	   //���Ҽ�϶
	   gaper:100,
	   //�����ʾ����
	   maxRow:10,
	   //����script�Ĺ̶�ID��ʾ
	   scriptId:'hxSuggest_ids',
	   //��������
	   contrainer:document.body,
	   //ͨ��
	   common:false,
	   tempObj:''
	   };
	  hxSuggest.util.Extend(this.options,options||{});
	},
	//�����������
	drawPanel:function(){
	  //�������
	  this.conPanel = document.createElement('div');
	  hxSuggest.util.css(this.conPanel,{
	     border:'1px solid #9A9B9D',
		 width:'202px',
		 background:'#FFF',
		 position:'absolute',
		 display:'none',
		 zIndex:'999'
	  });
	  //�����Ӱ
	  this.shadePanel = document.createElement('div');
	  hxSuggest.util.css(this.shadePanel,{
	     width:'204px',
		 background:'#8D8D8D',
		 position:'absolute',
		 opacity:'0.6',
		 display:'none',
		 zIndex:'998'
	  });
	  //���iframe�����
	  this.framePanel = document.createElement('iframe');
	  hxSuggest.util.css(this.framePanel,{
	    width:'207px',
		position:'absolute',
		opacity:'0',
		display:'none',
		zIndex:'997'
	  });
	  this.fragment.appendChild(this.framePanel);
	  this.fragment.appendChild(this.shadePanel);
	  this.fragment.appendChild(this.conPanel);
	  this.contrainer.appendChild(this.fragment);
	  this.addEvent();
	},
	//���¼�
	addEvent:function(){
	  var _this = this;
	  this.input.onfocus = (function() {
	     return function() {
		    var value = hxSuggest.util.trim(_this.input.value);
			for(var i=0;i<defaultMessage.length;i++) {
				if(value == defaultMessage[i] || value=='������롢���ƻ��д') {
					_this.input.value = '';
					_this.input.style.color = '#000';
				  }
				}
			if(_this.common) _this.openSearch();
			else if(radios_x[0].checked == true) _this.openSearch();			
		 }
	  })();
	  this.input.onblur = (function(){
	     return function() {
		    clearInterval(_this.timer);
			_this.oldValue = '';
			_this.step = 0;
			if(_this.temp!='' && hxSuggest.util.trim(_this.input.value)!='') {
				if((!_this.common && radios_x[0].checked==true)|| _this.common) _this.input.value = _this.temp;
				if(!_this.common) {
					hxSuggest.submitValue = _this.temp;
					hxSuggest.typeValue = _this.tempType;
				}
				else _this.tempObj.value = _this.temp;
				}
			if(hxSuggest.util.trim(_this.input.value)=='' && radios_x[0].checked == true) {
				_this.input.value = defaultMessage[0];
				_this.input.style.color = '#858585';
				}
			if(hxSuggest.util.$(_this.scriptId) && hxSuggest.util.$(_this.scriptId)!=null) {
				hxSuggest.util.$(_this.scriptId).parentNode.removeChild(hxSuggest.util.$(_this.scriptId));
				}
		 }
	  })();	
	   //�󶨼����¼�
	   hxSuggest.util.bind(this.input,'keydown',function(e){  
	   _this.keyEvent(e); 	   
	  });
	  hxSuggest.util.bind(document,'click',function(e){
          var e = e?e:window.event;
		  var source = e.srcElement || e.target;
		  if(source!=_this.input) _this.hide();		
		}); 
	},
	//��������
	openSearch:function() {
     var _this = this;
     this.timer = setInterval(function(){								   
	   var value = hxSuggest.util.trim(_this.input.value).toUpperCase();
	   if((value.indexOf('"')!=-1 || value.indexOf("'")!=-1 || value.indexOf("[")!=-1 || value.indexOf("]")!=-1) && value!=_this.oldValue) {
		       _this.oldValue = value;
		       _this.setValue([]);
		   }
	   else if(value!='' && value!=_this.oldValue) {
	     _this.oldValue = value;
		 _this.returnValue(value);
	   }
	   else if(value=='') {
	   _this.oldValue = value;
	   _this.conPanel.innerHTML = '';
	   _this.hide();
	   }
	  },this.gaper);	
	},
	//�������
	hide:function() {
	  this.conPanel.style.display = 'none';
	  this.shadePanel.style.display = 'none';
	  this.framePanel.style.display = 'none';
	},
	//��ʾ���
	show:function() {
	  if(this.conPanel.style.display == 'none') { 
	  this.conPanel.style.display = '';
	  this.shadePanel.style.display = '';
	  this.framePanel.style.display = '';
	  }
	  var t = hxSuggest.util.top(this.input)+hxSuggest.util.height(this.input);
	  var l = hxSuggest.util.left(this.input);
	  var h = hxSuggest.util.height(this.conPanel);
	  hxSuggest.util.top(this.conPanel,t);	  
	  hxSuggest.util.left(this.conPanel,l);
	  
	  hxSuggest.util.top(this.shadePanel,t+2);	  
	  hxSuggest.util.left(this.shadePanel,l+2);
	  hxSuggest.util.height(this.shadePanel,h);
	  
	  hxSuggest.util.top(this.framePanel,t);	  
	  hxSuggest.util.left(this.framePanel,l);
	  hxSuggest.util.height(this.framePanel,h);  	  	  
	},
	//��ȡֵ
	returnValue:function(value) {
	  if(hxSuggest.util.$(this.scriptId) && hxSuggest.util.$(this.scriptId)!=null) {
	     var obj = hxSuggest.util.$(this.scriptId);
	     obj.parentNode.removeChild(obj);
	  }
	  //��װurl
	  var _this = this;
	  
	  var url = "";
	  
	  if(this.url.indexOf("?") != -1) url = this.url + "&key=" + value;
	  else url = this.url+"?key="+value;
	  
	  hxSuggest.util.loadScript(url,this.scriptId,function(){
		if(hxSuggest_JsonData && hxSuggest.util.isArray(hxSuggest_JsonData)) {
		   _this.conPanel.innerHTML = '';
		   _this.setValue(hxSuggest_JsonData);
		}
		else {
		   _this.hide();
		} 
	  });
	},
	//��������
	setValue:function(d) {
	  var str = '<table cellpadding="0" cellspacing="0" width="100%" style="font-size:12px;font-family:����; cursor:default; line-height:normal;">';
	  if(d.length==0) { 
	  str += '<tr><td style="padding:5px 0 5px 8px;">û�п�ƥ��Ĺ�Ʊ���ƻ����</td></tr>';
	  this.temp = '';
	  this.tempType = '';
	  if(!this.common) {
		  hxSuggest.submitValue = this.temp;
	      hxSuggest.typeValue = this.tempType;
	  }
	  else this.tempObj.value = this.temp;
	  }
	  else {
	  var len = Math.min(d.length,this.maxRow);
	  for(var i=0;i<len;i++) {
		if(i==0) str+='<tr style="background:#ECECEC">';
		else str+='<tr style="background:">';
		str+='<td style="padding:5px 0 5px 8px;">'+this.redDeal(d[i].code)+'</td>';
		if(d[i].name.length>5) str+='<td><span title="'+d[i].name+'">'+this.redDeal(d[i].name.substr(0,4)+'..')+'</span></td>';
		else str+='<td>'+this.redDeal(d[i].name)+'</td>';
		if(d[i].short.length>9) str+='<td><span title="'+d[i].short+'">'+this.redDeal(d[i].short.substr(0,9))+'</span></td>';
		else str+='<td>'+this.redDeal(d[i].short)+'</td>';
		str+='<td style="color:#858585;"><input type="hidden" style="display:none" value="'+d[i].stocktype+'" />'+d[i].type+'</td>';
		str+='</tr>';
	  }
	  }
	  str+='</table>';
	  if(d.length!=0)
	  str+='<div style="width:192px;height:20px;line-height:20px;text-align:center;background:#E8E8E8;margin:4px auto;"><a href="http://data.stock.hexun.com/search/default.aspx?stockid='+this.key+'" style="text-decoration:underline; color:#980000;font-size:12px;">�����ѯ���</a></div>';
	  this.conPanel.innerHTML = str;
	  //�����over�¼�
	  if(d.length>0) {
	   var trlist = this.conPanel.getElementsByTagName('tr');
	   this.step = 0;
	   this.temp = hxSuggest.util.text(trlist[0].getElementsByTagName('td')[0]);
	   this.tempType = trlist[0].getElementsByTagName('input')[0].value;
	   if(!this.common) {
		   hxSuggest.submitValue = this.temp;
		   hxSuggest.typeValue = this.tempType;
	   }
	   else this.tempObj.value = this.temp;
	   var len = trlist.length;
	   var _this = this;
	   for(var i=0;i<len;i++) {
	     trlist[i].onmouseover = (function(i){
		   return function() {
               _this.selectRow(i);
			  }
		 })(i);
		 trlist[i].onclick = function() {submitForm_x();_this.hide();}
	   }
	  }
	  this.show();
	},
	//ѡ��������
	selectRow:function(i){
	  var trlist = this.conPanel.getElementsByTagName('tr');
	  var len = trlist.length;
	  for(var j=0;j<len;j++) {
		 if(i==j) {
			trlist[j].style.background = '#ECECEC';
			this.step = j;
			this.temp = hxSuggest.util.text(trlist[i].getElementsByTagName('td')[0]);
			this.tempType = trlist[i].getElementsByTagName('input')[0].value;
			if(!this.common) {
				hxSuggest.submitValue = this.temp;
				hxSuggest.typeValue = this.tempType;
			}
			else this.tempObj.value = this.temp;
			}
		 else {
			trlist[j].style.background='';
		 }	
	   }  
	},
	//�����¼�
	keyEvent:function(e) {
	  var e = e?e:window.event;
	  if(typeof this.conPanel =='undefined' &&  this.conPanel.display == 'none') return;
	  if(e.keyCode == 38) {
	   //����
	   var len = this.conPanel.getElementsByTagName('tr').length;
	   if(len>1) {
	   this.step = (this.step==0)?(len-1):(this.step-1);
	   this.selectRow(this.step);
	   }
	 }
	 if(e.keyCode == 40) {
	   //����
	   var len = this.conPanel.getElementsByTagName('tr').length;
	   if(len>1) {
	   this.step = (this.step==len-1)?0:(this.step+1);
	   this.selectRow(this.step);
	   }
	 }
	},	
	//��촦��
	redDeal:function(str) {
	this.key = hxSuggest.util.trim(this.input.value).toUpperCase();
	str = str.replace(this.key,'<span style="color:#FF0000">'+this.key+'</span>');
	return str;
	}
};
//������
hxSuggest.util = {
   //ȡԪ��
   $:function(element) {
	var el;
	if(typeof element == 'string') el = document.getElementById(element);
	else el = element;
	if(!el) return null;
	else return el;
   },   
   //��չ
   Extend:function(destination,source) {
    	for (var property in source) {
		destination[property] = source[property];
	}
   },
   //ȥ���հ��ַ�
   trim:function(str){
	 return str.replace(/^\s+|\s+$/g,'');
    },
	//תΪ�շ���
	camelCase:function(str){
		return str.replace(/-\D/g, function(match){
				return match.charAt(1).toUpperCase();
			});
	},
	//�ж�һ�������Ƿ�Ϊ����
	isArray:function(value) {
		return Object.prototype.toString.apply(value) === '[object Array]';
	},		   
   //��λ
	pos:function(el) {
		if(el.parentNode === null || el.style.display == 'none') return false;
		var parent = null,pos = [],box;
		if (el.getBoundingClientRect) {
			box = el.getBoundingClientRect();
			var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
			var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
			return {
				x: box.left + scrollLeft,
				y: box.top + scrollTop
			};
		}
		else 
			if (document.getBoxObjectFor) {
				box = document.getBoxObjectFor(el);
				var borderLeft = (el.style.borderLeftWidth) ? parseInt(el.style.borderLeftWidth) : 0;
				var borderTop = (el.style.borderTopWidth) ? parseInt(el.style.borderTopWidth) : 0;
				pos = [box.x - borderLeft, box.y - borderTop];
			}
			else {
				pos = [el.offsetLeft, el.offsetTop];
				parent = el.offsetParent;
				if (parent != el) {
					while (parent) {
						pos[0] += parent.offsetLeft;
						pos[1] += parent.offsetTop;
						parent = parent.offsetParent;
					}
				}
				if(!window.opera || (navigator.userAgent.indexOf('Safari') < 0 && e.style.position == 'absolute')) {
			         pos[0]-= document.body.offsetLeft;
			         pos[1]-= document.body.offsetTop;
		         } 
			if(el.parentNode) {
				parent = el.parentNode;
			} 
			else {
				parent = null;
			}
			while(parent && parent.tagName.toUpperCase() != 'BODY' && parentName.toUpperCase() !='HTML'){
				pos[0]-=parent.scrollLeft;
				pos[1]-=parent.scrollTop;
				if(parent.parentNode) {
					parent = parent.parentNode;
				}
				else parent = null;
			}
		}
		return {x:pos[0],y:pos[1]};
	},
	//���á���ȡԪ�ؿ�
	width:function(el,value) {
		if(typeof value == 'undefined') {
			return el.offsetWidth;
		}
		else return this.css(el,'width',value+'px');
	},
	//���á���ȡԪ�ظ�
	height:function(el,value) {
		if(typeof value == 'undefined') {
			return el.offsetHeight;		
		}
		else return this.css(el,'height',value+'px');
	},
	//���á���ȡԪ����߾�
	left:function(el,value) {
		if(typeof value == 'undefined') {
			return this.pos(el).x;		
		}
		else return this.css(el,'left',value+'px');
	},
	//���á���ȡԪ���ϱ߾�
	top:function(el,value) {
		if(typeof value == 'undefined') {
			return this.pos(el).y;		
		}
		else return this.css(el,'top',value+'px');
	},  	
  //CSS��Ӽ���ȡ
  css:function(ele,name,value) {
      if(typeof name == 'undefined' && typeof value == 'undefined') {
			return ele.style.cssText;
		}
		else if(typeof name == 'string' && typeof value == 'undefined') {
			if(name=='float') name = (window.ActiveXObject)?'styleFloat':'cssFloat';
			if (name == 'opacity' && window.ActiveXObject && ele.style.filter) 
				return parseFloat(ele.style.filter.replace(/alpha\(opacity=/, '').replace(/\)/, '')) / 100;
			else {
				name = this.camelCase(name);
				return ele.style[name];
			}
		}
		else if (typeof name == 'object' && typeof value == 'undefined') {
				var params = name;
				for (var n in params) {
					var param;
					if(n=='float') n = (window.ActiveXObject)?'styleFloat':'cssFloat';
					if (n == 'opacity' && window.ActiveXObject) {
						ele.style.filter = 'alpha(opacity=' + parseInt(parseFloat(params[n]) * 100) + ')';
					}
					else {
						param = this.camelCase(n);
						ele.style[param] = params[n];
					}
				}
		}		
		else 
			if (typeof name == 'string' && typeof value != 'undefined') {
				if(name=='float') name = (window.ActiveXObject)?'styleFloat':'cssFloat';
				if (name == 'opacity' && window.ActiveXObject) 
					ele.style.filter = 'alpha(opacity=' + parseInt(parseFloat(value) * 100) + ')';
				else {
					name = this.camelCase(name);
					ele.style[name] = value;
				}
			}				      
  },	
	//��̬����script
	loadScript:function(url,id,callback) {
	  var script = document.createElement('script');
	  script.type = 'text/javascript';
	  if(id!='') script.id= id;
	  if(script.readyState) {
		  script.onreadystatechange = function() {
			   if(script.readyState == 'loaded' || script.readyState == 'complete') {
				    callback();
				   }
			  }
		  }
	  else {
		  script.onload = function() {callback();};
		  }
	  script.src = url;
	  document.getElementsByTagName('head')[0].appendChild(script);	   
	},
 //�¼���
 bind:function(ele,name,fn) {
    if(ele.attachEvent) {
    ele['e'+name+fn] = fn;
	ele[name+fn] = function() {
	  ele['e'+name+fn](window.event);
	  }
	ele.attachEvent('on'+name,ele[name+fn]);
    }
    else ele.addEventListener(name,fn,false);
  },
  //�¼����
  unbind:function(ele,name,fn){
     if(ele.detachEvent) {
     ele.detachEvent('on'+name,ele[name+fn]);
     ele[name+fn] = null;
      }
     else ele.removeEventListener(name,fn,false);
  },
  //�������
  prop:function(ele,name, value) {
		if (typeof(value) == 'undefined' && ele[name]) {
			return ele[name];
		} else {
				ele[name] = value;
		}
   },  
   //�ı��ڵ㸳ֵ
   text:function(ele,value) {
         return this.prop(ele,typeof ele.innerText != 'undefined' ? 'innerText' : 'textContent', value);
   } 	 
};

function submitCommon(form,tempId) {
	var value = document.getElementById(tempId).value;
	if(value=='') alert('����д��ѯ��Ϣ');
	else {
		form.action="http://data.stock.hexun.com/search/default.aspx";
		//window.open(form.action);
		form.submit();
	}
}