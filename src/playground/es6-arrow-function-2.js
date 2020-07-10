// arguments object = no longer bound with arrow functions

const add = function (a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(53, 3, 3422));

const addArrow = (a, b) => {
  // werkt hier niet: console.log(arguments);
  return a + b;
};
console.log(add(53, 3, 3422));

// this keyword = no longer bound

const user = {
  name: 'Andwr',
  cities: ['NY', 'Dublin', 'Genk'],
  printPlacesLived: function () {
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  }
};

user.printPlacesLived();

// due the this no longer bound, 
// sometimes dont want to use arrow function
// for example with the method printPlacesLived

const userES6method = {
  name: 'Andwr',
  cities: ['NY', 'Dublin', 'Genk'],
  printPlacesLived() {
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  }
};

// never use function keyword

const userMap = {
  name: 'Andwr',
  cities: ['NY', 'Dublin', 'Genk'],
  printPlacesLived () {
    return this.cities.map((city) => this.name + ' has lived in ' + city);

    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  }
};

console.log(userMap.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [3, 5, 8, 10],
  multiplyBy: 2,
  mulitply(){
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.mulitply());