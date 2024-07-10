const comicsData = [
   {
      name: 'Mask Comics #2',
      description: '',
   },
   {
      name: 'Super Circus #1',
      description: 'Super Circus #1 1951 CGC 8.5 COW Pages. Classic clown cover from the golden age, and the 2nd highest graded copy on CGC census.',
   },
   {
      name: 'Stories of Christmas #nn',
      description: 'Stories of Christmas #nn 1942 CGC 6.0. Classic Santa cover, with a CGC pop of only 2. This story within the book is an adaption of "A Christmas Carrol" by Charles Dickens.',
   },
   {
      name: 'Four Color #91',
      description: 'Four Color #91 1945 CGC 2.5 COW Pages. One of the best Christmas covers of the golden age is a classic cover.',
   },
   {
      name: 'Punch Comics #12',
      description: 'Punch Comics #12 1945 CGC 2.5 COW Pages.One of the best Christmas covers of the golden age is a classic cover.',
   },
   {
      name: '3 Weird Mysteries #4',
      description: '3 Weird Mysteries #4, classic cover by Bernard Bailey. One of the weirdest pre-code horror covers, this cover features a skull with a sword through it with a human insect hybrid coming out of it.',
   },
   {
      name: 'Young Allies #1',
      description: 'Young Allies #1 1941 CGC 5.5 COW Pages. Classic Red Skull Hitler cover, and the 1st meeting of Captain America and the Human Torch. This classic issue features a 19 year old Stan Lee story, and incredible art by Jack Kirby. This comic actually comes from an original owner collection, where the owner purchased it directly from the comic store in 1941. Incredible. Ali Collectibles ℠',
   },
   {
      name: 'Fantastic Four #86',
      description: 'Fantastic Four #86 1969 CGC 7.5 White Pages. Classic Doctor Doom cover from the end of the silver age. This comic was created by Stan Lee, and Jack Kirby.',
   },
   {
      name: 'Fantastic Four #144',
      description: 'Fantastic Four #144 1974 CGC 8.0 White Pages. Classic Doctor Doom cover from the bronze age.',
   },
   {
      name: 'Fantastic Four #143',
      description: 'Fantastic Four #143 1974 CGC 7.5 White Pages. Classic Doctor Doom from the bronze age. From an original owner collection!',
   },
   {
      name: 'Fantastic Four #84',
      description: 'Fantastic Four #84 1969 CGC 7.0 OW-W Pages. Classic Doctor Doom cover from the end of the silver age, created by Stan Lee and Jack Kirby.',
   },
   {
      name: 'Fantastic Four #100',
      description: 'Fantastic Four #100 1970 CGC 7.0 OW-W Pages. Classic Doctor Doom cover, created by Stan Lee and Jack Kirby.',
   },
   {
      name: 'Marvel Previews #95',
      description: 'Marvel Previews #95 2011 CGC 9.6 White Pages. 1st cover appearance of Miles Morales, pre-dates Ultimate Fallout #4, the 1st full appearance of Miles Morales. Very rare book, low pop on CGC census.',
   },
   {
      name: 'Detective Comics #73',
      description: 'Detective Comics #73 1944 CGC 0.5 OW-W Pages. 2nd appearance of Scarecrow, and 1st cover appearance. Presents incredible for a 0.5, deep colors, and no missing pieces.',
   },
   {
      name: 'Batman #25',
      description: 'Batman #25 1944 CGC 4.0 COW Pages. Classic Batman cover, and the 1st Joker and Penguin meetup.',
   },
   {
      name: 'Batman #59',
      description: 'Batman #59 1950 CGC 4.5 COW Pages. 1st appearance of Deadshot, classic story, and classic space cover! In the story, after capturing the Joker, Batman and Robin ask him about his ultimate motives for crime and he tells them that his ancestors were also criminals. Batman then asks Professor Carter Nichols to send them back in time to the past, but Nichols makes a mistake and sends them to the future .In the year 2050, Batman and Robin meet with a descendant of the Joker called Rokej, who is the leader of the police force. This is a very funny and classic issue of the golden age.',
   },
   {
      name: 'Mask Comics #1',
      description: 'Mask Comics #1 1945 CGC 1.8 COW Pages Double Cover. Classic Devil, Psychedelic cover, done by the great L.B Cole. This is the only double cover out of both Mask Comics #1 or #2, a true 1 of 1. A double cover is printing error where 2 covers are attached to the comic vs the usual 1.',
   },
   {
      name: 'Terrific Comics #5',
      description: 'Terrific Comics #5 1944 Cover Only. Classic Alex Schomburg bondage cover, incredibly rare.',
   },
   {
      name: 'Spider-Man #1',
      description: 'Spider-Man #1 2016 CGC 9.8 White Pages Hip Hop Variant. Classic Miles Morales cover, who has in recent years become of the biggest and most popular characters in the world.',
   },
   {
      name: 'Batman #37',
      description: 'Batman #37 1946 CGC 1.8 White Pages. Classic golden age Joker cover, and Joker Story. Golden Joker covers are some of the most desired comic books in the world, and are very hard to acquire.',
   },
];



document.addEventListener('DOMContentLoaded', function () {

   const comicsContainer = document.getElementById('comicsContainer');

   comicsData.forEach((comic, index) => {
      const letter = String.fromCharCode(97 + index);
      const comicDiv = document.createElement('div');
      comicDiv.innerHTML = `
      <a href="#${comic.name.replace(/\s+/g, '%20')}" class="comic">
         <img src="assets/images/comic-museum/${letter}1.jpg" alt="${comic.name}">
         <div class="subheading">
            ${comic.name}
         </div>
      </a>`;
      comicsContainer.appendChild(comicDiv);


      const comicsContent = document.getElementById('comic-museum-content-container');

      const comicContentDiv = document.createElement('div');
      comicContentDiv.classList.add('comic-museum-content');
      comicContentDiv.id = comic.name.replace(/\s+/g, '%20');
      comicContentDiv.innerHTML = `
      <div class="card-wrapper" id="${comic.name.replace(/\s+/g, '%20')}">
         <span>
            <div class="block">
               <div class="img-wrapper">
                  <img alt="comic" src="assets/images/comic-museum/${letter}1.jpg">
                  <img alt="comic" src="assets/images/comic-museum/${letter}2.jpg">
               </div>
               <div class="block-inner">
                  <button class="pink-btn">
                     <span>
                        See Full Image
                     </span>
                  </button>
               </div>
            </div>
         </span>
      </div>
      <div class="card-content">
         <div class="heading">${comic.name}</div>
         <div class="subheading">
            ${comic.description}
         </div>
      </div>`;
      comicsContent.appendChild(comicContentDiv);
   });
});