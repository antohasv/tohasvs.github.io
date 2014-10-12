function extend(Child, Parent) {
    var F = function() { }
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.superclass = Parent.prototype
}

function Analytic() {}

Analytic.prototype.scrollToPage2 = function() {};
Analytic.prototype.clickToBtnArrow = function() {};
Analytic.prototype.clickToBtnTry = function() {};
Analytic.prototype.clickToBtnSendSuccessEmail = function(email) {};
Analytic.prototype.clickToBtnSendFailureEmail = function(email) {};		

function GoogleAnalytic() {
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script',"http://www.google-analytics.com/analytics.js",'ga');

	ga('create', 'UA-55409967-1', 'none');
	ga('send', 'pageview');
}
extend(GoogleAnalytic, Analytic);

GoogleAnalytic.prototype.scrollToPage2 = function() {
  	ga('send', 'event', 'page2', 'scroll');
};

GoogleAnalytic.prototype.clickToBtnTry = function() {
	ga('send', 'event', 'btn_try', 'click');
};
GoogleAnalytic.prototype.clickToBtnArrow = function() {
		ga('send', 'event', 'btn_arrow', 'click');
};

GoogleAnalytic.prototype.clickToBtnSendSuccessEmail = function(email) {
   	ga('send', 'event', 'btn_send', 'click', 'success email');
    ga('send', 'event', 'db_email', email);
};

GoogleAnalytic.prototype.clickToBtnSendFailureEmail = function(email) {
   	ga('send', 'event', 'btn_send', 'click', 'failure email');
};	

function YandexAnalytic() {
	(function (d, w, c) {
	    (w[c] = w[c] || []).push(function() {
	        try {
	            w.yaCounter26499924 = new Ya.Metrika({id:26499924,
	                    clickmap:true,
	                    trackLinks:true,
	                    accurateTrackBounce:true});
	        } catch(e) { }
	    });

	    var n = d.getElementsByTagName("script")[0],
	        s = d.createElement("script"),
	        f = function () { n.parentNode.insertBefore(s, n); };
	    s.type = "text/javascript";
	    s.async = true;
	    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

	    if (w.opera == "[object Opera]") {
	        d.addEventListener("DOMContentLoaded", f, false);
	    } else { f(); }
	})(document, window, "yandex_metrika_callbacks");
}
extend(YandexAnalytic, Analytic);

YandexAnalytic.prototype.scrollToPage2 = function() {
	window.yaCounter26499924.reachGoal('scroll_to_page2');
};
YandexAnalytic.prototype.clickToBtnArrow = function() {
	window.yaCounter26499924.reachGoal('btn_arrow_click');
};
YandexAnalytic.prototype.clickToBtnTry = function() {
	window.yaCounter26499924.reachGoal('btn_try_click');
};
YandexAnalytic.prototype.clickToBtnSendSuccessEmail = function(email) {
	window.yaCounter26499924.reachGoal('email_success', {userEmail: email});
};
YandexAnalytic.prototype.clickToBtnSendFailureEmail = function(email) {
	window.yaCounter26499924.reachGoal('email_failure');
};	
