define(['jquery', 'scrollto'], function($, scrollto) {
	function BackTop(obtn,opts) {	// 构造函数，obtn 为所点击的按钮对象，opts 为可选参数
		this.opts = $.extend({}, BackTop.DEFAULTS, opts); // extend 方法表示，如果用户传入opts，则将默认参数覆盖， 保存到空对象中，将对象返回。如果用户没有传参，使用默认参数
		this.$ob1 = $(obtn); // $(obtn)将obtn 转换成jquery 对象
		this.scroll = new scrollto.ScrollTo({
			dest: 0,
			speed: this.opts.speed
		});

		this._positionCheck(); // 初始化时，检测位置，确定返回顶部按钮是否隐藏

		if (this.opts.mode == 'move') {
			this.$ob1.on('click', $.proxy(this._move, this)); // $.proxy() 第二个参数表示将this 指向 BackTop 对象
		}else {
			this.$ob1.on('click', $.proxy(this._go, this)); // 将this 指向 BackTop 对象
		}
		
		$(window).on('scroll', $.proxy(this._positionCheck, this));	// 监听window的 scroll 事件，并且check 位置
	}
	BackTop.DEFAULTS = {  // 默认值
		mode: 'move',	// 移动的模式，迅速到顶部或者缓慢到达
		pos: $(window).height(),	// 返回顶部按钮消失/出现的临界值
		speed: 800	// 返回的速度
	};
	BackTop.prototype._move = function () {
		this.scroll.move();
	}
	BackTop.prototype._go = function () {
		this.scroll.go();
	}
	BackTop.prototype._positionCheck = function () {
		var $ob1 = this.$ob1;

		if ($(window).scrollTop() > this.opts.pos) {	// scrollTop() 获得滚动条相对于其顶部的偏移
			$ob1.fadeIn();
		}else {
			$ob1.fadeOut();
		}
	}

	// 以下一段为jquery 插件常用格式
	$.fn.extend({
		backtop: function (opts) {
			return this.each(function () { // 此时的this 表示 选择器选中的对象,可能不止一个，所以要遍历
				new BackTop(this, opts);
			});
		}
	});

	return {
		BackTop: BackTop
	};
});