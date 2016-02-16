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
            customArrayLen = settings.customArray.length,
            randomNum,
            selected;


        if (customArrayLen > 0) {
            count = customArrayLen

            if (count < elsLength) {
                return this.each(function() {
                    randomNum = Math.floor(Math.random() * count);
                    $(this).addClass(settings.customArray[randomNum]);
                }, settings.after());

            } else {
                return this.each(function() {
                    randomNum = Math.floor(Math.random() * count);
                    selected = String(settings.customArray.splice(randomNum, 1));
                    $(this).addClass(selected);
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
                randomNum = Math.floor(Math.random() * count);
                selected = classNums.splice(randomNum, 1);
                $(this).addClass(settings.customClass + selected);
                count--;
            }, settings.after());

        } else {
            return this.each(function() {
                randomNum = Math.floor(Math.random() * count);
                $(this).addClass(settings.customClass + randomNum);
            }, settings.after());
        }


    };

}(jQuery));
