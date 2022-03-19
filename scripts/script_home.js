let pos_banner = 1;

$('#nav_right').click(()=> {
    switch(pos_banner){
        case 1:
            $("#banner1").animate({right: '1250px'}).fadeOut(0);
            pos_banner += 1;
            $("#banner2").css("margin-left","1300px");
            $("#banner2").css("visibility","visible").fadeIn(0);
            $("#banner1").animate({right: '1250px'}).fadeOut(0);
            break;
        case 2:
            pos_banner += 1;
            break;
        case 3:
            pos_banner = 1;
            break;
    }
    console.log("apretado");

})
