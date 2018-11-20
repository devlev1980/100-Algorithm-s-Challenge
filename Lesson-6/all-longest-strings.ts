function allLongestStrings(inputArray:string[]): string[] {
  let longestArrayLength = 0;
  const longestWords = []

  inputArray.forEach((word:string)=>{
    longestArrayLength = longestArrayLength< word.length?word.length :longestArrayLength;

  });

  inputArray.forEach((word:string)=>{
    if(word.length === longestArrayLength){
      longestWords.push(word)
    }
  })
  return longestWords
}
console.log(allLongestStrings(['abc','bb','zz','fgb','ppp']))