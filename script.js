const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
var t1 = gsap.timeline();
t1.from(".heading h1 , .nav a ,.nav h2", {
  y: +50,
  opacity: 0,
  stagger: 0.2,
  delay: 0.5,
  duration: 0.5,
});
t1.from(".heading h5 ,.heading h4 ,.rightCornerHead h5", {
  y: -20,
  opacity: 0,
  stagger: 0.2,
  delay: 0.5,
  duration: 0.5,
});

function skewCircle() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    var xdiff = dets.clientX - xprev;
    xprev = dets.clientX;
    var ydiff = dets.clientY - yprev;
    yprev = dets.clientY;

    xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

    mouseFollower(xscale, yscale);

    var timeout = setTimeout(function () {
      document.querySelector(
        ".point"
      ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(1,1)`;
    }, 100);
  });
}
skewCircle();

function mouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      ".point"
    ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale},${yscale})`;
  });
}

mouseFollower();

document.querySelectorAll(".elem").forEach(function(el){
  var rotate=0;
  var rotdiff=0;
  el.addEventListener("mousemove",function(dets){

    let diff=dets.clientY- el.getBoundingClientRect().top;
    rotdiff=dets.clientX-rotate;
    rotate=dets.clientX;
    

   gsap.to(el.querySelector("img"),{
    opacity:1,
    ease:Power3,
    left:dets.clientX,
    top:diff,
    rotate:gsap.utils.clamp(-20,+20,rotdiff*0.5)
   })
  })
  el.addEventListener("mouseleave",function(dets){

    let diff=dets.clientY- el.getBoundingClientRect().top;
    rotdiff=dets.clientX-rotate;
    rotate=dets.clientX;
    

   gsap.to(el.querySelector("img"),{
    opacity:0,
    ease:Power3,
    
   })
  })
})