
//First Solution

function addTwoDigits(num:any) : number{
  
  const nums = num.toString().split('');


  return nums.reduce((num,num2)=>{
    // console.log(num,num2)
    return parseInt(num) + parseInt(num2); 
  });
}
console.log(addTwoDigits(29))


//Second Solution
function addTwoDigits2(num:any) : number{
  
  const nums = num.toString().split('');



    return parseInt(nums[0]) + parseInt(nums[1]); 
 
}
console.log(addTwoDigits2(29))
