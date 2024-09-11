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
  top: "18.5%",
  left: "14.5%",
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
tl3.to(".about-jewels .earrings-img .earrings-2", {
  top: "247%",
  left: "61%",
});
