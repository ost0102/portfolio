window.onload = function() {
  setTimeout(function() {
      window.scrollTo(0, 0); 
  }, 100);  
};

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 800);
});

gsap.ticker.lagSmoothing(0);

$(window).scroll(function() {
  if ($(window).scrollTop() > 2) {
    $('header').addClass('difference');
  }else{
    $('header').removeClass('difference');
  }
});

// 커서

let cursorTag = `
<div class="__cursor">
  <div class="n1"></div>
  <div class="n2"></div>
  <div class="n3"></div>
</div>
`

$('body').parent().append(cursorTag);

$(window).on('mousemove',function(e){
let mouseX = e.clientX;
let mouseY = e.clientY;
$('.__cursor').css({'left':`${mouseX}px`,'top':`${mouseY}px`})
})

$('a, button').hover(function(){
  $('.__cursor').addClass('hover');
},function(){
  $('.__cursor').removeClass('hover');
})