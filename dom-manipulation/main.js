let count = 0;

const $button = document.querySelector('.hot-button');
$button.addEventListener('click', function handleButtonEvent(event) {
  count++;
  const $p = document.querySelector('p');
  $p.textContent = `Clicks: ${count++}`;
  if (count < 4) {
    $button.className = 'hot-button cold';
  } else if (count < 7) {
    $button.className = 'hot-button cool';
  } else if (count < 10) {
    $button.className = 'hot-button tepid';
  } else if (count < 13) {
    $button.className = 'hot-button warm';
  } else if (count < 16) {
    $button.className = 'hot-button hot';
  } else if (count > 16) {
    $button.className = 'hot-button nuclear';
  }
});
