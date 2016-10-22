window.onload = function() {
    var months = document.getElementsByClassName("month");
    var infos = document.getElementsByClassName("info");
    var main = document.getElementsByClassName("main")[0];

    for (var j = 0, len1 = months.length; j < len1; j++) {
        months[j].index = j;
        months[j].onmouseover = function() {
            for (var m = 0, len1 = months.length; m < len1; m++) {
                months[m].className = "month";
            }
            this.className += " monthShow";
            for (var i = 0, len = infos.length; i < len; i++) {
                infos[i].className = "info";
            }
            infos[this.index].className += " infoShow";
        }
    }
}
