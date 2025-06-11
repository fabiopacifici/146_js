/* let name = 'Paolo';
let age = 30;
let email = 'paolo@email.it';

const nameKey = prompt('Type the name of a key for an object\'s poperty');
const keyValue = prompt('Type the value for the provied key')

const student = {
  name: name,
  [nameKey]: keyValue,
  email: email
};

console.log(student); */


// 📌 Destructuring

// object destructuring
const post = {
  title: 'Learn Javascript',
  image: 'https://picsum.photos/400/200',
  content: 'lorem picsum'
}


const { title, content } = post
console.log(title, content);


// array destructuring

const product = ['MSI laptop', 'Laptop msi super potente', '123']


/* const [productName, productDesc, productPrice] = product

console.log(productName, productDesc, productPrice); */

const [productName, , productPrice] = product

console.log(productName, productPrice);



// rest parameter
// param of a function
// spread operator

function logData(...data) {
  console.log(data);

}

logData('ciao', {
  title: 'Learn Javascript',
  image: 'https://picsum.photos/400/200',
  content: 'lorem picsum'
}, product, 10, true);




// Spread operator
const post_copy = { ...post, author: 'Fabio' }

console.log(post_copy);

