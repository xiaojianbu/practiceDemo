$(function() {
    $(".info").bind('click', function() {
        $(".list").toggleClass('show');
        var className = $(".info div").hasClass('triangle-down') ? "triangle-up" : "triangle-down";
        $(".info div").attr('class', className);
    });
});
