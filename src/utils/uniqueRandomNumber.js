const uniqueRandomNumber = (count, compareNumber) => {
  let uniqueNumber = Math.floor(Math.random() * Number(count));
  if (compareNumber) {
    do {
      uniqueNumber = Math.floor(Math.random() * Number(count));
    } while (uniqueNumber === compareNumber);
    return uniqueNumber;
  }
  return uniqueNumber;
};

export default uniqueRandomNumber;
