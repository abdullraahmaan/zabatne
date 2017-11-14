$(document).ready(function(){

    $('.notificationMessage_close').click(function (e) {
        e.preventDefault();
        $('.notificationMessage').hide();

    });
    $('#list').on('click', function(event){
        event.preventDefault();
        $('#products .item').addClass('list-group-item');
        $('#list').addClass('current');
        $('#grid').removeClass('current');
    });

    $('#grid').on('click', function(){
        event.preventDefault();
        $('#products .item').removeClass('list-group-item');
        $('#products .item').addClass('grid-group-item');
        $('#grid').addClass('current');
        $('#list').removeClass('current');
    });

});


var inputModal = function(id, option) {
	$('#'+id).modal(option);
}

/* Soft scroll */
$(function() {
    $('.soft-scroll a[href^="#"], a[href^="#"].soft-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var href = $anchor.attr('href');
        try {
            var elem = $(href);
            if(elem.length) {
                $('html, body').stop().animate({
                    scrollTop: elem.offset().top
                }, 1000);

                event.preventDefault();
            }
        }
        catch(err) {}
    });
});
