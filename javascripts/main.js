// $(window).scroll(function() {
//   $('span:nth-of-type(1)').css({
//     "transform": "translate(100vw,0)",
//     "-webkit-transform": "translate(100vw,0)",
//     "transition": "1s"
//   })
// })
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

    $('header li').css({
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

    $('header li').css({
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
      "margin-left": "0",
    })
    $('header li').css({
      "padding-bottom": "0"
    })
  }
}

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
