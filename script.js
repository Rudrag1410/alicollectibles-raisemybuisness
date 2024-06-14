window.onload = function () {
   const announcementContent = document.querySelector('.announcementContent');

   const contentClone = announcementContent.innerHTML;
   announcementContent.innerHTML += contentClone;

   gsap.set(".announcementContent", { xPercent: -2 });

   // Start the scrolling animation
   gsap.to(".announcementContent", {
      xPercent: -50,
      duration: 15, // Duration of the animation
      ease: "linear",
      repeat: -1, // Repeat the animation infinitely
   });
};




document.addEventListener('DOMContentLoaded', function () {
   var navIcon = document.getElementById('humBurgerIcon');
   navIcon.addEventListener('click', function () {
      navIcon.classList.toggle('open');
   });
});
