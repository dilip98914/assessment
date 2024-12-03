function add(numbers) {
  if (!numbers) return 0;
  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterLineEnd);
    numbers = numbers.substring(delimiterLineEnd + 1);
  }

  const regex = new RegExp(`[${delimiter}\n]+`);
  const numberArray = numbers.split(regex);

  const negativeNumbers = numberArray.filter((num) => Number(num) < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      "negative numbers not allowed: " + negativeNumbers.join(", ")
    );
  }
  return numberArray.reduce((sum, num) => sum + Number(num), 0);
}

module.exports = { add };
