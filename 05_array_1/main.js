console.log('it works');

// for loop with sequences of elements
// counter: let i = 0 (avvia la sequenza numerica a partire da 0)
// condition: i < 10 (limits the numeric sequence to 10)

for (let i = 0; i < 10; i++) {
  console.log(i);

}

//           0123456
console.log('Umberto'.length); // 7

const firstName = 'umberto'
const age = 25;
const isListening = true;

// umberto.length = 7
for (let i = 0; i <= firstName.length; i++) {
  //console.log(i);
  console.log(firstName[i]);

}


console.log(firstName[6], firstName.length);



/* 📌 Array */

// crate an array
// indexes:      0           1        2         3
const names = ['Nicola', 'Asia', 'Matteo', 'Lucia']

// indexed:      0    1   2   3    4
const numbers = [10, 40, 50, 100, 1000]

// indexed:          0       1    2       3
const umbData = ['Umberto', 25, true, ['fabio', 'artus', 'pablo'], names]


//                                        0       1         2
// Square bracket notation (get an item from the array)
console.log(names);
console.log(numbers);
console.log(umbData);
console.log(umbData[3]);
console.log(umbData[3][1]);



console.log(names.length) // 4
console.log(names[0]); // nicola
console.log(names[1]); // Asia
console.log(names[2]); // Matteo
console.log(names[3]); // Lucia


console.log('2', "ciao", 2, true);

'This is "Fabio"'
//'That's fabio'
'That\'s fabio'
"That's fabio"


// 📌 Array Manipulation

console.log(numbers);

// 👉 add at the end of the array
numbers.push(2000)

console.log(numbers);

// 👉 add at the beginning
numbers.unshift(1)

console.log(numbers);


// 👉 remove the first item of the array
numbers.shift()

console.log(numbers);

// 👉 Remove an elemnt from the end of the array
numbers.pop()

console.log(numbers);



[].length // 0
''.length // 0
const str = 'this is a string'
const arr = [12, 1233, 445]
str.length // 16 
arr.length // 3



// 📌 Array + for loop
const movies = [
  'Starwars 1', // 0
  'Starwars 2', // 1
  'Starwars 3', // 2
  'Starwars 4',  // 3
  'Starwars 5',  // 4
]

console.log(movies.length);  // 5
console.log(movies[0]); // Starwars 1



for (let i = 0; i < movies.length; i++) {
  // log
  console.log(movies[i].toLowerCase());


  const element = movies[i]

  console.log(element.toLowerCase());

  console.log(element.length);



}


