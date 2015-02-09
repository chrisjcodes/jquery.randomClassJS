(function( $ ) {

$.fn.randomClass = function(options){
	var defaults = {
		count: 0,
		repeat: false,
		customClass: "randomClass",
		after: function(){}
	}

	var settings = $.extend({}, defaults, options );

	var	elsLength = this.length;
		classNums = [],
		count = settings.count;

	if (count <= 0 || isNaN(count) || count < elsLength){
		count = elsLength;
		for(i = 0; i< count; i++){
				classNums.push(i);
		}
	}

	else{
		for(i = 0; i< count; i++){
			classNums.push(i);
		}
	}

	if (settings.repeat === false){
		return this.each(function(){
			var randomNum = Math.floor(Math.random() * count),
			selectedNum = classNums.splice(randomNum, 1);
			var currentItem = $(this);
			currentItem.addClass(settings.customClass + selectedNum);
			count--;
		}, settings.after());

	} else {
		return this.each(function(){
			var randomNum = Math.floor(Math.random() * count);
			var currentItem = $(this);
			currentItem.addClass(settings.customClass + randomNum);
			count--;
		},settings.after());
	}
	

};

}( jQuery ));