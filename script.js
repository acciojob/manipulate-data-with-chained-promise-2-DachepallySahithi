function transformData() {
  return new Promise((resolve) => {
    const arr = [1, 2, 3, 4];

    setTimeout(() => {
      resolve(arr);
    }, 3000);
  });
}

transformData()
  .then((arr) => {
    return new Promise((resolve) => {
      const evenNumbers = arr.filter((num) => num % 2 === 0);

      setTimeout(() => {
        document.getElementById('output').innerText = `Even Numbers: ${evenNumbers}`;
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      const multiplied = evenNumbers.map((num) => num * 2);

      setTimeout(() => {
        document.getElementById('output').innerText = `Multiplied Numbers: ${multiplied}`;
        resolve(multiplied);
      }, 2000);
    });
  });
