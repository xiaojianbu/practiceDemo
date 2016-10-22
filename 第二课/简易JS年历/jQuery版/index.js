$(function() {
    for (var i = 0, len = $(".month").length; i < len; i++) {
        $(".month")[i].index = i;
    }
    $(".month").bind('mouseover', function() {
        $(".month").attr('class', 'month');
        $(this).addClass('monthShow');
        $(".info").attr('class', 'info');
        $($(".info")[this.index]).addClass('infoShow');
    });
});
