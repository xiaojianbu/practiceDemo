$(function() {
    $(".select").mouseover(function() {
        $(".warning-info").css('display', 'block');
    }).mouseout(function() {
        $(".warning-info").css('display', 'none');
    });
});
