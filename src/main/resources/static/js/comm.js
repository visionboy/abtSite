<!--start addboard js-->
function add_board()
{
	var frm = document.addboard;
	if (frm.boardname.value.length < 2)
					{
						alert("게시판명을 입력하세요!");
						frm.boardname.value = "";
						frm.boardname.focus();
						return;
					}
	if (frm.bo_skin.value.length == '')
					{
						alert("사용하실 스킨을 선택하여 주세요!");
						frm.bo_skin.focus();
						return;
					}
	document.addboard.action= "admin_action.php"; 
	document.addboard.submit(); 
}
<!--End end board js-->


<!--start add_member js-->
function EnNumCheck(word)
			{
			var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
			for (i=0; i< word.length; i++)
			{
			idcheck = word.charAt(i);
			for (j = 0; j < str.length; j++)
			{
			if (idcheck == str.charAt(j)) break;
			if (j+1 == str.length)
			{
			return false;
			}
			}
			}
			return true;
			}
			
function isNumber( s ){  
			var regu = "^[0-9]+$";
			var re = new RegExp(regu);
			if (s.search(re) != -1) {
			return true;
			} else {
			return false;
			}
			}
			
function keyCheck(){
			if(event.keyCode < 48 || event.keyCode > 57)
				{
					alert("키값이은 48~57사이만 가능합니다.");
					event.returnValue= false;
				}
			}
		
function checkEmail(strEmail) {
			// var emailReg = /^[_a-z0-9]+@([_a-z0-9]+\.)+[a-z0-9]{2,3}$/;
			var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
			if( emailReg.test(strEmail) ){
			return true;
			}else{
			return false;
			}
			}

function   mem_post(){
			var frm = document.theForm;
			var email = frm.email1.value + "@" +frm.email2.value;

					if (frm.uname.value.length == 0)
					{
						alert("이름을 입력하여주세요");
						frm.uname.focus();
						return false;
					}
					
					if (frm.ckidr.value != "o")
					{
						alert("우선 아이디 체크하여 주세요.");
						frm.uid.focus();
						return false;
					}
					

					if ((frm.uid.value.length == 0) || (frm.uid.value.length < 4) ||  (frm.uid.value.length > 14) )
					{
						alert("4자이상 16자이하의 아이디를 입력하여주세요");
						frm.uid.focus();
						return false; 
					}
					else if ( EnNumCheck(frm.uid.value) == false)
					{
						alert("아이디는 4자이상 16자이하의  영문 숫자만 가능합니다.");
						frm.uid.focus();
						return false; 
					}
					
					
					if (frm.upw.value.replace(/ /g, '') == "" )
					{
						alert("비밀번호를 입력하여주세요");
						frm.upw.focus();
						return false; 
					}

					
					
					
					if (frm.gno.value.length == 0)
					{
						if (frm.upw.value != frm.pwcf.value )
						{
							alert("입력한 비밀번호가 불일치합니다. 다시 입력하여주세요");
							frm.upw.focus();
							return false; 
						}
					}

					
					
//					
//					
//					if ((frm.ju1.value.length != 6) || (isNumber(frm.ju1.value) == false))
//				    {
//				        alert("정확한 주민번호를 확인하여 주세요!");
//				        frm.ju1.focus();
//				        return false;
//				    }
//					
//					if ((frm.ju2.value.length != 7) || (isNumber(frm.ju2.value) == false))
//				    {
//				        alert("정확한 주민번호를 확인하여 주세요!");
//				        frm.ju2.focus();
//				        return false;
//				    }
					
					if (checkEmail(email) == false)
					{
						alert("정확한이메일정보를 입력하여주세요");
						frm.email1.focus();
						return false; 
					}

					if ((frm.mobile1.value.length == 0) || (frm.mobile2.value.length == 0) || (frm.mobile3.value.length == 0))
					{
						alert("연락처 정보를 입력하여 주시길바랍니다.");
						frm.mobile2.focus();
						return false; 
					}
					else if ((isNumber(frm.mobile1.value) == false) || (isNumber(frm.mobile2.value) == false) || (isNumber(frm.mobile3.value) == false))
					{
						alert("정확한 연락처 정보를 입력하여 주시길바랍니다!");
						frm.mobile2.focus();
						return false; 
					}
					
					if ((frm.mb_zip1.value.length == 0) || (frm.mb_zip2.value.length == 0) || (frm.mb_addr1.value.length == 0) || (frm.mb_addr2.value.length == 0) )
					{
						alert("상세한 주소내역을 전부 입력하여 주시길바랍니다.");
						frm.mb_addr2.focus();
						return false; 
					}
					
//					if ((frm.phone1.value.length == 0) || (frm.phone2.value.length == 0) || (frm.phone3.value.length == 0))
//					{
//						alert("핸드폰 정보를 입력하여 주시길바랍니다.");
//						frm.phone2.focus();
//						return false; 
//					}
//					else if ((isNumber(frm.phone1.value) == false) || (isNumber(frm.phone2.value) == false) || (isNumber(frm.phone3.value) == false))
//					{
//						alert("핸드폰 정보를 입력하여 주시길바랍니다!");
//						frm.phone2.focus();
//						return false; 
//					}
					
					
		}
	
