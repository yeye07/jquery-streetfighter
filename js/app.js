

$(document).ready(function() {
	themesong();
	$('.sf-logo').fadeIn(3500);
	$('.sf-logo').fadeOut(1000);
      $('.brought-by').fadeIn(8000)
       $('.brought-by').fadeOut(1000)
         $('.jquery-logo').fadeIn(9000)
           $('.jquery-logo').fadeOut(1000)
             $('.how-to').fadeIn(1000);
   

	  $('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
     .mouseleave(function(){
     	$('.ryu-still').show();
		$('.ryu-ready').hide();
})
		 .mousedown(function(){
         playHadouken();
         $('.ryu-ready').hide();
         $('.ryu-throwing').show();
         $('.hadouken').finish().show().animate(
           {'left': '1200px'},
           500,
           function(){
           	$(this).hide();
           	$(this).css('left','520px');
           });
})


		 .mouseup(function(){
     	$('.ryu-throwing').hide();
     	$('.ryu-ready').show();

 });
});


function themesong(){
	$('#theme-song')[0].volume = 0.3;
	$('#theme-song')[0].play();

}



function playHadouken(){
	$('#hadouken-sound') [0].volume = 0.5;
	$('#hadouken-sound') [0].load();
	$('#hadouken-sound') [0].play();

}


$(document).keydown(function(e) {
    if (e.keyCode == 88) {
    	   $('.ryu-cool').show();
    	   $('.ryu-ready').hide();
    	   $('.ryu-still').hide();
  
    }
    }).keyup(function(e) {
      if (e.keyCode == 88) {
     $('.ryu-cool').hide();
      $('.ryu-ready').show();

    }
  });


