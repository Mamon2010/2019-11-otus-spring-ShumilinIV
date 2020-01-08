function sum(arg) {
    let resultSum = arg;

    function newSum(newArg) {
        (newArg === undefined) ? resultSum : resultSum += newArg;
        return newSum;
    }

    newSum.toString = function() {
        return resultSum;
    }

    return newSum;
}