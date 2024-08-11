$(document).ready(function(){
    $('.btn-link').click(function(){
        var target = $(this).data('target');
        $(target).collapse('toggle');
    });
});