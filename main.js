// Create empty array for numbers
let numbers = [];

// Create counter k
let k = 1;

// Run for loop 30 times k++ and push into empty array
for (let i = 0; i < 30; i++) {
    numbers.push(k++);
    // console.log(numbers)
}
console.log(numbers)

let fizzBuzz = [];

// Run for loop over number array
for (let i = 1; i < numbers.length + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i !==0) {
        fizzBuzz.push("fizzBuzz")
    } else if (i % 5 === 0 && i !==0) {
        fizzBuzz.push("buzz")
    } else if (i % 3 === 0) {
        fizzBuzz.push("fizz")
    } else {
        if (i !== 0)
        fizzBuzz.push(i);
    }
}
console.log(fizzBuzz);

const butt = document.getElementById("butt");
let mainDiv = document.getElementById("mainDiv");
butt.addEventListener("click", buzz);

let sent = "";

function buzz () {
    for (let i = 0; i < fizzBuzz.length; i++) {
        console.log(fizzBuzz[i])
        sent += fizzBuzz[i] + " ";
        console.log(sent)
        mainDiv.textContent = sent;

    }
}







