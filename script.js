window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(Math.random() * 4 + 1)
	}, Math.random() * 5000);	
});

promises.add(promise1);

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(Math.random() * 4 + 1)
	}, Math.random() * 5000);	
});
promises.add(promise2);

const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(Math.random() * 4 + 1)
	}, Math.random() * 5000);	
});

promises.add(promise3);

const promise4 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(Math.random() * 4 + 1)
	}, Math.random() * 5000);	
});

promises.add(promise4);

const promise5 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(Math.random() * 4 + 1)
	}, Math.random() * 5000);	
})
promises.add(promise5);

Promise.any(promises)
	.then((result) => {
		const element = document.getElementById("output");
		element.innerText = result;
	})
	.catch(err => console.log(err)); 
