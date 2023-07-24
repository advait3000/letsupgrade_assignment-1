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
    return maxNumber;
  }
  
  const numbersArray = [10, 5, 20, 8, 15];
const maxNumber = findMax(numbersArray);
document.write(maxNumber);