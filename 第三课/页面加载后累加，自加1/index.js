window.onload = function() {
    var p = document.getElementsByTagName("p")[0];
    var temp = 1;
    setInterval(function() {
        p.innerHTML = ++temp;
    }, 1000);
}
