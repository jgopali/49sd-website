$(document).ready(function(){
	$('.ddown').click(function(){
		$(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
		$(this).find('div').slideToggle(500);
	})

	$( '#accordion' ).accordion({
		collapsible: true,
		active: false,
		heightStyle: 'content',
		animate: {
			duration: 400
		}
	});

	function checkFlag(object) {
		var id = $(object).attr('id');
		var flag = $(object).prev('input').val();
		var pass = false;
		switch(id) {
			case 'q1':
				if (flag == 'flag_{sUbMiT_tHiS_wHoLe_LiNe}') {
					pass = true;
					break;
				}
			case 'q2':
				if (flag == 'u_R_H@ck3r') {
					pass = true;
					break;
				}
			default:
				pass = false;
		}
		if (pass) {
			alert('Congrats! You have completed this challenge.');
			$(object).prev('input').val('');
			$(object).prev('input').attr('placeholder', 'Correct!');
		} else {
			$(object).prev('input').val('');
			$(object).prev('input').attr('placeholder', 'Incorrect');
		}
	}
	
	$('.ctf-submit').click(function(){
		checkFlag($(this));
	})

	$('.ctf-hint').click(function(){
		$(this).next('p').toggle();
	})
});
