# randomClassJS
A jQuery plugin that generates randomly numbered classes and applies them to a set of elements

## Basic Usage
First, include jQuery and randomClass at the end of your HTML document
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="jquery.randomClass.js"></script>
```

[Check Out This Usage Example!](http://cjthedizzy.github.io/randomClass_ex/)

Then implement as follows:
```
<script type="text/javascript">
$('.box').randomClass();
</script>
```
This will take all elements with the class "box" from the DOM and assign them a class of "randomClass$" ("$" represent the random number). 

The numbers will range from 0 to the total number of elements retrived. So 8 elements means each element with receive a random class from 0-7, no numbers will be repeated.

## Available Options
The default options are as follows:
```
$('.box').randomClass({
	count: 0, //int
	repeat: false, //bool
	customClass: "randomClass" //string
	after: function(){} //function
});
```

### count
Setting *count* will allow you to set a number of possible classes. So for instance you have 10 elements but you want to randomize through 20 classes, set *count: 20*. 

*Setting a count lower than the number of elements returned from the class with result in the default count being used.*

### repeat
Setting *repeat* to *true* will allow repeat classes to be generated rather than only allowing each class once

### customClass
This accepts a string to replace the default class of "randomClass" with.

### after
This accepts a function that fires after the classes have been added



**A Thanks to Ian Wright for writing something similar and giving me the idea to plugin-ize it.**