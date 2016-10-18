window.onload = function() {
    var inputName = document.getElementsByTagName("input")[0];
    var inputValue = document.getElementsByTagName("input")[1];
    var btn = document.getElementsByTagName("button")[0];
    var reset = document.getElementsByTagName("button")[1];
    var demo = document.getElementsByClassName("demo")[0];

    btn.addEventListener("click", function() {
        if (inputName.value !== null && inputValue.value !== null) {
            demo.style[inputName.value] = inputValue.value;
        }
    });

    reset.addEventListener("click", function() {
        demo.removeAttribute("style");
    });

}
