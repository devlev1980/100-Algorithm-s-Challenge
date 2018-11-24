function arrayMaximalAdjacentDifference(inputArray:number[]):number {
  let maxDiffrence = Math.abs(inputArray[0]-inputArray[1]);
  console.log(maxDiffrence)
  for (let i = 0; i < inputArray.length; i++) {
    let absoluteDiff = Math.abs(inputArray[i-1] - inputArray[i])
    console.log(inputArray[i-1]);
    console.log(inputArray[i]);
    console.log(absoluteDiff);

    

    // if(absoluteDiff> maxDiffrence){
    //   maxDiffrence = absoluteDiff;
    // }
    maxDiffrence = absoluteDiff>maxDiffrence? absoluteDiff: maxDiffrence
  }

  return maxDiffrence
}
console.log(arrayMaximalAdjacentDifference([2,4,1,0]))