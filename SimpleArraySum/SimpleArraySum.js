const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let size;
let array = [];
let sum = 0;
rl.question('Enter the size of an array: ', (answer) => {
  size = answer;
  rl.question(
    `Enter the element for an array size ${size} separated by a space: `,
    (answer) => {
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
    }
  );
});
