var currentDate = new Date();
var currentYear = currentDate.getFullYear();

$(function() {
	$('a.smoothScroll').smoothScroll({
		speed: 400
	});

	$('span.year').text(currentYear);
});