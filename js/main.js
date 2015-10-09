$('#bottomTrigger').click(function(event) {

	var click = $(this).data('clicks');

    if (click) {
        var tl = new TimelineMax();
			tl.to($("#logo"), 1, {width: '300px', left: '0px'});
    }else{
        var tl2 = new TimelineMax();
			tl2.to($("#logo"), 1, {width: '180px', left: '40px'});
    };

    $(this).data('clicks', !click); // you have to set it
	
});

$('.item').click(function(event) {
	var tl3 = new TimelineMax();
		tl3.to($("#itemSection"), 1, {left: '0px'});
});

$('#closeItemContainer').click(function(event) {
	var tl4 = new TimelineMax();
		tl4.to($("#itemSection"), 1, {left: '100%'});
});