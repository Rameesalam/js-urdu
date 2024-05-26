const name = "ramees"
const repocount = 50

//console.log(name + repocount + "Value");

//console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String ('Hel-lo-World'); 

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,4)

console.log(newString);

const anotherSting = gameName.slice(-2,4)

console.log(anotherSting);

const newStringOne = "          ramees      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ramees.com/ramees%20alam"

console.log(url.replace('%20','-'))

console.log(url.includes('Ammi'))

console.log(gameName.split('-'))