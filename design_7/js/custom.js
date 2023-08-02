$(document).ready(function () {
    $("#sidebarToggle").on('click', function (e) {
        $(this).toggleClass('active');
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            //$('.sidebar .collapse').collapse('hide');
        };
    });
    $(".custom-scroll").mCustomScrollbar({
        theme: "dark"
    });
    $('.main-navigation').find('li ul').parent().addClass('has-sub');
})