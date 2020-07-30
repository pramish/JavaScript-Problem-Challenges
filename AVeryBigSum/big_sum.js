const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let size = 0;
let myArray = [];
let sum = 0;

const getUserInput = () => {
  rl.question('Enter the size of an array: ', (answer) => {
    size = answer;
    rl.question(
      'Enter the element in an array followed by space: ',
      (answer) => {
        calculateSum(answer);
        rl.close();
      }
    );
  });
};
const calculateSum = (value) => {
  const userInput = value.split(' ');
  userInput.forEach((value) => {
    myArray.push(parseInt(value));
  });
  myArray.forEach((value) => {
    sum += value;
  });
  printSum(sum);
};

const printSum = (sum) => {
  console.log(`The sum is: ${sum}`);
};
getUserInput();
