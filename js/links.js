// from: http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);

    if (!results || !results[2]) return 'about';

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function ToggleMenu() {
  var opacity = parseInt($(".menu-circle").css("opacity"));
  $pm = $(".phone-menu .simple-link");
  
  if(opacity == 0) {
    $pm.css("pointer-events", "auto");
    $pm.css("cursor", "auto");
    $(".menu-circle").animate({opacity: 1.0}, 100);
  } else {
    $pm.css("pointer-events", "none");
    $pm.css("cursor", "default");
    $(".menu-circle").animate({opacity: 0.0}, 100);
  }
}

function InitialLoadPage() {
  LoadPage(getParameterByName("type"));
}

function PreviousLoadPage() {
  LoadPage(getParameterByName("type"), false);
}

function LoadPage(type, addHistory=true) {
  if (addHistory) {
    window.history.pushState({type: type}, type, `?type=${type}`);
  }

  $.get(
    GetPageUrl(type),
    function(data) {
      $("#content").html(data);
    });
}

function GetPageUrl(type) {
  switch(type) {
    case "about":
      contentUrl = "./pages/about.html";
      break;
    case "portfolio":
      contentUrl = "./pages/portfolio.html";
      break;
    case "news":
      contentUrl = "./pages/news.html";
      break;
    case "contact":
      contentUrl = "./pages/contact.html";
      break;
    case "foe-1-9-calculator":
      contentUrl = "./pages/foe_1_9_calculator.html";
      break;
    case "settings":
      contentUrl = "./pages/settings.html";
      break;
    default:
      contentUrl = "./pages/about.html";
      break;
  }

  return contentUrl;
}

$(document).ready( function() {
  InitialLoadPage();

  $(".menu-open").on("tap click", function(e) {
    ToggleMenu();
  });
  
  $(".simple-link, .menu-circle, .phone-menu").on("mouseover", function(e) {
    e.stopPropagation();
  });
  
  $(":not(.simple-link, .menu-circle, .phone-menu)").on("mouseover", function(e) {
    var opacity = parseInt($(".menu-circle").css("opacity"));
  
    if(opacity == 1) {
      ToggleMenu();
    }
  });

  $(".about").on("tap click", function(e) {
    LoadPage("about");
    ToggleMenu();
  });

  $(".portfolio").on("tap click", function(e) {
    LoadPage("portfolio");
    ToggleMenu();
  });

  $(".news").on("tap click", function(e) {
    LoadPage("news");
    ToggleMenu();
  });

  $(".settings").on("tap click", function(e) {
    LoadPage("settings");
    ToggleMenu();
  });

  $(".contact").on("tap click", function(e) {
    LoadPage("contact");
    ToggleMenu();
  });

  $("body").on("tap click", ".foe-1-9-calculator", function(e) {
    LoadPage("foe-1-9-calculator");
    ToggleMenu();
  });

  $(window).on('popstate', function(e) {
    PreviousLoadPage();
  });
});
