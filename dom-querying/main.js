console.log('hello, world');

const $h1 = document.querySelector('h1');
console.log($h1);
console.dir($h1);

const $explanation = document.querySelector('#explanation');
console.log('value of explanation:', $explanation);
console.dir($explanation);

const $hint = document.querySelector('.hint');
console.log('the value of $hint:', $hint);
console.dir($hint);

const $allP = document.querySelectorAll('p');
console.log('the value of $allP:', $allP);
console.dir($allP);

const $links = document.querySelectorAll('.example-link');
console.log('the value of $links:', $links);
