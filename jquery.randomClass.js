(function($) {

    $.fn.randomClass = function(options) {
        var defaults = {
                count: 0,
                repeat: false,
                customClass: "randomClass",
                customArray: [],
                after: function() {}
            },
            settings = $.extend({}, defaults, options),
            elsLength = this.length,
            classNums = [],
            count = settings.count,
            customArrayLen = settings.customArray.length;


        if (customArrayLen > 0) {
            count = customArrayLen

            if (count < elsLength) {
                return this.each(function() {
                    var randomNum = Math.floor(Math.random() * count),
                        currentItem = $(this);

                    currentItem.addClass(settings.customArray[randomNum]);
                }, settings.after());

            } else {
                return this.each(function() {
                    var randomNum = Math.floor(Math.random() * count),
                        selectedClass = String(settings.customArray.splice(randomNum, 1)),
                        currentItem = $(this);

                    currentItem.addClass(selectedClass);
                    count--;
                }, settings.after());
            }

        }

        if (count <= 0 || isNaN(count) || count < elsLength) {
            count = elsLength;
        }

        for (i = 0; i < count; i++) {
            classNums.push(i);
        }


        if (settings.repeat === false) {
            return this.each(function() {
                var randomNum = Math.floor(Math.random() * count),
                    selectedNum = classNums.splice(randomNum, 1),
                    currentItem = $(this);

                currentItem.addClass(settings.customClass + selectedNum);
                count--;
            }, settings.after());

        } else {
            return this.each(function() {
                var randomNum = Math.floor(Math.random() * count),
                    currentItem = $(this);

                currentItem.addClass(settings.customClass + randomNum);
            }, settings.after());
        }


    };

}(jQuery));
