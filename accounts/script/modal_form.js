var el

$('.user button').click(function(){
	$('#modalForm').modal('show');

	el = $(this).parent();
	$('#c_name').val($(el[0].children[0]).text());
	$('#c_location').val($(el[0].children[2]).text());
	$('#c_email').val($(el[0].children[3]).text());
})

$('#save').click(function(){
	$('#modalForm').modal('hide');

	$(el[0].children[0]).text($('#c_name').val());
	$(el[0].children[2]).text($('#c_location').val());
	$(el[0].children[3]).text($('#c_email').val());
})