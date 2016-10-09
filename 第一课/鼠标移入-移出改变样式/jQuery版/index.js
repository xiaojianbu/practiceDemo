window.onload = function() {
    $("div").mouseover(function() {
        $("div").attr('class', 'in');
    }).mouseout(function() {
        $("div").attr('class', 'init');
    });
}
