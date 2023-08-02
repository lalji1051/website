$(document).ready(function () {
    $('.left-sidebar > ul > li a').click(function () {
        $(this).parent().toggleClass('open');
    })

    $(".left-sidebar > ul > li:has(ul)").addClass("secound-level");
    $(".left-sidebar > ul > li ul li:has(ul)").addClass("third-level");
})