$(function() {
    $('#custom_carousel').carousel({interval: 5000, cycle:true}); //interval between slides

    $('#custom_carousel').on('slid.bs.carousel', function (event) {
        var nextactiveslide = $(event.relatedTarget).index();
        var $btns = $('.controls');
        var $active = $btns.find("[data-slide-to='" + nextactiveslide + "']");
        $active.find('.slide-img').addClass('active');
        $btns.find('.slide-img').removeClass('active');
        $active.find('.slide-img').addClass('active');
    });
})




