# Repetition

## Summary

- Repetition is the control structure that a programmer uses to cause a computer to repeat a group of statements.
- Loop is the informal term for repetition control structure.
- In a pre-test loop, the loop continuation condition is written at the top of the loop, which causes a computer to check the condition before the computer executes the statements in the loop.
- In a post-test loop, the loop continuation condition is written at the bottom of the loop, which causes a computer to execute the statements in the loop before it checks the condition.
- A counting loop causes a computer to repeat a group of statements until a counting variable reaches a desired number.
- A sentinel controlled loop causes a computer to repeat a group of statements until an event (the sentinel) occurs.

Given the following JavaScript code, how many times will the computer display the word "Flowers"? - 4 iterations
for (let i = 3; i < 7; i++) {
alert("Flowers");
}

Write a while loop to count from 1 to 10.

let i = 1;
while ( i <= 10 ) {
dsfasdfasfa;
i++;
}

function countDown() {
let output = "";
let skip = parseInt(document.getElementById('integerBox').value);
let i = 100;
while (i >= 0) {` output +=`${i}<br>`;
i -= skip;
}
document.getElementById('outputDiv').innerHTML = output;
} 25

// output
100
75
50
25
0
