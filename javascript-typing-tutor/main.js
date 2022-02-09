const $accuracy = document.querySelector('.accuracy');
const $span = document.querySelectorAll('span');
const $html = document.querySelector('html');
let index = 0;
let correct = 0;
let characterTyped = 0;

$html.addEventListener('keydown', handleKeyPress);
function handleKeyPress(event) {
  if (event.key === $span[index].textContent) {
    $span[index].className = 'correct';
    index++;
    correct++;
    characterTyped++;
    $span[index].className = 'current';
  } else if (event.key !== $span[index].textContent) {
    $span[index].className = 'incorrect';
    characterTyped++;
  }
  const accuracy = (correct / characterTyped) * 100;
  const accuracyText = Math.round(accuracy);
  $accuracy.textContent = `Your accuracy is: ${accuracyText}%`;
}

const $reset = document.querySelector('.reset');
$reset.addEventListener('click', resetHandler);
function resetHandler(event) {
  location.reload();
}
