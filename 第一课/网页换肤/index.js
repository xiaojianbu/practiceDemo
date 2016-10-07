window.onload = function() {
    var box1 = document.getElementById("box_1");
    var box2 = document.getElementById("box_2");
    var box3 = document.getElementById("box_3");
    var nav = document.getElementsByTagName("nav")[0];
    var body = document.getElementsByTagName("body")[0];
    var lis = document.getElementsByTagName("li");

    box1.addEventListener("click", troggle1);
    box2.addEventListener("click", troggle2);
    box3.addEventListener("click", troggle3);

    function troggle1() {
        box1.style.backgroundColor = "#f00";
        box2.style.backgroundColor = "#0f0";
        box2.firstElementChild.style.backgroundColor = "#0f0";
        box3.style.backgroundColor = "#000";
        box3.firstElementChild.style.backgroundColor = "#000";

        box1.firstElementChild.style.backgroundColor = "#fff";
        for (var i = 0, len = lis.length; i < len; i++) {
            lis[i].style.backgroundColor = "#f00";
        }

        body.style.backgroundColor = "#de5c52";
    }

    function troggle2() {
        box2.style.backgroundColor = "#0f0";
        box1.style.backgroundColor = "#f00";
        box1.firstElementChild.style.backgroundColor = "#f00";
        box3.style.backgroundColor = "#000";
        box3.firstElementChild.style.backgroundColor = "#000";

        box2.firstElementChild.style.backgroundColor = "#fff";
        for (var i = 0, len = lis.length; i < len; i++) {
            lis[i].style.backgroundColor = "#0f0";
        }

        body.style.backgroundColor = "#7cf17c";
    }

    function troggle3() {
        box3.style.backgroundColor = "#000";
        box1.style.backgroundColor = "#f00";
        box1.firstElementChild.style.backgroundColor = "#f00";
        box2.style.backgroundColor = "#0f0";
        box2.firstElementChild.style.backgroundColor = "#0f0";

        box3.firstElementChild.style.backgroundColor = "#fff";
        for (var i = 0, len = lis.length; i < len; i++) {
            lis[i].style.backgroundColor = "#000";
        }

        body.style.backgroundColor = "#c7bdbd";
    }
}
