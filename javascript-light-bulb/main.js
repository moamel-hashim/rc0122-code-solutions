let onOrOff = true;
const $button = document.querySelector('button');
const $body = document.querySelector('body');
$button.addEventListener('click', function handleButtonEvent(event) {
  if (onOrOff === true) {
    $button.className = 'dark-mode';
    $body.className = 'dark-mode-background';
    onOrOff = false;
  } else if (onOrOff === false) {
    $button.className = 'light-mode';
    $body.className = 'light-mode-background';
    onOrOff = true;
  }
});
