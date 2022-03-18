let pos_banner = 1;

$('#nav_right').click(()=> {
    switch(pos_banner){
        case 1:
            $('#banner2').animate({left: '250px'});
            pos_banner += 1;
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
