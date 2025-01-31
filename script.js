getNumbers()
  .then((numbers) => {
    console.log("Original numbers:", numbers);  // Debug log
    return filterOdds(numbers);
  })
  .then((evens) => {
    console.log("Even numbers:", evens);  // Debug log
    document.getElementById('output').textContent = `Even numbers: ${evens.join(', ')}`;
    return multiplyByTwo(evens);
  })
  .then((doubled) => {
    console.log("Doubled even numbers:", doubled);  // Debug log
    document.getElementById('output').textContent = `Doubled even numbers: ${doubled.join(', ')}`;
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
