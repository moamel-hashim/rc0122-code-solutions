// const $correct = document.querySelector('.correct');
const $span = document.querySelectorAll('span');
const $html = document.querySelector('html');
let index = 0;
$html.addEventListener('keydown', handleKeyPress);
function handleKeyPress(event) {
  if (event.key === $span[index].textContent) {
    $span[index].className = 'correct';
    index++;
    $span[index].className = 'current';
  } else if (event.key !== $span[index].textContent) {
    $span[index].className = 'current incorrect';
  }
}
