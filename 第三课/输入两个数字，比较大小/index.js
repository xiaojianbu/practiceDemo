window.onload = function() {
    var btn = document.getElementsByTagName("button")[0];
    var inputs = document.getElementsByTagName("input");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].onkeyup = function() {
            this.value = this.value.replace(/[^(\d)]+/, "");
        }
    }

    btn.addEventListener("click", function() {
        var bigger = document.getElementsByClassName("bigger")[0];
        if (inputs[0].value !== "" && inputs[1].value !== "") {
            bigger.innerHTML = Math.max(inputs[0].value, inputs[1].value);
        } else {
            window.alert("请输入数字！");
        }
    });
}
