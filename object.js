let car = {
    favcar: 'lambo',
    worst: 'alto',
    price: '1200000'
};
console.log(car.worst);
//if we want to modify any property ,So it can do by that


let pet = {
    facet: 'lambs',
    name: "kitty",
    rupee: '1200000'
};
pet.facet = "dog"
console.log(pet.facet);

//  Use delete property 
let pet = {
    facet: 'lambs',
    name: "kitty",
    rupee: '1200000'
};
delete pet.rupee;
console.log(pet);

// To iterate a object one by one we use in operator.
let pet = {
    facet: 'lambs',
    name: "kitty",
    rupee: '1200000'
};
for (let key in pet) {
    console.log(key);
}

// METHODS IN Object

let pet = {
    facet: 'lambs',
    name: "kitty",
    rupee: '1200000',
    saki() {
        console.log('hi');
    }

};
console.log(pet)
pet.saki();


// THIS IN OBJECT . Means to access our own object without writing the whole name

let pet = {
    facet: 'lambs',
    name: "kitty",
    rupee: '1200000',
    saki() {
        console.log("hi my pet is " + this.name + "");
    }

};
console.log(pet)
pet.saki();


// Math object in js

Math.methods(...values)
    // Methods like pow,sqrt,max,min,etc.

//          Random num.It generates a random no.
let x = math.random();
console.log(x);
//  if v want a random no. in any specific range then the formula is like
Math.random() * (max - min) + min; // that's it.
// let write it on a function


function getRandom(min, max) {
    let x = Math.random() * (max - min) + min;
    return x;
}
console.log(getRandom(20, 30));

// or if we want to include min and max then the formula is like


Math.random() * (max - min + 1) + min;