<!--End end add_member js-->

<!-- Start ist products -->
function   prdt_post(){
	var frm = document.theForm;
	if (frm.pname.value.length == 0)
	{
		alert("상품명을 입력하여주세요");
		frm.pname.focus();
		return false;
	}
	if ( (frm.csprice.value.length == 0) || (isNumber(frm.csprice.value) == false) )
	{
		alert("정확한 가격정보를 입력하여주세요");
		frm.csprice.focus();
		return false;
	}
	
	if(CKEDITOR.instances.schedule.getData() == '')
	{
	   alert('일정표내용을 입력해 주세요.');
	   CKEDITOR.instances.schedule.focus();
	   return false;
	}
}

<!-- Start ist products_course -->
function   course_post(){
	var frm = document.theForm;
	if (frm.csname.value.length == 0)
	{
		alert("관광지명을 입력하여주세요");
		frm.csname.focus();
		return false;
	}
	if (frm.csmemo.value.length == 0) 
	{
		alert("관광지 설명정보를 입력하여주세요");
		frm.csmemo.focus();
		return false;
	}
// if (frm.file_1.value.length == 0)
// {
// alert("이미지파일을 첨부하여 주세요");
// frm.file_1.focus();
// return false;
// }
}


<!--Start login js-->
function   login(){ 
			var frm = document.loginform;
					
					if ((frm.user_id.value.length == 0) || (frm.user_id.value.length < 4) )
					{
						alert("4자이상의 아이디를 입력하여주세요");
						frm.user_id.select();
						frm.user_id.focus();
						return false; 
					}
					else if ( EnNumCheck(frm.user_id.value) == false)
					{
						alert("아이디는 4자이상의 영문 숫자만 가능합니다.");
						frm.user_id.focus();
						return false; 
					}
							
											
					if (frm.pw.value.replace(/ /g, '') == "" )
					{
						alert("비밀번호를 입력하여주세요");
						frm.pw.focus();
						return false; 
					}
				  return true; 
		}
<!--End login js-->

function   zipg(){ 
			var frm = document.zipsc;
									
					if (frm.sc.value.replace(/ /g, '') == "" )
					{
						alert("Please Input search keyword!");
						frm.sc.focus();
						return false; 
					}
		}

// 우편번호 창

function win_open(url, name, option)
    {
        var popup = window.open(url, name, option);
        popup.focus();
    }

function win_zip(frm_name, frm_zip1, frm_zip2, frm_addr1, frm_addr2)
{
    url = "post.php?frm_name="+frm_name+"&frm_zip1="+frm_zip1+"&frm_zip2="+frm_zip2+"&frm_addr1="+frm_addr1+"&frm_addr2="+frm_addr2;
    win_open(url, "winZip", "left=50,top=50,width=508,height=508,scrollbars=no");
}
function win_zip(frm_name, frm_zip1, frm_zip2, frm_addr1, frm_addr2)
{
    url = "../main/post.php?frm_name="+frm_name+"&frm_zip1="+frm_zip1+"&frm_zip2="+frm_zip2+"&frm_addr1="+frm_addr1+"&frm_addr2="+frm_addr2;
    win_open(url, "winZip", "left=50,top=50,width=508,height=508,scrollbars=no");
}

// 이메일 선택
function go_page(url) {
	    var frm = document.theForm;
	    frm.email2.value = url;
	    frm.email2.focus();
}

function sltem(url) {
	    var frm = document.qa_frm;
	    frm.email2.value = url;
	    frm.email2.focus();
}



