$(function() {
	for (var i = 0,len = $(".car").length; i < len; i++) {
		$(".car")[i].index = i;
	}
	$(".car").bind('mouseover', function() {
		console.log()
		$($("img")[this.index]).attr('class', 'show');
	});

		$(".car").bind('mouseout', function() {
		$($("img")[this.index]).attr('class', '');
	});
});