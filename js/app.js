$(document).ready(function() {
 $('div.ryu').mouseenter(function(){
		$('div.ryu-still').hide();
		$('div.ryu-ready').show();
	})
.mouseleave(function(){
	$('div.ryu-still').hide();
		$('div.ryu-ready').show();
});
});