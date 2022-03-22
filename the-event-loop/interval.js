let currentCount = 3;
const intervalId = setInterval(() => {
  currentCount--;
  console.log(currentCount);
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(intervalId);
  }
}, 1000);
