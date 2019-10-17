$('#save').click(function(){
	var field = $(".field");
	var c_field = $(".c_field");

	for (var i = 0; i < field.length && i < c_field.length; i++) {
		$(field[i]).text(
			$(c_field[i]).val());
	}

	$('#switch').text(
		"switch #"+$('#changed_switch').val());
})


$('#modalForm').on('shown.bs.modal', function(){

	var field = $(".field");
	var c_field = $(".c_field");

	for (var i = 0; i < field.length  && i < c_field.length; i++) {
		$(c_field[i]).val(
			$(field[i]).text());
	}

	$('#changed_switch').val(
		$('#switch').text().split("#")[1]);
})

