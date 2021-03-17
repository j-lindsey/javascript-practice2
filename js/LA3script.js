//1.
let colors = [];
function addColor() {
    let color = document.getElementById("color").value;
    document.getElementById("color").value = "";
    colors.push(color);
    document.getElementById("colorDisplay").innerHTML = colors;
}
function removeLast() {
    colors.pop();
    document.getElementById("colorDisplay").innerHTML = colors;
}

//2.
function isPrime() {
    let number = document.getElementById("prime").value;
    let prime = true;
    if (number === 1) {
        prime = false;
    }
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime === true) {
        document.getElementById("primeDisplay").innerHTML = number + " is a prime number."
    }
    else {
        document.getElementById("primeDisplay").innerHTML = number + " is not a prime number."
    }
}
//3.
let numArr = [4, 76, 23, 765, 84, 234, 8, 4, 2];
document.getElementById("numberArray").innerHTML = numArr;
function secondLowHigh() {
    numArr.sort((a, b) => a - b);
    document.getElementById("lowHighResult").innerHTML = "Second Lowest Value is: " + numArr[1] + ".<br> Second Highest Value is: " + numArr[numArr.length - 2] + ".";
}
//4.
function calculateExponent() {
    let b = document.getElementById("bNum").value;
    let n = document.getElementById("nNum").value;
    let sum = 1;
    for (let i = 1; i <= n; i++) {
        sum *= b;
    }
    document.getElementById("exponent").innerHTML = b + "<sup>" + n + "</sup> = " + sum;
}
//5.
function yesOrNo() {
    let s = document.getElementById("yOrn").value;

    if (s === 'y' || s === "yes" || s === "Yes") {
        document.getElementById("trueOrFalse").innerHTML = "The input is true."
    }
    else if (s === "n" || s === "no" || s === "No") {
        document.getElementById("trueOrFalse").innerHTML = "The input is false."
    }
    else {
        document.getElementById("trueOrFalse").innerHTML = "Please enter valid input."
    }
}

//6.
function alphabetical() {
    let letters = [];
    letters = Array.from(document.getElementById("string").value);
    letters.sort(caseInsensitiveSort);
    document.getElementById("sortLetters").innerHTML = "Here are your sorted letters: " + letters.join("");
    function caseInsensitiveSort(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a > b)
            return 1;
        if (a < b)
            return -1;
    }
}
//7.
let numbers = [];
function addNumbers() {
    numbers.push(parseInt(document.getElementById("numbers").value));
    document.getElementById("numbers").value = "";
    document.getElementById("sum").innerHTML = "Numbers to add: " + numbers.join("+");

}

function calculateSum() {
    let sum = 0;
    numbers.map(function (x) {
        sum += x
    });
    document.getElementById("sum").innerHTML = "Numbers to add: " + numbers.join("+") + " = " + sum;
}
//8.
let intArr = [2, 4, 5, 5, 8, 5, 2, 1, 8, 1];
document.getElementById("integerarray").innerHTML = "Number Array: " + intArr.join(", ");
function findtheOne() {
    let lonelyInt;
    for (let i = 0; i < intArr.length; i++) {
        if (intArr.indexOf(intArr[i], 0) === intArr.lastIndexOf(intArr[i], intArr.length)) {
            lonelyInt = intArr[i];
        }
    }
    document.getElementById("intResult").innerHTML = "Lonely Integer is: " + lonelyInt;
}

//9.
let newIntArr = [6, 7, 4, 2, 8, 9, 1, 3, 5];
document.getElementById("newIntArr").innerHTML = "Number Array: " + newIntArr.join(", ");

function findMax() {
    let maxVal = 0;
    newIntArr.forEach(max)
    function max(elem) {
        if (elem > maxVal) {
            maxVal = elem;
        }
    }
    document.getElementById("newIntResult").innerHTML = "Maximum integer is: " + maxVal;
}
//10.
function oddOrEven() {
    let value = document.getElementById("odd_even").value;
    document.getElementById("odd_even").value = "";
    if (value % 2 == 0) {
        document.getElementById("oddEvenResult").innerHTML = value + " is a even number.";
    }
    else {
        document.getElementById("oddEvenResult").innerHTML = value + " is an odd number.";
    }
}

