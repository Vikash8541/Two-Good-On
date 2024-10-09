// NOTED -> When using scrollTrigger in locomotive js , so it didn't work , we need to go and search on google "locomotive scrolltrigger codepen" then copy the js code and remove unnecessary code , just like , red panel , orange panel , purple panel and its animation and replace the "smooth-scroll" to the "wrapper" div or whatever you set name of main div. 

function locomotiveScrollAnimation(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#wrapper"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#wrapper", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#wrapper").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

locomotiveScrollAnimation();

// Cursor
document.addEventListener("mousemove",(dets)=>{
  gsap.to("#cursor",{
    left:dets.x,
    top:dets.y
  })
})



function videoAnimation() {
    let videocon = document.querySelector(".video-container");
let playbtn = document.querySelector("#play-btn");

  // We animation when mouseenter and mouseleave
  videocon.addEventListener("mouseenter", () => {
    gsap.to(playbtn, {
      opacity: 1,
      transform: "translate(-50%, -50%) scale(1)",
      duration: 0.4,
    });
  });
  videocon.addEventListener("mouseleave", () => {
    gsap.to(playbtn, {
      opacity: 0,
      transform: "translate(-50%, -50%) scale(0)",
      duration: 0.5,
    });
  });

  // Now animation where the mouse cursor goes.

  videocon.addEventListener("mousemove", (dets) => {
    gsap.to(playbtn, {
        left: dets.x-10,
        top: dets.y-20,
      });
  });
}

videoAnimation();

function animationTextVideo() {
  let t1 = gsap.timeline();

  t1.from("#page1 h1", {
    y: 100,
    duration: 0.7,
    opacity: 0,
    stagger: 0.5,
  });

    t1.from("#page1 .video-container", {
      scale:0.8,
      opacity:0,
      duration:0.5
    });
}

animationTextVideo();


function bigItemImage(){
  let bigItem = document.querySelectorAll("#page4 .big-product .big-items");
  
  bigItem.forEach((item)=>{
    item.addEventListener("mouseenter",()=>{
      gsap.to("#cursor",{
        opacity:1,
        transform: "translate(-50% , -50%) scale(1)", 
        duration:0.5,  
      })
    })
    item.addEventListener("mouseleave",()=>{
      gsap.to("#cursor",{
        opacity:0,
        transform: "translate(-50% , -50%) scale(0)", 
        duration:0.5,  
      })
    })
  })  
}

bigItemImage();

function navigationAnimation(){
  gsap.to("#nav .nav-part-1 svg",{
    transform:"translateY(-100%)",
    scrollTrigger:{
      trigger:"#page1",
      scroller:"#wrapper",
      start:"top 0",
      end:"top -5%",
      scrub:1
    }
  })
  
  
  gsap.to(".nav-part-2 ul",{
    y:-30,
    stagger:0.4,
    duration:0.2,
    opacity:0,
    scrollTrigger:{
      trigger:"#page1",
      scroller:"#wrapper",
      start:"top 0",
      end:"top -5%",
      scrub:1
    }
  })
  
}

navigationAnimation();



// gsap.to(".footer-middle svg path",{
//   opacity:1,
//   duration:0.5,
//   scale:1,
//   stagger:0.5,
//   scrollTrigger:{
//     trigger:".footer-section",
//     scroller:"#wrapper",
//     markers:true,
//     start:"0 90%",
//     end:"50% 50%",
//     scrub:1
//   }
// })





// Update ScrollTrigger on scroll
locoScroll.on("scroll", ScrollTrigger.update);

// Refresh ScrollTrigger and Locomotive Scroll on page load and resize
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
