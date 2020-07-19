/**
 * One Version
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let finalAliceScore = 0;
let finalBobScore = 0;
let aliceScores = [];
let bobScores = [];
rl.question('Enter the Alice score followed by space: ', (score) => {
  let aliceScore = score.split(' ');
  aliceScore.forEach((value) => {
    aliceScores.push(value);
  });
  rl.question('Enter the Bob score followed by space: ', (score) => {
    let bobScore = score.split(' ');
    bobScore.forEach((value) => {
      bobScores.push(value);
    });
    for (var i = 0; i < aliceScore.length; i++) {
      if (aliceScores[i] > bobScores[i]) finalAliceScore += 1;
      if (aliceScores[i] < bobScores[i]) finalBobScore += 1;
    }
    let finalScore = [];
    finalScore.push(finalAliceScore);
    finalScore.push(finalBobScore);
    console.log(finalScore);
    console.log(`Final Score of Alice and Bob is ${finalScore} respectively`);
    rl.close();
  });
});

/**
 * Another Version
 */
// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//   inputString = inputString.split('\n');

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

// function compareTriplets(a, b) {
//   var aliceScore = [];
//   var bobScore = [];
//   var finalAliceScore = 0;
//   var finalBobScore = 0;
//   var finalScore = [];
//   a.forEach((value) => {
//     aliceScore.push(parseInt(value));
//   });
//   b.forEach((value) => {
//     bobScore.push(parseInt(value));
//   });
//   for (var i = 0; i < aliceScore.length; i++) {
//     if (aliceScore[i] > bobScore[i]) finalAliceScore += 1;
//     if (aliceScore[i] < bobScore[i]) finalBobScore += 1;
//   }

//   finalScore.push(finalAliceScore);
//   finalScore.push(finalBobScore);

//   return finalScore;
//   // return a,b;
// }

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const a = readLine()
//     .replace(/\s+$/g, '')
//     .split(' ')
//     .map((aTemp) => parseInt(aTemp, 10));

//   const b = readLine()
//     .replace(/\s+$/g, '')
//     .split(' ')
//     .map((bTemp) => parseInt(bTemp, 10));

//   const result = compareTriplets(a, b);

//   ws.write(result.join(' ') + '\n');

//   ws.end();
// }
