const gallery = document.querySelector('.gallery');
const body = document.querySelector('body');
const imageFolder = 'img/'; // Specify the folder path where your images are located

gallery.addEventListener('click', event => {
  if (event.target.tagName === 'IMG') {
    const imageUrl = event.target.dataset.src;
    body.style.backgroundImage = `url(${imageUrl})`;
    // Remove the border from all images
    const images = gallery.querySelectorAll('img');
    images.forEach(img => (img.style.border = 'none'));

    // Add a border to the clicked image
    event.target.style.border = '2px solid #fff';
  }
});
