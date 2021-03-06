window.onscroll = function() {scrollingFunction()};

function scrollingFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $('span:nth-of-type(1)').css({
      "transform": "translate(100vw,0)",
      "-webkit-transform": "translate(100vw,0)",
      "transition": "4s"
    })
    $('span:nth-of-type(2)').css({
      "transform": "translate(-100vw,0)",
      "-webkit-transform": "translate(-100vw,0)",
      "transition": "4s"
    })
  } else {
    $('span:nth-of-type(1)').css({
      "transform": "translate(0vw,0)",
      "-webkit-transform": "translate(0vw,0)",
      "transition": "2s"
    })
    $('span:nth-of-type(2)').css({
      "transform": "translate(0vw,0)",
      "-webkit-transform": "translate(0vw,0)",
      "transition": "2s"
    })
  }
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    $('.my-info p').css({
      "transform": "translate(15vw,0)",
      "-webkit-transform": "translate(30vw,0)",
      "transition": "2s",
      "opacity": "1"
    })

    $('header ul').css({
      "margin-top": "18vw",
      "margin-left": "3vw",
      "flex-direction": "column",
      "justify-content": "space-between",
      "align-items": "flex-start",
      // "transition": "1s",
      "opacity": "1",
      "position": "fixed"
    })

    $('header a').css({
      "padding-bottom": "1vw"
    })

  } else {
    $('.my-info p').css({
      "transform": "translate(0vw,0)",
      "-webkit-transform": "translate(0vw,0)",
      "transition": "1s",
      "opacity": "0"
    })
  }

  // if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
  //   $('header ul').css({
  //     "margin-top": "18vw",
  //     "margin-left": "3vw",
  //     "flex-direction": "column",
  //     "justify-content": "space-between",
  //     "align-items": "flex-start",
  //     "transition": "1s",
  //     "opacity": "0",
  //     "position": "fixed"
  //   })
  //
  //   $('header li').css({
  //     "padding-bottom": "1vw"
  //   })
  //
  // } else {
  //   $('header ul').css({
  //     "margin-top": "18vw",
  //     "margin-left": "3vw",
  //     "flex-direction": "column",
  //     "justify-content": "space-between",
  //     "align-items": "flex-start",
  //     "transition": "1s",
  //     "opacity": "1",
  //     "float": "right",
  //     "margin-top": "0",
  //     "margin-left": "0",
  //   })
  //   $('header li').css({
  //     "padding-bottom": "0"
  //   })
  // }


  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    $('header ul').css({
      "margin-top": "18vw",
      "margin-left": "3vw",
      "flex-direction": "column",
      "justify-content": "space-between",
      "align-items": "flex-start",
      // "transition": "1s",
      "opacity": "1",
      "position": "fixed"
    })

    $('header a').css({
      "padding-bottom": "1vw"
    })

  } else {
    $('header ul').css({
      "position": "static",
      "flex-direction": "row",
      "justify-content": "space-between",
      "align-items": "flex-end",
      // "transition": "1s",
      "opacity": "1",
      "float": "right",
      "margin-top": "0",
      "margin-left": "0"
    })

    $('header a').css({
      "padding-bottom": "0"
    })
  }
}

$('#about-author').mouseover(function() {
  $('header a:nth-of-type(1)').css({
    "text-decoration": "line-through",
    "text-decoration-color": "#F013FF"
  })
})

$('#about-author').mouseout(function() {
  $('header a:nth-of-type(1)').css({
    "text-decoration": "none"
  })
})

$('#about-project').mouseover(function() {
  $('header a:nth-of-type(2)').css({
    "text-decoration": "line-through",
    "text-decoration-color": "#F013FF"
  })
})

$('#about-project').mouseout(function() {
  $('header a:nth-of-type(2)').css({
    "text-decoration": "none"
  })
})

$('#ideas').mouseover(function() {
  $('header a:nth-of-type(3)').css({
    "text-decoration": "line-through",
    "text-decoration-color": "#F013FF"
  })
})

$('#ideas').mouseout(function() {
  $('header a:nth-of-type(3)').css({
    "text-decoration": "none"
  })
})

$('#branding').mouseover(function() {
  $('header a:nth-of-type(4)').css({
    "text-decoration": "line-through",
    "text-decoration-color": "#F013FF"
  })
})

$('#branding').mouseout(function() {
  $('header a:nth-of-type(4)').css({
    "text-decoration": "none"
  })
})

$('#posters').mouseover(function() {
  $('header a:nth-of-type(5)').css({
    "text-decoration": "line-through",
    "text-decoration-color": "#F013FF"
  })
})

$('#posters').mouseout(function() {
  $('header a:nth-of-type(5)').css({
    "text-decoration": "none"
  })
})

$('#book').mouseover(function() {
  $('header a:nth-of-type(6)').css({
    "text-decoration": "line-through",
    "text-decoration-color": "#F013FF"
  })
})

