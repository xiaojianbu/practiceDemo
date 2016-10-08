window.onload = function() {
    var btn = document.getElementsByTagName("button")[0];
    var divs = document.getElementsByClassName("container")[0].getElementsByTagName("div");
    btn.addEventListener("click", function() {
        for (var i = 0, len = divs.length; i < len; i++) {
            divs[i].style.backgroundColor = "red";
        }
    });

}
