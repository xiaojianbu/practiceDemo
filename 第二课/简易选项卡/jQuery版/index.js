$(function() {
    $(".header ul").mouseover(function(event) {
        $(event.target).attr('class', 'tab-select').siblings().attr('class', '');
        var len = $(event.target).parent().children().length;
        if (event.target === $(event.target).parent().children()[0]) {
            $(".container:eq(0)").addClass('show');
            $(".container:eq(1)").attr('class', 'container');
            $(".container:eq(2)").attr('class', 'container');
        } else if (event.target === $(event.target).parent().children()[1]) {
            $(".container:eq(1)").addClass('show');
            $(".container:eq(0)").attr('class', 'container');
            $(".container:eq(2)").attr('class', 'container');
        } else {
            $(".container:eq(2)").addClass('show');
            $(".container:eq(0)").attr('class', 'container');
            $(".container:eq(1)").attr('class', 'container');
        }
    });
});
