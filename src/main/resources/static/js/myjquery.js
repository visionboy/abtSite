function ckid() // īƮ�� �߰��ϱ�
{
    var pid = $("#pid").val(); // ��ǰ�ڵ�
    var rdo = document.getElementsByName('sbprice');
   
    $.post("ajax_pro1.php", {
        pid: pid,
        tp: tp,
        zong: zong
    }, function (data) {
        
    });
}