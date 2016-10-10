window.onload = function() {
    var divs = document.getElementsByTagName("div");
    for (var i = 0, len = divs.length; i < len; i++) {
        divs[i].onclick = function() {
            window.alert(this.innerHTML);
        }
    }
}
