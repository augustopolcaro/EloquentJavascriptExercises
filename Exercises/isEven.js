
//Recursive function to know if a number is even or not

function isEven(n) {
    if (n < 0) {
        n = n * -1
    }
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else {
        return isEven(n - 2);
    }
}

console.log(isEven(-10))