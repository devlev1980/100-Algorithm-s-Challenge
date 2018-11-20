//First Solution

function add(a:number,b:number): number {
  return a+ b
}
console.log(add(4,5))
console.log(add(4,6))



//Second Solution
function add2(...a : number[]):number {
  let total = 0;
  a.forEach(num=>{
    // console.log(num)
    total+=num
  })
  return total
}
console.log(add2(1,2,3,5))