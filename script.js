const gallery = document.querySelector('.gallery');
const body = document.querySelector('body');

gallery.addEventListener('click', event => {
  if (event.target.tagName === IMG) {
    const imageUrl = event.target.dataset.src;
    body.style.backgroundImage = `url(${imageUrl})`;
  }
});
