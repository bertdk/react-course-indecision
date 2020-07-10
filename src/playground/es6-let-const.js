var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jan';
// not allowed: let nameLet = 'Jan';
nameLet = 'Jullie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// not allowed: nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
  var petName = 'Hale';
  return petName;
}

getPetName();
// not allowed, due to scope: console.log(petName);
// var = function scoped
// let, const = block scoping

const fullName = 'Andrew Mead';

if(fullName){
  const firstNameC = fullName.split(' ')[0];
  var firstName = firstNameC;
  console.log(firstName);
}

console.log(firstName);

// start with const, if needed change to let, never use var
