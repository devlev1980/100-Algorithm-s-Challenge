

//First Solution

function alphabeticShift(input:string) : string{
  const alfabet: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let letterArrayShifted = input.split('');

  for (let i = 0; i < letterArrayShifted.length; i++) {
    let index = 0;
    console.log(letterArrayShifted[i])

    if(letterArrayShifted[i]!== 'z'){
      index = alfabet.indexOf(letterArrayShifted[i])+1; // shift index of the actual letter 
      console.log(index)
    }
    letterArrayShifted[i] = alfabet[index];
    console.log(alfabet[index])
    
  }
  return letterArrayShifted.join(''); // join the letters into a new string

}
console.log(alphabeticShift('crazy'))


//Second Solution

function alphabeticShift2(input:string) : string{
  const alfabet: object = {
    "a": "b","b":"c","c":"d","d":"e",
    "e":"f","f":"g","g":"h","h":"i",
    "i":"j","j":"k","k":"l","l":"m",
    "m":"n","o":"p","p":"q","q":"r",
    "r":"s","s":"t","t":"u","u":"v",
    "v":"w","x":"y","y":"z","z":"a"
  } 
  let letterArrayShifted = input.split('');

  for (let i = 0; i < letterArrayShifted.length; i++) {
    console.log(letterArrayShifted[i])
    console.log(alfabet[letterArrayShifted[i]])
    letterArrayShifted[i]=alfabet[letterArrayShifted[i]]

    console.log(letterArrayShifted[i])
    
  }
  return letterArrayShifted.join(''); // join the letters into a new string

}
console.log(alphabeticShift2('crazy'))
