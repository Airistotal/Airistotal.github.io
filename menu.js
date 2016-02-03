function toggle_menu() {
  var opacity = parseInt($(".menu-circle").css("opacity"));
  
  if(opacity == 0) {
    $(".menu-circle").animate({opacity: 1.0}, 200);
  } else {
    $(".menu-circle").animate({opacity: 0.0}, 200);
  }
}

$(document).ready( function() {
  $(".menu-open").on("tap click", function() {
    toggle_menu();
  });
  
  $(":not(.menu-open, .menu-circle, .phone-menu)").on("tap click", function(e) {
    console.log(e.target.class);
    $(".menu-circle").animate({opacity: 0.0}, 200);
  });
});
