var even_html = '<li class="even"><div class="bubble"><div class="bubbletop"></div><div class="bubblemiddle"><p>question</p></div><div class="bubblebottom"></div></div></li>';
var alt_html = '<li class="alt"><div class="bubble"><div class="bubbletop"></div><div class="bubblemiddle"><p>answer</p></div><div class="bubblebottom"></div></div></li>';
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
	            success : function(result) {
	                $("#question").val("");
	                $("#answer").val("");
	                //alert(result.status);
	            }
	        });
        }
    });
    $("#bubble").click(function() {
        var last = $("#last");
        var question = $("#question").val().trim();
        if(question==''){
            alert('不能为空');
        }else{
            $.ajax({
                url : 'bubbler/' + question,
                type : 'GET',
                dataType : 'json',
                error : function() {
                    alert('发送失败');
                },
                success : function(result) {
                    if(result.status > 0){
                        var even = even_html.replace("question", "黑鸟：" + question);
                        var alt = alt_html.replace("answer", "我：" + result.corpus.answer)
                        $(even).insertBefore(last);
                        $(alt).insertBefore(last);
                        $("#question").val("");
                    }else {
                        alert(result.status + "" + result.corpus.answer);
                    }
                }
            });
        }
    });
});