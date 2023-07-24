function findMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return undefined;
  }
  let maxNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return "Largest number is :  " + maxNumber+ "<br>";
}
const numbersArray = [10, 5, 20, 8, 15];
const maxNumber = findMax(numbersArray);
document.write(maxNumber);


function calculateArea(length, width) {
  if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) {
    return undefined;
  }

  const area = length * width;
  return "Area : "+ area;
}

const length = 10;
const width = 5;
const area = calculateArea(length, width);
document.write (area);
