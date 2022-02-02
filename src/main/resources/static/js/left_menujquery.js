function levelsmenu(rootid,menucodel1,menucodel2,menucodel3){
	var root=document.getElementById(rootid);
	var $root=$(root);
	var onstr='_on.gif';
	var offstr='.gif';
	var hoverclass='hover';
	function rplks(str,keywords,newkey) {
			var patt=new RegExp(keywords,'g');
			if(patt.exec(str)!= null){
				var str=str.replace(patt,newkey);
			}
			return str;
		}
	function curh(obj){
			$(">li>a:first-child",$(obj.parentNode.parentNode)).each(function (){
				if(this.getElementsByTagName('img')[0]){
					var imgfst=$(">img:first",this);
					imgfst.attr('src',rplks(imgfst.attr('src'),onstr,offstr));
				}else{
					$(this).removeClass(hoverclass);
				}
			})
			if(obj.getElementsByTagName('img')[0]){
				var oimgfst=$(">img:first",obj);
				oimgfst.attr('src',rplks(oimgfst.attr('src'),offstr,onstr));
			}else{
				$(obj).addClass(hoverclass);
			}
		}
	function cur(obj){
		curh(obj);
		if(obj.parentNode.parentNode.getElementsByTagName('ul').length>0){
			$(" ul",$(obj.parentNode.parentNode)).each(function (){
				$(this).hide();
			})
		}
		if(obj.parentNode.getElementsByTagName('ul').length>0){
			$(">ul:first",obj.parentNode).show();
		}
	}
	function sethover(){
		
		if(typeof(menucodel1)=='undefined'||menucodel1==''||menucodel1=='0'){
			$(">li>ul",$root).hide();
		}else{
			$(">li>a:first-child",$root).each(function (i){
				if(i==menucodel1-1){
					cur(this);
					$(">ul>li>a:first-child",$(this.parentNode)).each(function (i){
						if(i==menucodel2-1){
								cur(this);
						}
					})
				}
			})
		}
	}
	if(root){
		for(var i=0; i<root.getElementsByTagName('a').length; i++){
			var atag=root.getElementsByTagName('a')[i];
			atag.onclick=function(){
				cur(this);
			};
			atag.onfocus=function(){
				cur(this);
			};
			atag.onmouseover=function(){
				curh(this);
			};
		}
		$root.hover(function (){},function (){
			sethover();
		})
		sethover();
	}
}
