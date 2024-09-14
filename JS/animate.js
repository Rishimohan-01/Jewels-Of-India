function initAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".mask-img",
      start: "20% 95%",
      end: "40% 50%",
      scrub: true,
      // markers: true,
      opacity: 0,
    },
  });

  // Define animation properties for different screen sizes
  if (window.innerWidth >= 1360) {
    // desktop 1360
    tl.to(".exhibitor #golden-neckless", {
      top: "165px",
      left: "223px",
      opacity: 1,
    });
  } else if (window.innerWidth >= 1280) {
    // Desktop 1280
    tl.to(".exhibitor #golden-neckless", {
      top: "165px",
      left: "187px",
      opacity: 1,
    });
  } else {
    // desktop 1024
    tl.to(".exhibitor #golden-neckless", {
      top: "165px",
      left: "223px",
      opacity: 1,
    });
  }
}

// Initialize animation on page load
window.addEventListener("load", initAnimation);

// Re-initialize animation on window resize
window.addEventListener("resize", function () {
  // Clear existing animations
  gsap.killTweensOf(".exhibitor #golden-neckless");
  // Re-initialize animation
  initAnimation();
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".mask-img",
    start: "20% 95%",
    end: "40% 50%",
    scrub: true,
    // markers: true,
    opacity: 0,
  },
});

tl.to(".exhibitor #golden-neckless", {
  top: "165px",
  left: "223px",
  opacity: 1,
});

// earrings scroll animation effect

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".jewel-form",
    start: "0% 95%",
    end: "35% 50%",
    scrub: true,
    // markers: true,
  },
});

tl2.to(
  ".about-jewels .earrings-img .earrings-1",
  {
    top: "136%",
    left: "12%",
  },
  "earrings"
);
tl2.to(
  ".about-jewels .earrings-img .earrings-2",
  {
    top: "136%",
    left: "19%",
  },
  "earrings"
);

// earring 2nd scroll animation effect
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".faq",
    start: "0% 95%",
    end: "35% 50%",
    scrub: true,
    // markers: true,
  },
});
tl3.to(".about-jewels .earrings-img .earrings-1", {
  top: "253%",
  left: "61%",
});
