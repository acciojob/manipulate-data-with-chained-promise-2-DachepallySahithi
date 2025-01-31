function getArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); 
  });
}

getArray()
  .then((arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evens = arr.filter((num) => num % 2 === 0);
        document.getElementById('output').textContent = evens.join(', '); // Display even numbers
        resolve(evens); 
      }, 1000); 
    });
  })
  .then((evens) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubled = evens.map((num) => num * 2);
        document.getElementById('output').textContent = doubled.join(', '); // Display doubled values
        resolve(doubled); 
      }, 2000); 
    });
  })
  .catch((error) => {
    console.error('Error occurred:', error);
    document.getElementById('output').textContent = 'An error occurred.';
  });