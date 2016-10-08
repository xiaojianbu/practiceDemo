window.onload = function() {
    var btn = document.getElementsByTagName("button")[0];


    btn.addEventListener("click", function() {
        var input1_value = document.getElementsByTagName("input")[0].value;
        var input2_value = document.getElementsByTagName("input")[1].value;
        window.alert(input1_value);
        window.alert(input2_value);
    })
}
