(function( $ ) {

$.fn.randomClass = function(count){
	var	elsLength = this.length;
		classNums = [];

	if (count <= 0 || isNaN(count)){
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

	return this.each(function(){
		var randomNum = Math.floor(Math.random() * count),
		selectedNum = classNums.splice(randomNum, 1);
		var currentItem = $(this);
		currentItem.addClass('randomClass' + selectedNum);
		count--;
	});

};

}( jQuery ));

