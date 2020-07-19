function FindSum() {
  let sum = 0;
  const array = [31, 4, 1, 5, 1, 2, 1, 7, 1, 8, 1, 9, 1, 1, 2, 1, 85];
  array.forEach((value) => {
    sum = sum + value;
  });
  console.log(sum);
}
FindSum();
