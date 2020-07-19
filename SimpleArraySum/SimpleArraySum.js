/** Option one */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let size;
let array = [];
let sum = 0;
rl.question('', (answer) => {
  size = answer;
  rl.question(``, (answer) => {
    let number = answer.split(' ');
    number.forEach((value) => {
      array.push(parseInt(value));
    });
    if (array.length > size) {
      throw new Error(
        `Please enter the valid array size you've defined i.e. ${size}`
      );
    } else {
      array.forEach((value) => {
        sum = sum + value;
      });
      console.log(`The sum of ${answer} is ${sum}`);
    }
    rl.close();
  });
});

/** Option 2 according to HackerRank */
/**
 'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

 */
