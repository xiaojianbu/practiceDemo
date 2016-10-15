$(function() {
    $("#in").keyup(function() {
        this.value = this.value.replace(/[^(\d)|(,)]+/, "");
    });

    $("button").click(function() {
        var valueArray = $("#in")[0].value.split(",");
        var sum = 0;
        for (var i in valueArray) {

            sum += parseInt(valueArray[i], 10);
        }
        $(".out")[0].innerHTML = sum;
    });
});
