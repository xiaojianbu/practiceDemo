window.onload = function() {
    var win = document.getElementById("win");
    var lay = document.getElementById("overlay");
    var btn = document.getElementsByTagName("button")[0];
    var close = document.getElementsByClassName("close")[0];

    btn.addEventListener("click", function() {
        lay.style.display = "block";
        win.style.display = "block";

    });

    close.addEventListener("click", function() {
        lay.style.display = "none";
        win.style.display = "none";
    })
}
