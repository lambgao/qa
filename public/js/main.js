$(document).ready(function() {
    $("#teach").click(function() {
        var question = $("#question").val().trim();
        var answer = $("#answer").val().trim();
        if(question==''||answer==''){
        	alert('不能为空');
        }else{
	        $.ajax({
	            url : 'teacher/' + question + '/' + answer,
	            type : 'GET',
	            dataType : 'json',
	            error : function() {
	                alert('发送失败');
	            },
	            success : function(json) {
	                alert(json);
	            }
	        });
        }
    });
});
