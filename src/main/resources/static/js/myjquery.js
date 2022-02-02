function ckid() // 카트로 추가하기
{
    var pid = $("#pid").val(); // 상품코드
    var rdo = document.getElementsByName('sbprice');
   
    $.post("ajax_pro1.php", {
        pid: pid,
        tp: tp,
        zong: zong
    }, function (data) {
        
    });
}