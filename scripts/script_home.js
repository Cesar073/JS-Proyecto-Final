let pos_banner = 1;

$('#nav_right').click(()=> {
    let banner_first, banner_secondary;
    switch(pos_banner){
        case 1:
            banner_first = $("#banner1");
            banner_secondary = $("#banner2");
            pos_banner += 1;
            break;
        case 2:
            banner_first = $("#banner2");
            banner_secondary = $("#banner3");
            pos_banner += 1;
            break;
        case 3:
            banner_first = $("#banner3");
            banner_secondary = $("#banner1");
            pos_banner = 1;
            break;
    }
    disappear(banner_first);
    appear(banner_secondary);
})

function disappear(obj){
    obj.animate({right: '1250px'});
    obj.fadeOut(50);

}

function appear(obj){
    obj.animate({left: '1250px'});
    obj.css("margin-left","0px");
    // obj.css("visibility","visible");
    obj.fadeIn(500);
    // banner_secondary.animate({right: '0px'}).fadeOut(0);
}
