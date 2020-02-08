const makeRange = (beginNumber: number, endNumber: number) => {
  let returnArray = [];
  for (let x = beginNumber; x <= endNumber; x++) {
    returnArray.push(x);
  }
  return returnArray;
};

export default makeRange;
