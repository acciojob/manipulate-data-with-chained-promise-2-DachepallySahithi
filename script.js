//your JS code here. If required.
function getNumbers() {
	return new Promise((resolve) => {
		setTimeOut(() => resolve([1,2,3,4]), 3000);
	});
}

getNumbers()
.then((numbers) =>{
	return new Promise((resolve) =>{
		setTimeOut(()=>{
			const evens = numbers.filter(num => num % 2 === 0);
			document.getElementById("output").innerText = evens.joins(", ");
			resolve(evens);
		}, 1000);
	});
})
.then((evens) => {
	return new Promise((resolve) => {
		setTimeout(() => {
        const doubled = evens.map(num => num * 2);
        document.getElementById("output").innerText = doubled.join(", ");
        resolve(doubled);
		},2000);
	});
})
.catch((error) => {
    document.getElementById("output").innerText = "Error: " + error;
  });
})