// 공지사항 체크
function   ntc_post(){ 
			var frm = document.ntc_frm;
					
				if (frm.title.value.length == 0)
				{
					alert("제목을 입력하여주세요!");
					frm.title.focus();
					return;
				}

				if ((oEditors.getById["content1"].getIR()).length < 5)
				{
					alert("4자 이상의 내용을 입력하여주세요!");
					return;
				}
				else
				{
					// alert('ok');
					frm.content1.value = (oEditors.getById["content1"].getIR());
				}

					
		  document.ntc_frm.action= "notice_write.php"; 
		  document.ntc_frm.submit(); 
}

// 자료실 체크
function   board_post(){ 
			var frm = document.board_frm;
			var tb_id = frm.tb_id.value;

				if (tb_id=="sim") { // 심사게시판일때

					if (frm.uname.value.length == 0)
					{
						alert("이름을 입력하여주세요!");
						frm.uname.focus();
						return false;
					}
					
					if (frm.sttnum.value.length == 0)
					{
						alert("학번을 입력하여주세요!");
						frm.sttnum.focus();
						return false;
					}

					if (frm.qpw.value.length == 0)
					{
						alert("비밀번호를 입력하여주세요!");
						frm.qpw.focus();
						return false;
					}

				}

				if (frm.title.value.length == 0)
				{
					alert("제목을 입력하여주세요!");
					frm.title.focus();
					return false;
				}

				if ((oEditors.getById["content1"].getIR()).length < 5)
				{
					alert("4자 이상의 내용을 입력하여주세요!");
					return false;
				}
				else
				{
					// alert('ok');
					frm.content1.value = (oEditors.getById["content1"].getIR());
				}
}

//카테고리 입력 체크
function   category_post(){ 
			var frm = document.board_frm;

				if (frm.subject.value.length == 0)
				{
					alert("제목을 입력하여주세요.");
					frm.subject.focus();
					return false;
				}

				if (frm.stock.value.length == 0 || isNumber(frm.stock.value) == false)
				{
					alert("재고수량을 입력하여 주세요. 재고수량은 숫자만 입력가능합니다.");
					frm.stock.focus();
					return false;
				}
}

// Faq 체크
function   faq_post(){ 
			var frm = document.faq_frm;

				if (frm.title.value.length == 0)
				{
					alert("질문내용을 입력 하여주세요!");
					frm.title.focus();
					return false;
				}

				if (frm.content1.value.length < 5)
				{
					alert("4자 이상의 내용을 입력하여주세요!");
					frm.content1.focus();
					return false;
				}
}

// 게시판 검색시 사용되는 판단스크립트
function   sc_submt(){ 
			var frm = document.schform;
									
					if (frm.searinp.value.replace(/ /g, '') == "" )
					{
						alert("Please Input search keyword!");
						frm.searinp.focus();
						return false;
					}
}

// Q&A 체크
// 접수 체크
function   qna_post(ck){ 
		var frm = document.qa_frm;
		var email = frm.email1.value + "@" +frm.email2.value;
		var tbid = frm.tb_id.value;
				if ((frm.uname.value.length == 0) || (frm.uname.value.length < 2)) {
					alert("정확한 이름정보를 입력하여 주세요!");
					frm.uname.focus();
					return false;
				}

				if ((frm.mobile1.value.length == 0) || (frm.mobile2.value.length == 0) || (frm.mobile3.value.length == 0))
				{
					alert("정확한 연락 정보를 입력하여 주시길바랍니다.");
					frm.mobile2.focus();
					return false; 
				}
				else if ((isNumber(frm.mobile1.value) == false) || (isNumber(frm.mobile2.value) == false) || (isNumber(frm.mobile3.value) == false))
				{
					alert("정확한 연락정보를 입력하여 주시길바랍니다!");
					frm.mobile2.focus();
					return false; 
				}

				if (checkEmail(email) == false)
				{
					alert("정확한이메일정보를 입력하여주세요");
					frm.email1.focus();
					return false; 
				}
				
				if (tbid=="qa")
				{
					if ((frm.qpw.value.length == 0) && (ck == 'ad'))
					{
						alert("비밀번호정보를 입력하여 주시길바랍니다.!");
						frm.qpw.focus();
						return false;
					}
				}
				
				
				if (frm.title.value.length == 0)
				{
					alert("제목을 입력하여주세요!");
					frm.title.focus();
					return false;
				}

				if (frm.content1.value.length < 5)
				{
					alert("4자 이상의 내용을 입력하여주세요!");
					frm.content1.focus();
					return false;
				}

				
				return true;
				
}

