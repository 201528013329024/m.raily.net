var ScrollToTop = ScrollToTop || {
    setup: function () {

        $("#ScrollToTop").click(function () {
            $("html, body").animate({ scrollTop: "0px" }, 400);
            return false
        })
    }
};
$(document).ready(function(){
	var scroll_html='<div class="ml_scroll_top"><a href="tel:4001801188" target="_blank" id="ml_scroll_toptel"><span id="kst_top_num"></span></a><a href="javascript:void(0);" target="_self" id="ScrollToTop"></a></div>';
	$('body').append(scroll_html);
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		$(".ml_scroll_top").fadeIn();
		
	});
	ScrollToTop.setup();
	//快商通随机数
	var ksttop_random=Math.floor(Math.random()*20+10);
	$("#kst_top_num").html(ksttop_random);
});