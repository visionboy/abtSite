//font Ȯ��_���
//Specify affected tags. Add or remove from list: 
var tgs = new Array( 'div','td','tr','a','p','ul','li','ol','h1','h2','h3','h4','h5','address','select','input','span','em','strong','dt','dd','pre','em'); 

//Specify spectrum of different font sizes: 
var szs = new Array( 'xx-small','x-small','small','medium','large','x-large','xx-large' ); 
var startSz = 2; 

function ts( trgt,inc ) {
if (!document.getElementById) return 
var d = document,cEl = null,sz = startSz,i,j,cTags; 

sz += inc; 
if ( sz < 0 ) sz = 0; 
if ( sz > 6 ) sz = 6; 
startSz = sz; 

if ( !( cEl = d.getElementById( trgt ) ) ) cEl = d.getElementsByTagName( trgt )[ 0 ]; 

cEl.style.fontSize = szs[ sz ]; 

for ( i = 0 ; i < tgs.length ; i++ ) { 
cTags = cEl.getElementsByTagName( tgs[ i ] ); 
for ( j = 0 ; j < cTags.length ; j++ ) cTags[ j ].style.fontSize = szs[ sz ]; 
} 
} 


/* �̹��� �����ƿ� */
/* ex)<a href="#" onmouseover="chImg(lmch1);" onmouseout="chImg(lmch1);" onfocus="chImg(lmch1);" onblur="chImg(lmch1);"><img src="�̹�����" name="lmch1" id="lmch1" /></a> */
function chImg(img) {
	imgName = img.src;
	if( imgName.indexOf("on.") > -1 ) {
		var re = /on\./g;
		img.src = imgName.replace(re,"off.");
	} else {
		var re = /off\./g;
		img.src = imgName.replace(re,"on.");
	}
}

/* roll over-out image */
/* ex)body �ȿ� ����<script type="text/javascript">initImgEffect('imgmenu01')</script> */
function menuOver() {
	var s = this.src;
	s = s.replace("_on.gif", ".gif");
	this.src = s.replace(".gif", "_on.gif");
}

function menuOut() {
	this.src = this.src.replace("_on.gif", ".gif");
}

function initImgEffect(ImgEls,SelImg) {
	
	MenuImg = document.getElementById(ImgEls).getElementsByTagName("img");
	MenuImgLen = MenuImg.length;

	for (i=0; i<MenuImgLen; i++) {
		MenuImg.item(i).onmouseover = menuOver;
		MenuImg.item(i).onmouseout = menuOut;
		if (i == SelImg) {
			MenuImg.item(i).onmouseover();
			MenuImg.item(i).onmouseover = null;
			MenuImg.item(i).onmouseout = null;
		}
	}
}