$('#book').mouseout(function() {
  $('header a:nth-of-type(6)').css({
    "text-decoration": "none"
  })
})

$('#contacts').mouseover(function() {
  $('header a:nth-of-type(7)').css({
    "text-decoration": "line-through",
    "text-decoration-color": "#F013FF"
  })
})

$('#contacts').mouseout(function() {
  $('header a:nth-of-type(7)').css({
    "text-decoration": "none"
  })
})

$('.project-info').mouseover(function() {
  $('.project-info img:nth-of-type(2)').css({
    "-webkit-filter": "grayscale(0)",
    "filter": "grayscale(0)",
    "transition": "0.5s"
  })
})

$('.project-info').mouseleave(function() {
  $('.project-info img:nth-of-type(2)').css({
    "-webkit-filter": "grayscale(100%)",
    "filter": "grayscale(100%)",
    "transition": "0.5s"
  })
})

$('#posters').mouseover(function() {
  $('#posters').css({
    "background-color": "white",
    "transition": "0.5s"
  })

  $('header a').css({
    "color": "black",
    "transition": "0.5s"
  })

  $('.heading-section hr').css({
    "color": "black",
    "background-color": "black",
    "transition": "0.5s"
  })

  $('.heading-section h1').css({
    "color": "black",
    "transition": "0.5s"
  })
})

$('#posters').mouseleave(function() {
  $('#posters').css({
    "background-color": "black",
    "paddin-top": "0",
    "transition": "0.5s"
  })

  $('header a').css({
    "color": "white",
    "transition": "0.5s"
  })

  $('.heading-section hr').css({
    "color": "white",
    "background-color": "white",
    "transition": "0.5s"
  })

  $('.heading-section h1').css({
    "color": "white",
    "transition": "0.5s"
  })
})

$('.graphic-posters img').mouseover(function() {
  $(this).css({
    "transform": "scale(1.1)",
    "transition": "1s"
  })
})

$('.graphic-posters img').mouseleave(function() {
  $(this).css({
    "transform": "scale(1)",
    "transition": "1s"
  })
})

$(document).ready(function(){
  $(".menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});


if (window.innerWidth < 768) {
  $('.menu-button').css({
    "display": "inline",
    "transition": "2s"
  })

  $('.menu-button').click(function() {
    $('.menu').css({
      "height": "100vh",
      "background-color": "black",
      "align-items": "flex-start"
    })

    $('header ul a').css({
      "display": "block",
      "padding-bottom": "4vw"
    })

    $('header ul').css({
      "display": "flex",
      "flex-direction": "column",
      "align-items": "flex-start",
      "transition": "2s",
      "margin-top": "2vw"
    })

    $('.menu img:nth-of-type(1)').css({
      "display": "none",
      "transition": "2s"
    })

    $('.menu-button').css({
      "display": "none",
      "transition": "2s"
    })

    $('.close-button').css({
      "display": "block",
      "margin-left": "3vw",
      "transition": "2s"
    })
  })

  $('.close-button').click(function() {
    $('.menu').css({
      "height": "8.5vh",
      "background-color": "black",
      "align-items": "flex-end"
    })

    $('header ul').css({
      "display": "none",
      "transition": "2s",
      "margin-top": "0"
    })

    $('.menu img:nth-of-type(1)').css({
      "display": "block",
      "transition": "2s"
    })

    $('.close-button').css({
      "display": "none",
      "transition": "2s"
    })

    $('.menu-button').css({
      "display": "inline",
      "transition": "2s"
    })
  })

  $('header a').click(function() {
    $('.menu').css({
      "height": "8.5vh",
      "background-color": "black",
      "align-items": "flex-end"
    })

    $('header ul').css({
      "display": "none",
      "transition": "2s",
      "margin-top": "0"
    })

    $('.menu img:nth-of-type(1)').css({
      "display": "block",
      "transition": "2s"
    })

    $('.menu-button').css({
      "display": "inline",
      "transition": "2s"
    })

    $('.close-button').css({
      "display": "none",
      "transition": "2s"
    })
  })
}

if (window.innerWidth > 768) {
  $('.menu-button').css({
    "display": "none"
  })
}
// else {
//   $('.close-button').css({
//     "display": "none"
//   })
//
//   $('.menu-button').css({
//     "display": "none"
//   })
// }
// spot

var screen = document.body;
//
// screen.addEventListener("mousemove", function(event) {
//   move(event);
// });
//
// function move(e) {
//   var x = e.clientX;
//   var y = e.clientY;
//   var spot = document.getElementById("spot");
//   spot.style.left = x+"px";
//   spot.style.top = y+"px";
// }

var screen = '.part-1';

$(screen).mousemove(function (event) {
  move(event);
});

function move(e) {
  var x = e.clientX;
  var y = e.clientY;
  var spot = document.getElementById("spot");
  spot.style.left = x+"px";
  spot.style.top = y+"px";
}
