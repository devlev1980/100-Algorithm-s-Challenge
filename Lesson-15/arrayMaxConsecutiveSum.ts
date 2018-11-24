function arrayMaxConsecutiveSum(input:number[],k:number): number {
  let sum = 0;
  let max = 0;
  
  
 for (let i = 0; i < k; i++) {
   sum+=input[i];
   console.log(sum)
 }
  max = sum;
  console.log(max)

for (let i = k; i < input.length; i++) {
 sum-= input[i-k];
 console.log(input[i-k])
 sum+= input[i];
 console.log(input[i])

 console.log(sum)

 if(sum>max){
   max = sum
 }
}

  return max;
}
console.log(arrayMaxConsecutiveSum([2,3,5,1,6],2))