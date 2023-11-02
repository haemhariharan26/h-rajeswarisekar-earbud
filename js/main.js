let menuToggle = document.querySelector('.menu-icon');
let menu = document.querySelector('#menu')


function openMobileView() {

   if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

menuToggle.addEventListener('click', openMobileView);

// I ran out of time to fix the bugs but above will be my hamburger menu


// This will be for my logo when you first load onto the page it will bounce up high once, so you know it's there before settling down quickly

(() => {
    // gsap.to("#logo", {y: 600 });
    // gsap.to("#logo", 3, {y: 600, autoAlpha: 1, ease: Bounce.easeOut})

    gsap.to("#spence", 3, {y: 600, ease: Bounce.easeOut})
})();


