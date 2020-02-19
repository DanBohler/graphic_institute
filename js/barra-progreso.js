window.onload = function(){
    $(window).on("scroll", rellenarBarra);

    function rellenarBarra (){
        var scrollRealizado = $(window).scrollTop();
        var altoTotal = $('body').innerHeight() - $(window).innerHeight();
        var porcentajeProceso = scrollRealizado / altoTotal *100;

        $('#progreso').css('width', porcentajeProceso + '%');

    }
}