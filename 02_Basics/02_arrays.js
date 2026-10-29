const marvel = ["thor", "Ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

//marvel.push(dc); //New elements to add to the array.

// console.log(marvel);
// console.log(marvel[3][2]);

// const allhreo = marvel.concat(dc);
// console.log(allhreo);

// spread
const all_new_hero = [...marvel, ...dc];
console.log(all_new_hero);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_array = another_array.flat(Infinity);
console.log(another_array);
console.log(another_array[2][1]);
// converting in Array
console.log(Array.isArray("vishal"));
console.log(Array.from("vishal"));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
