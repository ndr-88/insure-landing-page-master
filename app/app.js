$('.hamburgerButton').on('click', function() {
    $(this).parent().siblings('.navMenu').addClass('visible');
    $(this).siblings('.closeButton').addClass('visible');
    $(this).addClass('hide');
    $(this).closest('body').addClass('fixed');
});

$('.closeButton').on('click', function() {
    $(this).parent().siblings('.navMenu').removeClass('visible');
    $(this).removeClass('visible');
    $(this).parent().find('.hamburgerButton').removeClass('hide');
    $(this).closest('body').removeClass('fixed');
});