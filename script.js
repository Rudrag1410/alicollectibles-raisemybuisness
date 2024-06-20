window.onload = function () {
   // Existing animation for announcementContent
   const announcementContent = document.querySelector('.announcementContent');
   const contentClone = announcementContent.innerHTML;
   announcementContent.innerHTML += contentClone;

   gsap.set(".announcementContent", { xPercent: -2 });

   // Start the scrolling animation for announcementContent
   gsap.to(".announcementContent", {
      xPercent: -50,
      duration: 15,
      ease: "linear",
      repeat: -1,
   });

   // Setup for footer-marquee
   const footerMarquee = document.querySelector('.footer-marquee');

   gsap.set(".footer-marquee", { xPercent: 5 });

   // Start the scrolling animation for footer-marquee
   gsap.to(".footer-marquee", {
      xPercent: -20,
      duration: 15,
      ease: "linear",
      repeat: -1,
   });
};






document.addEventListener('DOMContentLoaded', function () {
   var navIcon = document.getElementById('humBurgerIcon');
   var expandedMenu = document.getElementById('expandedMenu');

   navIcon.addEventListener('click', function () {
      navIcon.classList.toggle('open');
      expandedMenu.classList.toggle('open');
   });
});

