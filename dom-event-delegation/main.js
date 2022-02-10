const $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log('the value of event.target:', event.target);
  console.log('value of event.target.tagName:', event.target.tagName);
  if (event.target.matches('button')) {
    const closest = event.target.closest('.task-list-item');
    console.log('the value of closest element:', closest);
    closest.remove();
  }
});
