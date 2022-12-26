$(document).ready(()=>{
    jQuery(function ($) {
        setTimeout(()=>{
            $('body').on('click',".sidebar-dropdown > .list-item",function() {
                if (
                    $(this)
                        .parent()
                        .hasClass("active")
                ) {
                    $(".sidebar-submenu").slideUp(200);
                    $(".sidebar-dropdown").removeClass("active");
                    $(this)
                        .parent()
                        .removeClass("active");
                } else {
                    $(".sidebar-dropdown").removeClass("active");
                    $(this)
                        .next(".sidebar-submenu")
                        .slideDown(200);
                    $(this)
                        .parent()
                        .addClass("active");
                }
            });
        },500)

        $("#close-sidebar").click(function() {
            $(".page-wrapper").removeClass("toggled");
        });
        $("#show-sidebar").click(function() {
            $(".page-wrapper").addClass("toggled");
        });
    });

    let dropdown = $('.sidebar-submenu').find('.router-link-exact-active').closest('.sidebar-dropdown');
    $('.sidebar-submenu').find('.router-link-exact-active').closest('.sidebar-submenu').slideDown(200);
    dropdown.addClass('active');
})


