function adjacmentElementsProducts(inputArray:number[]): number {
  let largetstProduct = inputArray[0]* inputArray[1];
  // console.log(largetstProduct)

  for (let i = 1; i < inputArray.length - 1; i++){
    const product = inputArray[i]* inputArray[i+1];

    largetstProduct = largetstProduct<product?product: largetstProduct


    console.log(product)
1   
  }

 return largetstProduct
  
}
console.log(adjacmentElementsProducts([3,6,-2,-5,7,3]))