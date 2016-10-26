$(function() {
    var temp = 0;

    $("button").bind('click', function() {
        var button = $("button")[0];
        button.innerHTML = ++temp;
        alert(button.innerHTML);
    });
});