// 질문게시판 답변 체크
function   ans_post(url){ 
			var frm = document.answer_frm;
									
				if ((frm.actt.value.length == 0) || (frm.actt.value.length < 2))
				{
					alert("답변내용을 입력하여 주세요!");
					frm.actt.focus();
					return;
				}

		  document.answer_frm.action= url; 
		  document.answer_frm.submit(); 
}

// 삭제시 사용되는 스크립트
function de(url){
		if (!confirm("해당내역에 관하여 삭제하시겠습니까?")) return;	

		location.href=url;
}

// 수정시 사용되는 스크립트
function mo(url){
		location.href=url;
}

function modfy(url){
		location.href=url;
}

// 질문 수정시 사용되는 스크립트
function   qa_post2(){ 
		var frm = document.qa_frm;

				if (frm.title.value.replace(/ /g, '') == "" )
				{
					alert("제목을 입력하여주세요!");
					frm.title.focus();
					return; 
				}


				if ((frm.uname.value.length == 0) || (frm.uname.value.length < 2))
				{
					alert("정확한 이름정보를 입력하여 주세요!");
					frm.uname.focus();
					return;
				}

				if ((frm.cntt.value.length == 0) || (frm.cntt.value.length < 2))
				{
					alert("내용정보를 입력하여 주세요!");
					frm.cntt.focus();
					return;
				}
		  document.qa_frm.action= "qa_write.php"; 
		  document.qa_frm.submit(); 
}

// 질문답변 비밀번호 체크
// 자료실 체크
function   pw_post(){ 
			
			var frm = document.pwform;
					
				if ((frm.upwd.value.length == 0) || (frm.upwd.value.length < 2) )
				{
					alert("정확한 비밀번호를 입력하여주세요");
					frm.upwd.select();
					frm.upwd.focus();
					return;
				}
					
		  document.pwform.action= "qa_pw.php"; 
		  document.pwform.submit(); 
}

function   pw_read(url,ckadmin,url2){
			if (ckadmin == 'o')
			{
				location.href=url2;
			}
			else
			{
				location.href=url;
			}
}

// 팝업띄우기
	function openPopup1(url, width, height, option)
	{
		var op = '';
		op += 'width=' + width + ',height=' + height + ',top=' + ((screen.availHeight - height - 50) / 2) + ', left=' + ((screen.availWidth - width-10) / 2) + ' ,';
		if(typeof option == 'undefined') op += 'status=yes, menubar=no, scrollbars=no, resizable=no, toolbar=no';
		else if(option == 'scroll') op += 'status=no, menubar=no, scrollbars=yes, resizable=no, toolbar=no';
		else op += option;
		window.open(url, '', op);
	}
// 주민등록번호 체크 시작
// maxlength 만큼 옮기면 다음으로 이동하기....


	function nextFocus(sFormName,sNow,sNext)
	{
		var sForm = 'document.'+ sFormName +'.'
		var oNow = eval(sForm + sNow);
	
		if (typeof oNow == 'object')
		{
			if ( oNow.value.length == oNow.maxLength)
			{
				var oNext = eval(sForm + sNext);
	
				if ((typeof oNext) == 'object')
					oNext.focus();
			}
		}
	}
	
	function juSubmit()
	{
		var frm = document.fregisterfrm;
		var una = frm.uname.value;
		var uju = frm.ju.value;
		var uju1 = frm.ju1.value;
		if ((frm.uname.value.length == 0))
		{
			alert("정확한 이름정보를 입력하여 주세요!");
			frm.uname.focus();
			return;
		}

		if ((frm.ju.value.length != 6))
		{
			alert("정확한 주민번호를 확인하여 주세요!");
			frm.ju.focus();
			return;
		}

		if ((frm.ju1.value.length != 7))
		{
			alert("정확한 주민번호를 확인하여 주세요!");
			frm.ju1.focus();
			return;
		}
		
		var url = 'nc_p.php?ju=' + uju + '&ju1=' + uju1 + '&uname=' + una + '&mcnt=100&jutype=main';
		document.getElementById('main_proc').src = url;
	// openPopup1(url, 0, 0);

}
// 주민등록번호 체크 종료

