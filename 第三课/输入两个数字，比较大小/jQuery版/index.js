$(function() {
    $("input").keyup(function() {
        this.value = this.value.replace(/[^(\d)]/, "");
    });

    $("button").click(function() {
            if ($("input")[0].value !== "" && $("input")[1].value !== "") {
                $(".bigger")[0].innerHTML = Math.max(parseInt($("input")[0].value, 10), parseInt($("input")[1].value, 10));
        } else {
            window.alert("请输入数字！");
        }
    });
});
