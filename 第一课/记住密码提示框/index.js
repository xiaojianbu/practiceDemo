window.onload = function() {
    var select = document.getElementsByClassName("select")[0];
    var warningInfo = document.getElementsByClassName("warning-info")[0];
    select.addEventListener("mouseover", function() {
        warningInfo.style.display = "block";
    });
    select.addEventListener("mouseout", function() {
        warningInfo.style.display = "none";
    });
}
