window.onload = function() {
    var big = document.getElementsByClassName("big")[0];
    var smalls = document.getElementsByClassName("small");
    var divInfo = document.getElementsByClassName("info")[0];

    for (var i = 0, len = smalls.length; i < len; i++) {
        smalls[i].onmouseover = function() {
            big.setAttribute("src", this.getAttribute("src").replace("small", 'big'));
            divInfo.style.display = "block";
            big.complete ? divInfo.style.display = "none" : (big.onload = function() { divInfo.style.display = "none" });
        }
    }
}
