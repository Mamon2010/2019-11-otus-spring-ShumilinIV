var fn1 = () => {
	console.log('fn1');
	return Promise.resolve(1);
};

var fn2 = () =>
	new Promise((resolve) => {
		console.log('fn2');
		setTimeout(() => resolve(2), 1000);
	});

function promiseReduce(asyncFunctions, reduce, initialValue) {
	return new Promise((resolve, reject) => {
		let promise = asyncFunctions[0]();
		promise
			.then((value) => reduce(initialValue, value))
			.then((value) => asyncFunctions[1]())
			.then((value) => reduce(initialValue, value))
			.then((value) => resolve(value));
	});
}

promiseReduce(
	[ fn1, fn2 ],
	function(memo, value) {
		console.log('reduce');
		return memo * value;
	},
	1
).then(console.log);
