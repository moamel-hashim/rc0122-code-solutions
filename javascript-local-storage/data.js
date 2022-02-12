/* exported todos */

var todos = [];

window.addEventListener('beforeunload', beforeUnloadHandler);

const previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
function beforeUnloadHandler(event) {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
