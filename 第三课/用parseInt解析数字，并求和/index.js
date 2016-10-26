window.onload = function() {
    var btn = document.getElementsByTagName("button")[0];
    var inputs = document.getElementsByTagName("input");
    for (var i = 0, len = inputs.length; i < len; i++) {
        inputs[i].onkeyup = function() {
            this.value = this.value.replace(/[^(\d)]+/, "");
        }
    }

    btn.addEventListener("click", function() {
        var sum = document.getElementsByClassName("sum")[0];
        if (inputs[0].value !== "" && inputs[1].value !== "") {
            var valueString = parseInt(inputs[0].value, 10) + parseInt(inputs[1].value, 10);
            sum.innerHTML = valueString;
        } else {
            window.alert("请输入数字！");
        }
    });
}
