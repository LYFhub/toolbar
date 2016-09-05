define(['jquery'], function($) {
	function ScrollTo(opts) {
		this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);  // extend 的用法
		this.$e1 = $('html, body');  // 缓存一下
	}
	ScrollTo.DEFAULTS = {
		dest: 0,
		speed: 800
	};

	ScrollTo.prototype.move = function () { // 原型的用法

		var opts = this.opts, // 定义为局部变量之后，后面使用时访问速度更快
			dest = this.opts.dest;

		if ($(window).scrollTop != dest) { // 对触发条件进行限制，1.是否到达目的地
			if (!this.$e1.is(':animated')) {  // 2.判断是否运动
				this.$e1.animate({
					scrollTop: dest
				},opts.speed);
			}
		}
	};

	ScrollTo.prototype.go = function () {
		var dest = this.opts.dest;

		if ($(window).scrollTop != dest) {
			this.$e1.scrollTop(dest);
		}
	};

	return {
		ScrollTo: ScrollTo
	};
});