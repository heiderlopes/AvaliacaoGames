$(function () {

	$('#login-form-link').click(function (e) {
		$("#login-form").delay(100).fadeIn(100);
		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function (e) {
		$("#register-form").delay(100).fadeIn(100);
		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});
$(document).ready(function () {
	$("input[type=range]").change(function () {
		//Input utilizado
		var inputSel = $(this);

		//Pegando os dados da pesquisa e sentando nos campos hidden
		$("#iNmGame").val($("#iNm").text());
		$("#iUrlIcon").val($("#iUrl").text());
		
		//Pegando o valor do Range e verifcando se está maior ou menor
		// para assim adicionar ou diminuir as estrelas.
		var star = "<span></span>";
		for(var x = 0 ; x < inputSel.val(); x++){
			star = star + "<span class='glyphicon glyphicon-star'></span>";

			if(inputSel.attr("name") == "tUsabilidade"){
				$("#iUsa").html(star);
			}
			else if(inputSel.attr("name") == "tGrafico"){
				$("#iGraf").html(star);
			}
			else if(inputSel.attr("name") == "tRoteiro"){
				$("#iRot").html(star);
			}
		}

		if(inputSel.attr("name") == "tUsabilidade" && inputSel.val() == 0){
			$("#iUsa").html(star);
		}
		else if(inputSel.attr("name") == "tGrafico" && inputSel.val() == 0){
			$("#iGraf").html("<span></span>");
		}
		else if(inputSel.attr("name") == "tRoteiro" && inputSel.val() == 0){
			$("#iRot").html("<span></span>");
		}

	});
});