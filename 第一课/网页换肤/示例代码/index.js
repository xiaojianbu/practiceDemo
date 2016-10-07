window.onload = function() {
    var link = document.getElementsByTagName("link")[1];
    var skin = document.getElementById("skin").getElementsByTagName("li");

    for (var i = 0, len = skin.length; i < len; i++) {
        skin[i].onclick = function() {
            for (var p in skin) {
                skin[p].className = "";
                this.className = "current";
                link["href"] = this.id + ".css";
            }
        }
    }
}
