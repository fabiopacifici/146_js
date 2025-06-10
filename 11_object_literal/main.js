console.log('objects');

//📌 Objects litteral 
/* 
- {}
- key:value
- ,

*/
// declaration
const ball = {
  type: 'Golf',
  colors: ['red', 'blue', 'white'],
  size: 'small',
  weight: 200,
  isAvailable: true,
  details: {}

}


//  read: log the object
console.log(ball);

// with dot notation
console.log(ball.type) // 'Golf'

// with square brackets notation
console.log(ball['type']); // 'Golf'

console.log(ball.colors); // []
console.log(ball['colors']); // []

console.log(ball.size);
console.log(ball['size']);

console.log(ball.weight);
console.log(ball['weight']);



// 📌 Add: a new property to an existing object
// with dot notation
ball.price = 12
console.log(ball);

// with square brackets notation
ball['brand'] = 'Lorem Golf'
console.log(ball);




// 📌 Update an object value
ball.price = 15
ball['brand'] = '123 Golf'

console.log(ball);
ball['colors'] = ['REd', 'purple', 'yellow']



// 📌 Square brackets vs dot notation

const ballType = 'type'


console.log(ball.ballType) // undefined
console.log(ball[ballType]); // ball['type'] -> Golf

// 📌 For in

for (const key in ball) {
  //console.log(key);

  // mandatory: square brackets 
  //console.log(ball[key]) // ✅

  const elementValue = ball[key]

  console.log(key, elementValue);

  //console.log(ball.key); // undefined


}


/* 📌 Complex  data types */

/* 

  type: 'Golf',
  colors: ['red', 'blue', 'white'],
  size: 'small',
  weight: 200,
  isAvailable: true,
  details: {}

*/

/* const balls = [
  ['Golf', ['red', 'blue', 'white'], 'small', 200],
  ['Basket', ['orange', 'black'], 'large', 500],

] */


/* for (let i = 0; i < balls.length; i++) {
  const ball = balls[i];

  console.log(ball);

} */
const balls = [
  {
    type: 'Golf',
    colors: ['red', 'blue', 'white'],
    size: 'small',
    weight: 200,
    isAvailable: true,
    details: {}

  },
  {
    type: 'Football',
    colors: ['red', 'blue', 'white'],
    size: 'small',
    weight: 200,
    isAvailable: true,
    details: {}

  },
  {
    type: 'Basket',
    colors: ['red', 'blue', 'white'],
    size: 'small',
    weight: 200,
    isAvailable: true,
    details: {}

  },
  {
    type: 'Volley',
    colors: ['red', 'blue', 'white'],
    size: 'small',
    weight: 200,
    isAvailable: true,
    details: {}

  }

]

for (let i = 0; i < balls.length; i++) {
  const ball = balls[i];

  console.log(ball);


  // read
  // dot notation
  console.log(ball.type);

  // square brackets notation
  console.log(ball['type']);


  // for in
  for (const key in ball) {
    const elementValue = ball[key];
    console.log(key, elementValue);


  }




}