function loco() {
  gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
function load_screen() {
  var tl = gsap.timeline();
  tl.to(".parallax-bg", {
    opacity: 1,
    duration: 1.5,
  })
  tl.from(".text h2", {
    y: 80,
    opacity: 0,
    duration: 1,
  })
  tl.from(".text h1", {
    y: 80,
    opacity: 0,
    duration: 1,
  })
  tl.to(".enter", {
    opacity:1,
    size:0,
  })
}
function open_screen(){
   var tl = gsap.timeline();
   tl.to("#top_intro",{
    top:"-100%",
   })
}
function page2_scroll() {
  //page2 scroll seq
  const page2_vid = {
    total_frames: 61,
    currentImage: (index) => `sequences/shot1_new/shot1 (${index + 1}).webp`,
  };
  Scroller_mine("page2_canvas", page2_vid, "main");
  ScrollTrigger.create({
    trigger: "#page2",
    pin: true,
    //  markers:true,
    scroller: `#main`,
    start: "top top",
    end: "100v% top",
  });
  gsap.to("#page2 h1", {
    scrollTrigger: {
      trigger: "#page2 h1",
      scroller: "#main",
      // markers:true,
      scrub: 2,
      start: "top top",
      end: "170% top",
    },
    right: "100vw",
    ease: "sine",
  });
}
function page3_scroll() {
  //page3 scroll seq
  const page3_vid = {
    total_frames: 181,
    currentImage: (index) => `sequences/shot2_webp/shot2 (${index + 1}).webp`,
  };
  Scroller_mine("page3_canvas", page3_vid, "main");
  ScrollTrigger.create({
    trigger: "#page3",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: "top top",
    end: "100v% top",
  });
  gsap.to("#page3 h1", {
    scrollTrigger: {
      trigger: "#page3 h1",
      scroller: "#main",
      // markers:true,
      scrub: 2,
      start: "0% top",
      end: "170% top",
      ease: "sine",
    },
    left: "110vw",
  });
}
function page4_scroll() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page4",
      // markers:true,
      start: "0% 0%",
      end: "200% 50%",
      scrub: 2,
      pin:true,
      scroller:"#main",
    },
  });
  tl3.to(
    "#page4_tbox",
    {
      top: "-50%",
    },
    "a"
  )
    .to(
      "#card-1",
      {
        top: "10%",
      },
      "a"
    )
    .to(
      "#card-2",
      {
        top: "130%",
      },
      "a"
    )
    .to(
      "#card-2",
      {
        top: "10%",
      },
      "b"
    )
    .to(
      "#card-1",
      {
        // width: "65%",
        height: "65vh",
      },
      "b"
    )
    .to(
      "#card-3",
      {
        top: "120%",
      },
      "b"
    )
    .to(
      "#card-3",
      {
        top: "8%",
      },
      "c"
    )
    .to(
      "#card-2",
      {
        // width: "70%",
        height: "70vh",
      },
      "c"
    )
    .to(
      "#card-4",
      {
        top: "8%",
      },
      "d"
    )
    .to(
      "#card-3",
      {
        // width: "70%",
        height: "70vh",
      },
      "d"
    )
    .to(
      "#card-5",
      {
        top: "8%",
      },
      "e"
    )
    .to(
      "#card-4",
      {
        // width: "70%",
        height: "70vh",
      },
      "e"
    )
    .to(
      "#card-6",
      {
        top: "8%",
      },
      "f"
    )
    .to(
      "#card-5",
      {
        // width: "70%",
        height: "70vh",
      },
      "f"
    )
    .to(
      "#card-7",
      {
        top: "8%",
      },
      "g"
    )
    .to(
      "#card-6",
      {
        // width: "70%",
        height: "70vh",
      },
      "g"
    )
}
function page5_scroll(){
  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:'#page5',
      // markers:true,
      start:'0% top',
      end:"100% bottom",
      scroller:'#main',
      pin:true,
      scrub:1,
    }
  });
  tl2.to("#page5_tbox h3",{
    top:"-150%",
  })
}
function typer(){
  var typed = new Typed("#multi-text",{
    strings:["Nemo 3D","3d Artist","Front End Developer","Coder"],
    typedSpeed:250,
    backSpeed:50,
    backDelay:1500,
    loop:true,
  })
}
typer();
/*
$(function(){  

  var wrapper = $("#main"),
      $menu = $("#menu"),
      $window = $(window);
  
  $menu.on("click","a", function(){
      var $this = $(this),
          href = $this.attr("href"),
          topY = $(href).offset().top;
     
      TweenMax.to($window, 1, {
          scrollTo:{
              y: topY, 
              autoKill: true
          }, 
          ease:Power3.easeOut 
       });
    console.log("helllo");
    return false;
  });  
    
  });
*/
loco();
load_screen();
page2_scroll();
page3_scroll();
page4_scroll();
// page5_scroll();


