$(document).ready(function(){
	$('.ddown').click(function(){
		$(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
		$(this).find('div').slideToggle(500);
	})

	$('#accordion, #log-analysis-accordion').accordion({
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
				if (flag === 'flag_{sUbMiT_tHiS_wHoLe_LiNe}') {
					pass = true;
					break;
				}
			case 'q2':
				if (flag === 'u_R_H@ck3r') {
					pass = true;
					break;
				}
			case 'q3_1':
				if (flag === '10000') {
					pass = true;
					break;
				}
			case 'q3_2':
				if (flag === '1753') {
					pass = true;
					break;
				}
			case 'q3_3':
				if (flag === '66.249.73.135') {
					pass = true;
					break;
				}
			case 'q3_4':
				if (flag === '/favicon.ico') {
					pass = true;
					break;
				}
			case 'q3_5':
				if (flag === '9126') {
					pass = true;
					break;
				}
			case 'q4':
				if (flag === 'h3Ll0_b0B') {
					pass = true;
					break;
				}
			default:
				pass = false;
		}
		$(object).prev('input').val('');
		if (pass) {
			alert('Congrats! You have completed this challenge.');
			$(object).prev('input').attr('placeholder', 'Correct!');
		} else {
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
