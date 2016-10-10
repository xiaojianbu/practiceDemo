window.onload = function() {
    var btn = document.getElementsByTagName("button")[0];
    var info = document.getElementsByClassName("info")[0];
    var close = document.getElementsByClassName("close")[0];
    var flag = false;
    btn.addEventListener("click", function() {

        if (!flag) {
            flag = true;
            info.style.display = "block";
        } else {
            flag = false;
            info.style.display = "none";
        }
    });
    close.addEventListener("click", function() {
        info.style.display = "none";
        flag = false;
    })
}
