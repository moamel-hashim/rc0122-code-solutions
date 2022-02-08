const $button = document.querySelector('.click-button');
$button.addEventListener('click', handleClick);
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

const $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseOver);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

const $doubleClicked = document.querySelector('.double-click-button');
$doubleClicked.addEventListener('dblclick', handleDoubleClick);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
