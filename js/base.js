function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

$(document).ready(function(){
	$("#pointer").click(function (){	
		w.yaCounter26499924.reachGoal('btn_arrow_click');
	   	$('html, body').animate({
	    	scrollTop: $("#page2").offset().top
	     	}, 1000);
  	});

	$("#btn_send").click(function(){
      	var email = $("#email").val();
       	if (!validateEmail(email)) {
       	    $("#email").css("color", "red");
           	w.yaCounter26499924.reachGoal('email_failure');
       	} else {
       	    $("#email").val("");
       	    alert("Ваш e-mail учтен.");
           	w.yaCounter26499924.reachGoal('email_success', {userEmail: email});
       	}
   	});

    $( "#email" ).keyup(function(){
        $("#email").css("color", "black");
    });

	
	$("#btn_try").click(function() {
		w.yaCounter26499924.reachGoal('btn_try_click');

		$("#btn_try").css("display", "none");
		$("#page3").css("display", "block");
		$('html, body').animate({
	          	scrollTop: $("#page3").offset().top
	       	}, 1000);
	});
});