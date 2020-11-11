var $window = $(window),
    $s2 = $('.tblock'),
    $s3 = $('.mobmock'),
    $s4 = $('.tblock2'),
    $sec3 = $('.sec3'),
    sec3Top = $('.sec3').offset().top,
    elTop = $('.sec2').offset().top;
    console.log(elTop);

$window.scroll(function(e) {
    
    if ($window.scrollTop() > elTop ){ 
        $s2.css({'position': 'fixed'}); 
        $s3.css({'position': 'fixed'});
        $s4.css({'position': 'fixed'});
    }
    if ($window.scrollTop() < elTop ){ 
        $s2.css({'position': 'absolute'}); 
        $s3.css({'position': 'absolute'}); 
        $s4.css({'position': 'absolute'}); 
    }
    // if ($window.scrollTop() > elTop){
    //     $('html, body').animate({scrollTop: sec3Top}, 0.01);
    // }


});


// $(".sec2").scrollTop($(".sec2")[0].scrollHeight);