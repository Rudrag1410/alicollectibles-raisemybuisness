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
}

document.addEventListener('DOMContentLoaded', function () {
   var navIcon = document.getElementById('humBurgerIcon');
   var expandedMenu = document.getElementById('expandedMenu');

   navIcon.addEventListener('click', function () {
      navIcon.classList.toggle('open');
      expandedMenu.classList.toggle('open');
   });
});



document.addEventListener('DOMContentLoaded', (event) => {
   const popup = document.querySelector('.popup');
   const openPopupBtns = document.querySelectorAll('.openPopupBtn');
   const closePopupBtn = document.querySelector('.closePopupBtn');

   function openPopup() {
      popup.style.display = 'block';
   }

   function closePopup() {
      popup.style.display = 'none';
   }

   // Open popup when any open button is clicked
   openPopupBtns.forEach((btn) => {
      btn.addEventListener('click', openPopup);
   });

   // Close popup when the close button is clicked
   closePopupBtn.addEventListener('click', closePopup);

   // Open popup after 30 seconds
   setTimeout(openPopup, 30000);

   // Close popup if user clicks outside of it
   window.addEventListener('click', (event) => {
      if (event.target == popup) {
         closePopup();
      }
   });
});
