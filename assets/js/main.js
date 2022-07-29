function returnOne() {
    return 1;
}

let x = 1;

let y = function returnOne() {
    console.log(y + 'Was sent');
    console.log(y);
    console.log(typeof (y));
}

if (x === y) {
    console.log("Wird das gedruckt?");
    console.log(y);
    console.log(typeof (y));
}

if (x != y) {
    console.log("x is not equal to y");
    console.log(y);
    console.log(typeof (y));
}

