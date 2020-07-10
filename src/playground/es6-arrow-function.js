const square = function (x) {
  return x * x;
};

console.log(square(8));

// const squareArrow = (x) => {
//   return x * x;
// };

// Expression syntax if just one line to return
const squareArrow = (x) => x * x;

console.log(squareArrow(9));

const getFirstName = (n) => n.split(' ')[0];
console.log(getFirstName('Mike Duncan'));