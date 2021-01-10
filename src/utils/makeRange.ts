const makeRange = (beginNumber: number, endNumber: number): number[] => {
    const returnArray = [];
    for (let x = beginNumber; x <= endNumber; x++) {
        returnArray.push(x);
    }
    return returnArray;
};

export default makeRange;
