$(function () {

    var mixer = mixitup('.episodes__sort-list');

    $('.episodes__filter-btn').on('click', function () {
        $('.episodes__filter-btn').removeClass('episodes__filter-btn--active')
        $(this).addClass('episodes__filter-btn--active')
    })

    $(".scroll-link").on('click', function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 700)
        $('.header__menu').toggleClass('header__menu--active')
        $('.burger').toggleClass('burger--active')
        $('.overlay').toggleClass('overlay--active')
    })

    $('.burger , .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__menu').toggleClass('header__menu--active')
        $('.burger').toggleClass('burger--active')
        $('.overlay').toggleClass('overlay--active')
    })
})