window.onload = function() {
    var info = document.getElementsByClassName("info")[0];
    var list = document.getElementsByClassName("list")[0];
    var div = info.getElementsByTagName("div")[0];

    info.addEventListener("click", function() {
        if (div.className.indexOf("down") !== -1) {
            div.className = "triangle-up";
            list.className = "list"
        } else if (div.className.indexOf("up") !== -1) {
            div.className = "triangle-down";
            list.className += " show";
        }
    })
}
