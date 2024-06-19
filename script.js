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
   const footerContentClone = footerMarquee.innerHTML;
   footerMarquee.innerHTML += footerContentClone;

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






   document.getElementById('humBurgerIcon').addEventListener('click', function () {
      var overlay = document.getElementById('menuOverlay');
      if (overlay.classList.contains('hidden')) {
         overlay.classList.remove('hidden');
         overlay.classList.add('shown');
      } else {
         overlay.classList.remove('shown');
         overlay.classList.add('hidden');
      }
   });
});




window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
   if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
   } else {
      header.classList.remove("sticky");
   }
}