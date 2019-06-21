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
      "transition": "3s"
    })
    $('span:nth-of-type(2)').css({
      "transform": "translate(0vw,0)",
      "-webkit-transform": "translate(0vw,0)",
      "transition": "3s"
    })
  }
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    $('.my-info p').css({
      "transform": "translate(15vw,0)",
      "-webkit-transform": "translate(30vw,0)",
      "transition": "4s",
      "opacity": "1"
    })

  } else {
    $('.my-info p').css({
      "transform": "translate(0vw,0)",
      "-webkit-transform": "translate(0vw,0)",
      "transition": "1s",
      "opacity": "0"
    })
  }
}
