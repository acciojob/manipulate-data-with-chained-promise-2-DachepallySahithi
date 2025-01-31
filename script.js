// The function that returns a promise with an array after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // Resolve after 3 seconds
  });
}

// Function to filter out odd numbers
function filterEvens(numbers) {
  return new Promise((resolve) => {
    const evens = numbers.filter(num => num % 2 === 0);
    setTimeout(() => {
      resolve(evens);
    }, 1000); // Delay of 1 second before resolving with even numbers
  });
}

// Function to multiply even numbers by 2
function multiplyByTwo(numbers) {
  return new Promise((resolve) => {
    const doubled = numbers.map(num => num * 2);
    setTimeout(() => {
      resolve(doubled);
    }, 2000); // Delay of 2 seconds before resolving with doubled numbers
  });
}

// Execute the promise chain
getNumbers()
  .then((numbers) => {
    // First Promise: Filter out odd numbers and update the output div after 1 second
    return filterEvens(numbers);
  })
  .then((evens) => {
    // After filtering, display the even numbers in the output div
    document.getElementById('output').textContent = `Even numbers: ${evens.join(', ')}`;

    // Second Promise: Multiply the even numbers by 2 and update the output after 2 more seconds
    return multiplyByTwo(evens);
  })
  .then((doubled) => {
    // After multiplication, update the div with the doubled numbers
    document.getElementById('output').textContent = `Doubled even numbers: ${doubled.join(', ')}`;
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
