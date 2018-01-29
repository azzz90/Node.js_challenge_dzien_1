//Twój kod
let myNumbers = process.argv.slice(2);

//console.log(myNumbers);

let myNumbersFixed = myNumbers.map(arg => {
  return parseInt(arg);
})

//console.log(myNumbersFixed);

let result = myNumbersFixed.reduce((a,b) => a+b,0);

console.log(result);
