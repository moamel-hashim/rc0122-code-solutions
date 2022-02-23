let count = 4;
const intervalId = setInterval(function timeout() {
  const $h1 = document.querySelector('h1');
  count--;
  $h1.textContent = count;
  if (count < 1) {
    $h1.textContent = '~Earth Beeelooowww Us~';
    clearInterval(intervalId);
  }
}, 1000);
