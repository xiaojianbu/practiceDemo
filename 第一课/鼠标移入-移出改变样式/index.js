window.onload = function() {
    var div = document.getElementsByTagName("div")[0];
    div.addEventListener("mouseover", function() {
        div.setAttribute("class", "in");
    });

    div.addEventListener("mouseout", function() {
        div.setAttribute("class", "init");
    })
}
