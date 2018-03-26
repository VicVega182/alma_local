/* Функция проверки существования элемента */
$.fn.ex = function () {
    return $(this).length;
};
/* Функция проверки существования элемента */

/* Функция для animate.css */
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
/* Функция для animate.css */

/* Функция для переключения текста */
$.fn.extend({
    toggleText: function (a, b) {
        var that = this;
        if (that.text() != a && that.text() != b) {
            that.text(a);
        } else if (that.text() == a) {
            that.text(b);
        } else if (that.text() == b) {
            that.text(a);
        }
        return this;
    }
});
/* Функция для переключения текста */

$(document).ready(function () {
    $(document).foundation();
    new WOW().init();

    /* Scrollbar */
    if ($("[data-scrollbar]").ex() && !device.mobile()) {
        $("[data-scrollbar]").niceScroll();
    }

    imagesLoaded(document.body, () => document.body.classList.remove('loading'));

    var spriteImages 	= document.querySelectorAll( '.slide-item__image' );
    var spriteImagesSrc = [];

    for ( var i = 0; i < spriteImages.length; i++ ) {
        var img = spriteImages[i];
        spriteImagesSrc.push( img.getAttribute('src' ) );
    }

    var initCanvasSlideshow = new CanvasSlideshow({
        sprites: spriteImagesSrc,
        displacementImage: 'images/clouds.jpg',
        autoPlay: true,
        autoPlaySpeed: [10, 3],
        displaceScale: [200, 70]
    });

}).on('click', '.js__toggle-body', function () {
    var $this = $(this);
    $this.closest('.types-item').find('.types-item__body').slideToggle();
    $this.closest('.types-item__header').toggleClass('is-active');
});

