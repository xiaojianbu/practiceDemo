window.onload = function() {
    var btn = document.getElementsByTagName("button")[0];
    var input = document.getElementById("in");
    input.addEventListener("keyup", function () {
    	 this.value = this.value.replace(/[^(\d)|(,)]+/, ""); 
    })



    btn.addEventListener("click", function() {
        var out = document.getElementsByClassName("out")[0];
        var valueString = document.getElementById("in").value;
        var valueArray = valueString.split(",");
        var sum = 0;
        for (var i = 0, len = valueArray.length; i < len; i++) {

            var value = parseInt(valueArray[i], 10);
            sum += value;
        }
        out.innerHTML = sum;
    });


}
