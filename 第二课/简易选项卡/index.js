window.onload = function() {
    var header = document.getElementsByClassName("header")[0];
    var ul = header.getElementsByTagName("ul")[0];
    var container = document.getElementsByClassName("container");
    var container1 = container[0];
    var container2 = container[1];
    var container3 = container[2];

    ul.addEventListener("mouseover", function(event) {
        var liList = event.target.parentNode.getElementsByTagName("li");
        var len = liList.length;
        for (var i = 0; i < len; i++) {
            liList[i].className = "";
        }
        event.target.className = "tab-select";
        if (event.target === liList[0]) {
            container1.className += " show";
            container2.className = "container";
            container3.className = "container";
        } else if (event.target === liList[1]) {
            container1.className = "container";
            container2.className += " show";
            container3.className = "container";
        } else {
            container1.className = "container";
            container2.className = "container";
            container3.className += " show";
        }
    });
}
