function getRangeReport(start, end) {
  const object = {
    total: 0,
    odds: [],
    evens: [],
    range: [],
    average: 0
  };

  for (let i = start; i <= end; i++) {
    object.total += i;
    if (i % 2 === 0) {
      object.evens.push(i);
    } else if (i % 2 === 1) {
      object.odds.push(i);
    }
    object.range.push(i);
  }
  object.average = object.total / object.range.length;
  return object;
}

getRangeReport(1, 10);