// 팀1 주민등록번호 체크 시작
function juSubmit1()
	{
		var frm = document.fregisterfrm;

		var una = frm.sbname1.value;
		var uju = frm.sbju1.value;
		var uju1 = frm.sbtju1.value;
		if ((frm.sbname1.value.length == 0))
		{
			alert("정확한 이름정보를 입력하여 주세요!");
			frm.sbname1.focus();
			return;
		}

		if ((frm.sbju1.value.length != 6))
		{
			alert("정확한 주민번호를 확인하여 주세요!");
			frm.sbju1.focus();
			return;
		}

		if ((frm.sbtju1.value.length != 7))
		{
			alert("정확한 주민번호를 확인하여 주세요!");
			frm.sbtju1.focus();
			return;
		}
		
		var url = 'nc_p.php?ju=' + uju + '&ju1=' + uju1 + '&uname=' + una + '&mcnt=100&jutype=sub1';
		document.getElementById('main_proc').src = url;

}

// 팀2 주민등록번호 체크 시작
function juSubmit2()
	{
		var frm = document.fregisterfrm;

		var una = frm.sbname2.value;
		var uju = frm.sbju2.value;
		var uju1 = frm.sbtju2.value;
		if ((frm.sbname2.value.length == 0))
		{
			alert("정확한 이름정보를 입력하여 주세요!");
			frm.sbname2.focus();
			return;
		}

		if ((frm.sbju2.value.length != 6))
		{
			alert("정확한 주민번호를 확인하여 주세요!");
			frm.sbju2.focus();
			return;
		}

		if ((frm.sbtju2.value.length != 7))
		{
			alert("정확한 주민번호를 확인하여 주세요!");
			frm.sbtju2.focus();
			return;
		}
		
		var url = 'nc_p.php?ju=' + uju + '&ju1=' + uju1 + '&uname=' + una + '&mcnt=100&jutype=sub2';
		document.getElementById('main_proc').src = url;
}
function closewin(){
		window.close();
}

// 질문과 답변 비밀번호 체크 스크립트
function showDetail(code) { 
	var frm = document.pwform; 
	if (code=="x") {
		$('.bbspop').fadeOut();
	} else {
		$('.bbspop').fadeIn();
		$("#hno").val(code);
		frm.ckpw.focus();
	}
}

function frmck() {
	var frm = document.pwform;
	if (frm.ckpw.value.replace(/ /g, '') == "" ) {
		alert("비밀번호를 입력하여주세요!");
		frm.ckpw.focus();
		return false; 
	}
}

// 전체선택 및 삭제
function input_del(table) {
	var oTable    = document.getElementById(table);
	// var tr_rows = oTable.rows.length; // 테이블 row 개수(Tr의 개수)
	var row_index = parseInt(oTable.rows.length) -1; // 테이블 row 즉 Tr의 고유 인덱스를
														// 지정함
	// tr이 하나일때는 삭제하지 않는다.
	if(row_index >= 1)
	{
	  oTable.deleteRow(row_index);
	}   
}
var checkflag = false;
function allcheck(theForm){
	var theForm=eval(theForm);
	if (checkflag == false) { 
		for( var i=0; i<theForm.elements.length; i++) { 
			var check = theForm.elements[i]; 
			theForm.elements[i].checked = true; 
		} 
		checkflag = true;
	}else {
		for( var i=0; i<theForm.elements.length; i++) { 
			var check = theForm.elements[i]; 
			theForm.elements[i].checked = false; 
		} 
		checkflag = false;
	}
	return; 
} 
function checkForm() {
   var f = document.theForm; 
   for(var i=0;i<f.elements.length;i++) {
      if(f.elements[i].type == 'checkbox') { 
         if(f.elements[i].checked == true) return true; 
      } 
   } 
   alert("우선 선택해 주세요."); 
   return false; 
} 
function allDel(url){
	var theForm = document.theForm;
	if(confirm('정말 삭제하시겠습니까?')){
		theForm.action = url;
	    if(checkForm()){
	       theForm.submit();
		}
	}
}

function allup(url){
	var theForm = document.theForm;
	if(confirm('정말로 변경처리하겠습니까?')){
		theForm.action = url;
	    theForm.submit();
		
	}
}


