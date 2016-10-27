window.onload = function() {
    var input = document.getElementsByTagName("input")[0];
    var button = document.getElementsByTagName("button")[0];

    input.addEventListener("keyup", function() {
        this.value = this.value.replace(/[^(\d)]+/, "");
    });

    button.addEventListener("click", function() {
        var temp = input.value,
            i = 0;
        if (input.value !== "") {
            while (parseInt(temp, 10) / 10 !== 0) {
                i++;
                temp = parseInt(temp, 10) / 10;
            }
            if (i === 2) {
                window.alert("√是" + i + "位数");
            } else {
                window.alert("这是" + i + "位数");
            }
        } else {
            window.alert("请输入数字！");
        }
    });
}
