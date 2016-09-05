requirejs.config({
	paths: {
		jquery: "jquery.min"
	}
});

requirejs(["jquery", "backtop"],function ($, backtop){

	// 插件形式
	$('#backTop').backtop({
		mode: 'move',
		pos: 100,
		speed: 500
	});


	/* ******************************************************************* */
	// 构造函数形式
	/*new backtop.BackTop($('#backTop'), {
		mode: 'move',
		pos: 100,
		speed: 500
	});
*/

    /* ****************************************************************** */

	/*var scrollto = new scrollto.ScrollTo ({
		dest: 10,
		speed: 800
	});

	$("#backTop").on("click", $.proxy(scrollto.move,scrollto)); //  每点击一次都会触发一次move,如果连续点击多次就会产生多次的animate，所以需要在animate处进行限制
	$(window).on("scroll", function(){
		checkPosition($(window).height());
	});

	checkPosition($(window).height());
	
	function move() {
		$("html, body").animate ({
			scrollTop: 0
		},800);
	}

	function go() {
		$("html, body").scrollTop(0);
	}

	function checkPosition(pos) {
		if ($(window).scrollTop() > pos)
			$("#backTop").fadeIn();
		else 
			$("#backTop").fadeOut();
	}*/
});