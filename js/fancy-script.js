//fancybox custom 
$('.fancybox').fancybox();

//Disable opening and closing animations, change title type
$(".fancybox-effects-b").fancybox({
	openEffect  : 'none',
	closeEffect	: 'none',

	helpers : {
		title : {
			type : 'over'
		}
	}
});