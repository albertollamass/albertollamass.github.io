/* Description: Custom JS file */


(function($) {
    "use strict"; 
	
    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });


    /* Countdown Timer - The Final Countdown */
	$('#clock').countdown('2022/1/9 17:00:00') /* change here your "countdown to" date */
	.on('update.countdown', function(event) {
		var format = '<span class="counter-number">%D<br><span class="timer-text">Days</span></span><span class="counter-number">%H<br><span class="timer-text">Hours</span></span><span class="counter-number">%M<br><span class="timer-text">Minutes</span></span><span class="counter-number">%S<br><span class="timer-text">Seconds</span></span>';
		$(this).html(event.strftime(format));
	})
	.on('finish.countdown', function(event) {
	$(this).html('Cópiame y pégame :) https://docs.google.com/presentation/d/1eroW9j7mxUT-jhIMNX1U2m2BkyR6fRWb/edit?usp=sharing&ouid=108671370337121084456&rtpof=true&sd=true')
		.parent().addClass('disabled');
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);
