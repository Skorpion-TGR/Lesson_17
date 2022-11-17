

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
         const animItems = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYoffset > animItemOffset - animItemPoint) && pageYoffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_activate');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_activate');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }


   setTimeout(() => {
      animOnScroll();
   }, 300);
}

// Бургер

const iconMenu = document.querySelector('.content-header__icon');
const menuBody = document.querySelector('.nav-block__items');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

// прокрутка при кліку

const menuLinks = document.querySelectorAll('.link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;


         if (iconMenu.classList.contains('._active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}




//Плеєр

// const videoPlayer = document.querySelector('.video-player')
// const video = videoPlayer.querySelector('.video')
// const playButton = videoPlayer.querySelector('.play-button')

// playButton.addEventListener('click', (e) => {
//    if (video.paused) {
//       video.play()
//       e.target.textContent = '||'
//    }
//    else {
//       video.pause()
//       e.target.textContent = '‣'
//    }
// })

