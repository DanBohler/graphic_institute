$(window).on('load', inicializar);

function inicializar() {
    $('.lds-roller').delay(2000).fadeOut(400, function () {
        $('.map-google').removeClass('map-google')
    });
}