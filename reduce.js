const numbers = [20, 10, 30, 60, 250, 40, 20, 10, 20,33];
const totalNumber = numbers.reduce( (previous, current) => previous + current ,0);
console.log(totalNumber);