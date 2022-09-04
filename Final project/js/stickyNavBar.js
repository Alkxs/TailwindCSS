const header = document.getElementById('header');
let mainContainer = document.getElementById('main-container');

window.addEventListener('scroll', fixNav);

function fixNav() {
  let scrollPos = window.scrollY;

  if (scrollPos > 5) {
    header.classList.add('bg-white');
  } else {
    header.classList.remove('bg-white');
  }

  if (scrollPos > 1000) {
    header.classList.remove('bg-white');
    header.classList.add('main-gradient');
  } else {
    header.classList.remove('main-gradient');
  }
}
