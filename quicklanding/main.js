var $window = $(window),
    $sec2 = $('.tblock'),
    $sec3 = $('.mobmock'),
    $sec4 = $('.tblock2'),
    elTop = $('.sec2').offset().top;
    console.log(elTop);

$window.scroll(function(e) {
    
    if ($window.scrollTop() > elTop ){ 
        $sec2.css({'position': 'fixed'}); 
        $sec3.css({'position': 'fixed'});
        $sec4.css({'position': 'fixed'});
    }
    if ($window.scrollTop() < elTop ){ 
        $sec2.css({'position': 'absolute'}); 
        $sec3.css({'position': 'absolute'}); 
        $sec4.css({'position': 'absolute'}); 
    }

});