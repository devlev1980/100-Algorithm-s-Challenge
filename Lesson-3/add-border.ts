//First Solution

function addBorder(picture:string[]): string[] {
  const lengthOfBorder = picture[0].length+2
  let border = '';

  for (let i = 0; i < lengthOfBorder; i++) {
    border = border.concat('*')
  }
  picture.push(border);
  // picture.unshift('*'.repeat(lengthOfBorder))
  picture.unshift(border);

  for (let i = 1; i < picture.length-1; i++) {
    console.log(picture[i])
    picture[i] = '*'.concat(picture[i],'*') // '*' in front and in the end 
    
  }

  return picture
}
console.log(addBorder(["abc","dad"]));


//Second Solution
function addBorder2(picture2:string[]):string[] {
  const border2 = '*'.repeat(picture2[0].length+2);

  picture2.unshift(border2);
  picture2.push(border2);

  for (let i = 1; i < picture2.length-1; i++) {
    console.log(picture2[i])
    picture2[i] = '*'.concat(picture2[i],'*') // '*' in front and in the end 
    
  }
  return picture2;
  
}


console.log(addBorder2(["gef","rgb"]));