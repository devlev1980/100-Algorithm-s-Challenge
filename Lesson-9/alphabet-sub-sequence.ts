function alphabetSubSequence(input:string): boolean {
  const chars: string[] = input.split('');
  const charValues: number[] = [];

  chars.forEach((char:string)=>{
    charValues.push(char.charCodeAt(0))
    console.log(char.charCodeAt(0))
  })

  console.log(new Set(charValues));
  console.log(new Set(charValues).size);

  if(new Set(charValues).size !== charValues.length){
      return false;
  }
  for (let i = 0; i < charValues.length-1; i++) {
    // console.log(charValues[i]);
    if(charValues[i] >= charValues[i+1]){
        // console.log(charValues[i+1]);
       return false;
    }
  }



  return true;
}
console.log(alphabetSubSequence('zab'))
console.log(alphabetSubSequence('cdce'))
console.log(alphabetSubSequence('ace'))
console.log(alphabetSubSequence('bxz'))
