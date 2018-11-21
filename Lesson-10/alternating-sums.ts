function alternatingSums(input:number[]) : number[]{
  let evenSum = 0;
  let oddSum = 0;

  input.forEach((element,index)=>{
    // console.log(element)
    // console.log(index)
    if(index % 2 === 0){
      // console.log(evenSum)
      evenSum +=element
      // console.log(evenSum)
    }else{
      oddSum += element;
    }

  });
  console.log(0%2==0)
  console.log(1%2===0)
  console.log(2%2===0)
  console.log(3%2===0)
  console.log(4%2===0)

  return [evenSum,oddSum]
  
}
console.log(alternatingSums([50,60,60,45,70]));