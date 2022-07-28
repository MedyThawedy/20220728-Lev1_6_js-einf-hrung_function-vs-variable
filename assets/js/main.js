function returnOne() {
    return 1;
}

let x = 1;

let y = function returnOne() {
    console.log(y + 'Was sent')
}

if (x === y) {
    console.log("Wird das gedruckt?");
}

if (x != y) {
    console.log("x is not equal to y");
}