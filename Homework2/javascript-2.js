var fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1);
}

var fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000);
})

function promiseReduce(asyncFunctions, reduce, initialValue) {
    return asyncFunctions.reduce((prev, elem) =>
        prev
        .then(elem)
        .then((val) => reduce(initialValue, val)), Promise.resolve());
}


promiseReduce(
        [fn1, fn2],
        function(memo, value) {
            console.log('reduce')
            return memo * value
        },
        1
    )
    .then(console.log);