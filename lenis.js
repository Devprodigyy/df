// smooth Scrolling code
function lenis(){
   // Initialize Lenis
 const lenis = new Lenis({
  lerp: 0.04, // Smoothness of the scroll
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
}

lenis();

