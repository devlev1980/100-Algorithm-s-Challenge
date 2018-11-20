function allmostIncreasingSequence(inputArray:number[]):boolean {
  let count = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if(inputArray[i]<= inputArray[i-1]){
      // console.log(inputArray[i])
      count++;
      if(inputArray[i]<= inputArray[i-2] && inputArray[i+1]<=inputArray[i-1]){
        return false;
      }
    }
  }
  return count<=1
}

console.log(allmostIncreasingSequence([1,3,1,2]))
// console.log(allmostIncreasingSequence([1,3,2]))