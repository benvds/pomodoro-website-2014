jQuery(function($) {
    $('.panel-heading').on('click', function () {
        $(this).parent().toggleClass('panel-closed');
    });
});
