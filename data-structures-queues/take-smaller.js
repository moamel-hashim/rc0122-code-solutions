/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const firstValue = queue.dequeue();
  const secondValue = queue.dequeue();
  if (firstValue === undefined) {
    return;
  }
  if (secondValue === undefined) {
    return firstValue;
  }
  if (firstValue < secondValue) {
    queue.enqueue(secondValue);
    return firstValue;
  }
  if (secondValue < firstValue) {
    queue.enqueue(firstValue);
    return secondValue;
  }
  if (secondValue === firstValue) {
    queue.enqueue(firstValue);
    return firstValue;
  }
}
