const people = [
  {first: 'abc', last: 'white', year: 1571, passed: 1630},
  {first: 'nic', last: 'smith', year: 1473, passed: 1543},
  {first: 'john', last: 'brown', year: 1858, passed: 1947},
  {first: 'amy', last: 'black', year: 1789, passed: 1860},
]

// const names = ['beck, glenn', 'chloe, sun', 'j, fk', 'roy, smith', 'taylor, swift', 'hello, world'];

//array.prototype.filter()
//filter the list of people for those who were born in the 1500's
const fifteen = people.filter(people =>{
  if(people.year >= 1500 && people.year < 1600){
    return true;  //keep it
  }
});
console.table(fifteen);

//array.prototype.map()
//give us an array of the people first and last names
const fullNames = people.map(people => `${people.first} ${people.last}`);
console.log(fullNames);

//array.prototype.filter()
//sort people by birthdate, oldest to
const ordered = people.sort((a, b) =>
  a.year > b.year ? 1 : -1
);
console.table(ordered);

//array.prototype.reduce()
//how many years did all the people live?
//sort the people by years lived
const totalYears = people.reduce((total, people)=>{
  return total + (people.passed - people.year);
}, 0);

console.log(totalYears);

