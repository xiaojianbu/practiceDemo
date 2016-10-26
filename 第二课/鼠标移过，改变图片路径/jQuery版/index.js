$(function() {
    $(".small").bind('mouseover', function() {
        $(".big").attr('src', $(this).attr("src").replace("small", "big"));
    });
});
