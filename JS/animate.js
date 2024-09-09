// Select the image and the two divs
var image = document.querySelector("#golden-neckless");
var startDiv = document.querySelector(".exhibitor");
var endDiv = document.querySelector(".mask-img");

var image2 = document.querySelector(".earrings-img");
var startDiv2 = document.querySelector(".about-jewels");
var endDiv2 = document.querySelector(".jewel-form-left");

var image3 = document.querySelector(".earrings-2");
var startDiv3 = document.querySelector("img.earrings.earrings-2");
var endDiv3 = document.querySelector(".faq-img");

// Create a timeline
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: image,
    start: "0% 50%",
    end: "50% 50%",
    scrub: true,
    markers: true,
  },
});
// Golden Neckless
// Set the initial position of the image
tl.set(image, {
  x: startDiv.offsetLeft,
  y: startDiv.offsetTop,
  opacity: 0.3,
});

// Animate the image to the end div
tl.to(image, {
  opacity: 1,
  duration: 2,
  top: "32%",
  left: "18.6%",
  // x: endDiv.offsetLeft,
  // y: endDiv.offsetTop,
});

// Earrings Img
// Create a timeline
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: image2,
    start: "50% 50%",
    end: "50% 50%",
    scrub: true,
    markers: true,
  },
});
// Set the initial position of the image
tl.set(image2, {
  x: startDiv.offsetLeft,
  y: startDiv.offsetTop,
});

// Animate the image to the end div
tl.to(image2, {
  duration: 2,
  top: "47%",
  left: "13%",
  // x: endDiv.offsetLeft,
  // y: endDiv.offsetTop,
});

// Earrings-2 Img
// Create a timeline
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: image3,
    start: "50% 50%",
    end: "50% 50%",
    scrub: true,
    markers: true,
  },
});
// Set the initial position of the image
tl.set(image3, {
  x: startDiv.offsetLeft,
  y: startDiv.offsetTop,
  top: "50%",
  left: "50%",
});

// Animate the image to the end div
tl.to(image3, {
  duration: 2,
  top: "100%",
  left: "100%",
  x: endDiv.offsetLeft,
  y: endDiv.offsetTop,
});
