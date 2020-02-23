$(function() {
    $('.dragged-item').draggable();
    $('.menu-btn').on('click', function() {
        $(this).toggleClass('menu-btn_active');
        $('.menu-nav').toggleClass('menu-nav_active');
    });
    $('.card_item').on('mousemove', function(e) {
        $(this).css(
            'transform', 'rotateX(' + (e.offsetY - $(this).height() / 2) / 2 + 'deg) rotateY(' + -(e.offsetX - $(this).height() / 2) / 2 + 'deg)'
        );
    });
    $('.card_item').on('mousemove', function(e) {
        $(this).css(
            'transform', 'rotateX(' + -(e.offsetY / 5 - $('.card_-item').height() / 2) / 4 + 'deg) rotateY(' + (e.offsetX / 5 - $(this).height() / 2) / 4 + 'deg)'
        );
    });
    $('.card_item').on('mouseout', function(e) {
        $(this).css('transform','rotateX(0) rotateY(0)');
    });
});
