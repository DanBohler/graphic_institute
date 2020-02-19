window.onload = function() {
    $('.numbers').keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 57) return false;
    });

    $(window).on("scroll", rellenarBarra);

    function rellenarBarra (){
        var scrollRealizado = $(window).scrollTop();
        var altoTotal = $('body').innerHeight() - $(window).innerHeight();
        var porcentajeProceso = scrollRealizado / altoTotal *100;

        $('#progreso').css('width', porcentajeProceso + '%');

    }
}