$(function() {
    var $a = $("a");
    var $input = $("input");
    var $label = $("label:eq(0)");
    var isCheckAll = function() {
        var n = 0;
        for (var i = 1, len = $input.length; i < len; i++) {
            $input[i].checked && n++;
        }
        $input[0].checked = n == $input.length - 1;
        $label[0].innerHTML = $input[0].checked ? "全不选" : "全选"
    }

    //全选/全不选
    $input[0].onclick = function() {
        for (var i = 1; i < $input.length; i++) {
            $input[i].checked = this.checked;
        }
        isCheckAll();
    };
    //反选
    $a.bind('click', function(e) {
        for (var i = 1; i < $input.length; i++) {
            $input[i].checked = !$input[i].checked;
        }
        isCheckAll();
        e.preventDefault();
    });

    //根据复选个数更新全选框状态
    for (var i = 1; i < $input.length; i++) {
        $input[i].onclick = function() {
            isCheckAll();
        }
    }
});
