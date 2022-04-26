/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return;
  }
  let valueAtIndex = null;
  let i = -1;
  while (i < index) {
    i++;
    valueAtIndex = queue.dequeue();
    if (i !== index) {
      queue.enqueue(valueAtIndex);
    }
  }
  return valueAtIndex;
}
