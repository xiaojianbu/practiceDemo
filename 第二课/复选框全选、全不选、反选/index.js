window.onload = function() {
    var control = document.getElementsByClassName("control")[0];
    var checks = document.getElementsByClassName("check");
    var controlCheckbox = control.getElementsByTagName("input")[0];
    var controlLabel = control.getElementsByTagName("label")[0];
    var controlReverse = control.getElementsByTagName("a")[0];

    function checkAllOrNo() {
        var temp = 0;
        for (var i = 0, len = checks.length; i < len; i++) {
            if (checks[i].checked) {
                temp++;
            }
        }
        if (temp === 10) {
            controlCheckbox.checked = true;
            controlLabel.innerHTML = "全不选";
        } else {
            controlCheckbox.checked = false;
            controlLabel.innerHTML = "全选";
        }
    }

    controlCheckbox.addEventListener("click", function() {
        if (controlCheckbox.checked) {
            controlLabel.innerHTML = "全不选";
            for (var i = 0, len = checks.length; i < len; i++) {
                checks[i].checked = true;
            }
        } else {
            controlLabel.innerHTML = "全选";
            for (var i = 0, len = checks.length; i < len; i++) {
                checks[i].checked = false;
            }
        }
    });

    controlReverse.addEventListener("click", function(e) {
        for (var i = 0, len = checks.length; i < len; i++) {
            checks[i].checked = checks[i].checked ? false : true;
        }
        checkAllOrNo();
        e.preventDefault();
    });
    for (var i = 0, len = checks.length; i < len; i++) {
        checks[i].onchange = function() {
            checkAllOrNo();
        }
    }
}
