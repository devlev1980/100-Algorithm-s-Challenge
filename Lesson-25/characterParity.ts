function characterParity(input:string) {
 const result = parseInt(input);


 return isNaN(result) ? 'not a digit' : result %2 === 0 ? 'even': 'odd'
}
console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));