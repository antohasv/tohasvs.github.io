function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

var analytic = new YandexAnalytic();//GoogleAnalytic();

$(document).ready(function(){
	var hasScrollPage2 = false;

	$("#pointer").click(function (){	
		analytic.clickToBtnArrow();
	   	$('html, body').animate({
	    	scrollTop: $("#page2").offset().top
	     	}, 1000);
  	});

  	$(window).scroll(function() {
  		if (!hasScrollPage2 && ($(this).scrollTop() >= $("#page2").offset().top)) {
  			hasScrollPage2 = true;
  			analytic.scrollToPage2();
  		}
  	});

	$("#btn_send").click(function() {
      	var email = $("#email").val();
       	if (!validateEmail(email)) {
       	    $("#email").css("color", "red");
       	    analytic.clickToBtnSendFailureEmail();
       	} else {
       	    $("#email").val("");
       	    alert("Ваш e-mail учтен.");
       	    analytic.clickToBtnSendSuccessEmail();
       	}
   	});

    $( "#email" ).keyup(function(){
        $("#email").css("color", "black");
    });
	
	$("#btn_try").click(function() {
		analytic.clickToBtnTry();

		$("#btn_try").css("display", "none");
		$("#page3").css("display", "block");
		$('html, body').animate({
	          	scrollTop: $("#page3").offset().top
	       	}, 1000);
	});

	$(".pointer_container").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
		 $(this).removeClass("animated")  
	});

	$(".pointer_container").hover(function(){
  		$(this).addClass("animated");        
	});
});
