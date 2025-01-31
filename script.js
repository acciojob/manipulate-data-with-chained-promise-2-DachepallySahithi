function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

function filterOdds(numbers) {
  return new Promise((resolve) => {
    const evens = numbers.filter(num => num % 2 === 0);
    setTimeout(() => {
      resolve(evens);
    }, 1000); 
  });
}

function multiplyByTwo(numbers) {
  return new Promise((resolve) => {
    const multiplied = numbers.map(num => num * 2);
    setTimeout(() => {
      resolve(multiplied);
    }, 2000); 
  });
}

getNumbers()
  .then((numbers) => {
    return filterOdds(numbers);
  })
  .then((evens) => {
    document.getElementById('output').textContent = `Even numbers: ${evens.join(', ')}`;

    return multiplyByTwo(evens);
  })
  .then((doubled) => {
    document.getElementById('output').textContent = `Doubled even numbers: ${doubled.join(', ')}`;
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
