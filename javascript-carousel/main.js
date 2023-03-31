const rightArrow = document.querySelector('.fa-arrow-right');
const leftArrow = document.querySelector('.fa-arrow-left');
const images = document.querySelectorAll('img');
const circles = document.querySelectorAll('.fa-circle');
let currentCircleIndex = 0;

rightArrow.addEventListener('click', () => arrowHandler('right'));
leftArrow.addEventListener('click', () => arrowHandler('left'));

function arrowHandler(direction) {
  const increment = direction === 'right' ? 1 : -1;
  const currentImageIndex = Array.from(images).findIndex(img => !img.classList.contains('hidden'));
  const nextImageIndex = (currentImageIndex + increment + images.length) % images.length;
  const currentImage = images[currentImageIndex];
  const nextImage = images[nextImageIndex];
  currentImage.classList.add('hidden');
  nextImage.classList.remove('hidden');
  updateCircle(increment);
}

function updateCircle(increment) {
  const currentCircle = circles[currentCircleIndex];
  const nextCircleIndex = (currentCircleIndex + increment + circles.length) % circles.length;
  const nextCircle = circles[nextCircleIndex];
  currentCircle.classList.toggle('fa-solid');
  currentCircle.classList.toggle('fa-regular');
  nextCircle.classList.toggle('fa-solid');
  nextCircle.classList.toggle('fa-regular');
  currentCircleIndex = nextCircleIndex;
}
