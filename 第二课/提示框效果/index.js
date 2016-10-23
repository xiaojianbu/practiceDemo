window.onload = function() {
    var cars = document.getElementsByClassName("car");
    var imgs = document.getElementsByTagName("img");

    for (var i = 0, len = cars.length; i < len; i++) {
        cars[i].index = i;
        cars[i].onmouseover = function() {
            imgs[this.index].className = "show";
        }
        cars[i].onmouseout = function() {
                imgs[this.index].className = "";
        }
    }
}
