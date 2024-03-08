console.log('----------- Exercise 1 -----------');
// Max of two numbers

// my solution  

function maximal (a,b) {
    if (a>b) { return a; }
/*els*/ return b;
}

let result= maximal (9,8);
//result= max (23,4)

console.log(result);


// mosh solution

// 1. a & b are ok names, beacuse hire we are not dealing with a complex logic
// 2. That's the mathematical point: If the numbers are equal, we still should show one number.
// 3. Remove 'els' key from function.Beacuse if a>b will return a and jump out of function.
// 1. use conditional Operators: (condition) ? a : b;


let maxResult= max (6,7);
console.log(maxResult);

function max (a,b) {
    return (a > b) ? a : b;
}

console.log('----------- Exercise 2 -----------');
//  Landscape or portrait

// my solution  

    // a 
function landscape (width,height) {
    return (width > height) ? 'Landscape' : 'not Landscape';
}
console.log(landscape (9,15));


    // b
function isItLandscape (width,height) {
    if (width > height) {return 'Landscape';}
    return (false)
}
console.log(isItLandscape (8,6));


// mosh solution

// 1. We want to return true or false and don't need to define Landscape....

function isLandscape (width,height) {
    return (width > height);
}

console.log(isLandscape (9,7));

console.log('----------- Exercise 3 -----------');
//  FizzBuzz

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuuu
// Not divisible by 3 or 5 => input (input number)
// Not a number => 'Not a number'


for (let i=1; i <= 15; i++) {
    const output = fizzBuzz (i);
    console.log (i,': ', output);
}

console.log (fizzBuzz ('mahtab'));

function fizzBuzz (input) {
    // if (typeof input !== 'number') {return 'Not a number';}              // my solution 
    // else if (input % 3 === 0 && input % 5 !== 0) {return 'Fizz';}        // my solution 
    // else if (input % 5 === 0 && input % 3 !== 0) {return 'Buzz';}        // my solution 
    // else if (input % 5 === 0 && input % 3 === 0) {return 'FizzBuzz';}    // my solution 
    // else {return input;}                                                 // my solution 
    if (typeof input !== 'number') {return NaN;}
    if (input % 5 === 0 && input % 3 === 0) {return 'FizzBuzz';}
    if (input % 3 === 0) {return 'Fizz';}
    if (input % 5 === 0) {return 'Buzz';}
    return input;
}

console.log('----------- Exercise 4 -----------');
//  Demerit points

// Speed Limit = 70
// Drive under the speed limit --> Ok
// every 5 above --> Point = 1
// mor that 12 points --> License suspended



// my solution

console.log(checkSpeedMah (73));
console.log(checkSpeedMah (79));
console.log(checkSpeedMah (91));
console.log(checkSpeedMah (135));

function checkSpeedMah (speed) {
    const okSpeed=70;
    const pointSpeed=5;
    const suspendSpeed=135;

    if (speed >= suspendSpeed) { 
        return 'License suspended';
        }
    if (speed >= okSpeed+pointSpeed) {
        let point = Math.floor((speed-okSpeed)/pointSpeed);
        return ('Point: '+ point);
        }
    return 'OK';
}

    // if (speed<=74) { return 'OK';}
    // if (speed >= 75 && speed <= 134) {
    // speed = speed *2 / 10;
    // speed = Math.floor(speed) *10/2;
    // let point = (speed-75)/5;
    // return ('Point: '+ point);
    // }



// mosh solution


console.log(checkSpeed (73));
console.log(checkSpeed (79));
console.log(checkSpeed (91));
console.log(checkSpeed (135));

function checkSpeed (speed){
    const speedLimit= 70;
    const kmPerPoint= 5;

    if (speed < speedLimit+kmPerPoint)  {
        return'OK';
        }
    const points= Math.floor ((speed-speedLimit)/kmPerPoint);
    if (points>=12) {
        return 'License suspended';
        }
    else {
        return ('Point: ' + points);
        }
}

console.log('----------- Exercise 5 -----------');
//  Even or Odd Number

showNumber (10);

function showNumber (limit){
    for (let i= 0; i<=limit; i++){
    // my solution
        /* if (i % 2 === 0) {                        
            console.log(`${i} EVEN`);   // Nubmer will be convert to String
            }                           
        else {
            console.log(i, 'ODD');      // Number stay number
            }  */    
            
    // mosh solution
        const message = (i % 2 === 0 ? 'EVEN' : 'ODD');  
        console.log(i, message);    
        }
    }
   

console.log('----------- Exercise 6 -----------');
//  Count Truthy

// Get an Array -> returns a number of Trusy values in this array



const array =[true,1,0,''];

// countTruthy(array);

// console.log(array.length);

// for (const index of array) {
//     if (index == true) {
//         console.log(index);
//     }
// }

// function countTruthy(array) {
//     for (const index of array) {
//     if (index)      // (index) = (index == true)
//     console.log(index);
//     }
// }



console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)     //--> let instead of const. value insted of index
    if (value)
    count++;
    return count;
}

console.log('----------- Exercise 7 -----------');
//  String Properties

const movie = {
    title: 'Mahtab',
    releasYear: 2018,
    rating: 8,
    director: 'Nojan',
    };

// console.log(movie)

// for (const key in movie) {
//      if (typeof movie[key] === 'string') {
//         console.log(key, movie[key]);
//     }
// }

showProperties(movie);

function showProperties(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
           console.log(key, obj[key]);
        }
    }
   }



console.log('----------- Exercise 8 -----------');
//  Sum of Multiples of 3 and 5

// Multiples of 3 between 0 & limit(10): 3, 6, 9
// Multiples of 5 between 0 & limit(10): 5, 10
// add numbers together = 33

// let sumOfNumbers = 3+6+9+5+10
// console.log (sumOfNumbers);


// let sum = 0;  // ** Important: first sum variable shuld be written out of loop

// for (let i = 0; i <= 10; i++) {
//      if (i % 3 === 0 || i % 5 === 0){
//         sum += i;
//     }
// }
//         console.log(sum);


console.log(sum(10))

function sum (limit) {
    let sum = 0;
    
    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0){
           sum += i;
        }
    }           
        return sum;
    };


console.log('----------- Exercise 9 -----------');
//  Grade

// Grade 0-59: F
// Grade 60-69: D
// Grade 70-79: C
// Grade 80-89: B
// Grade 90-100: A


const marks = [80, 80, 50];


// function calculateGrade (marks){
//     for (const mark of marks) {
//         sumMarks += mark;
//     }
//     const average = sumMarks / marks.length

//     if (average < 60) { return 'F'};
//     if (average < 70) { return 'D'};
//     if (average < 80) { return 'C'};
//     if (average < 90) { return 'B'};
//     return 'A';
//     }
// console.log(calculateGrade(marks));


// single responsibility prenciple: Function should be small and focuse onlye on one thing.

function calculateAvrage (array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
    }
    return sum / array.length;  // = (let average = sum / array.length; --> return average;)
}

function calculateGrade (marks){
    const average = calculateAvrage(marks);
    if (average < 60) { return 'F'};
    if (average < 70) { return 'D'};
    if (average < 80) { return 'C'};
    if (average < 90) { return 'B'};
    return 'A';
    }
console.log(calculateGrade(marks));


console.log('----------- Exercise 10 -----------');
//  Stars

// a) Neasted loop
showStars(5)
function showStars (rows){
    for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i< row; i++){
        pattern += '*';
    }
    console.log(pattern);
    }
}

// b)
function printStars(starCount){
    let star='';
    for(let rowNumber = 1 ; rowNumber <= starCount ; rowNumber++){
        star += '*';
        console.log(star);
    }        
}

printStars(5)


console.log('----------- Exercise 11 -----------');
//  Prime Numbers

// showPrimes(9);

// function showPrimes (limit) {
//     for (let number = 2; number <= limit; number++) {

//         isPrime = true;
//         for (let factor = 2; factor < number; factor++) {
//             if (number % factor === 0)
//             isPrime = false;
//             break;
//         }
//         if (isPrime) {console.log(number)};
//     }
// }


function isPrime (number) {
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0){return false};
        }
        return true;
    }


function showPrimes (limit) {
    for (let number = 2; number <= limit; number++) {

        if (isPrime(number)) {console.log(number)};
    }
}
showPrimes(20);

console.log('----------- Exercise 1 -----------');
// Address Object

    // my solution

const address = {
    street : 'Hörder Bruch 32',
    city: 'Dortmund',
    zipCode: 44263 
};

function showAddressMah (address) {
    console.log(address);
    // return {
    //     address
    // };
}
console.log(showAddressMah(address));


    // mosh solution

function showAddress (address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

showAddress(address);


console.log('----------- Exercise 2 -----------');
// Factory & Constructor Functions

function createAddressFactory(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}
let addressFactory = createAddressFactory('Hörder Bruch 32', 'Dortmund', '44263');
console.log(addressFactory);

function CreateAddressConstructor(street, city, zipCode){
this.street = street;
this.city = city;
this.zipCode = zipCode;
}
let addressConstructor = new CreateAddressConstructor('Hörder Bruch 32', 'Dortmund', '44263');
console.log(addressConstructor);


console.log('----------- Exercise 3 -----------');
// Object Equality 

// let addressConstructor1 = new CreateAddressConstructor('Päßchen1', 'Dortmund', '44225');
let addressConstructor2 = new CreateAddressConstructor('Hörder Bruch 32', 'Dortmund', '44263');
let addressConstructor3 = addressConstructor;

function areEqual (address1, address2) {  
    // let keys1 = Object.keys (address1);      
    // console.log(keys1);
    // let keys2 = Object.keys (address2);
    // console.log(keys2);

    // return (Object.keys(address1) === Object.keys(address2)) ? true : false;     // Try1

    // console.log(address1['street']);
    // console.log(address1['city']);
    // console.log(address1['zipCode']);
    // console.log(address2['street']);
    // console.log(address2['city']);
    // console.log(address2['zipCode']);

    return (address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode) // ? true : false;       *وقتی قراره درست یا غلط جواب بده، لازم نیست چیزی بنویسیم  

}


function areSame (address1, address2) {
    return address1 === address2;
}

console.log(areEqual (addressConstructor, addressConstructor2));
console.log(areSame (addressConstructor, addressConstructor2));
console.log(areSame (addressConstructor, addressConstructor3));


console.log('----------- Exercise 4 -----------');
// Blog Post Object

    // my solution

const blogPost = {
    title: 'JavaScript',
    body:
    `Tempor sint non irure nisi laborum do pariatur
    laboris ea pariatur eu anim ad aliqua.`,
    author: 'Mahtab',
    views: 23,
    comment: {
        author: 'Nojan',
        body:
        `Cupidatat laboris velit Lorem esse quis veniam`
    },
    isLive: true
};
console.log(blogPost);

    // mosh solution

let post = {
    title:'a',
    body:'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a',body: 'b'},
        {author: 'c', body: 'd'},
    ],
    isLive: true
};
console.log(post);


console.log('----------- Exercise 5 -----------');
// Constructor Functions    *  کمتر داشته باشه بهتر property هرچه function :نکته  

    // my solution
function PostConstructor (title, body, author, views,comments, isLive) {
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = views,
    this.comments = comments,
    this.isLive = isLive
}
let newPost = new PostConstructor ('a', 'b', 'c', 1, [{author: 'd', body: 'e'}], true);
console.log(newPost);


    // mosh solution
    function Post (title, body, author) {   // We don't nedd to set views,comments, isLive for a new post that has not been published yet
        this.title = title;
        this.body = body;
        this.author = author;
        this.views = 0;
        this.comments = [];
        this.isLive = false;
    }
    let newPost2 = new Post ('a', 'b', 'c');
    console.log(newPost2);



console.log('----------- Exercise 6 -----------');
// Price Range Object

let priceRanges = [     // tooltip: What we see in hover effect.
    { lable: '$', tooltip: 'Inxpensive', minPerPerson: 0, maxPerPerson: 10 },  
    { lable: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { lable: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];

let restaurants = [
{ averagePerPerson: 5 }
]

console.log('----------- Exercise 1 -----------');
// Array from Range

// const newArray = [];
// newArray.push(5);
// console.log(newArray);


// function newArray (min, max) {
//     for (let i = min; i <= max; i++) {
//         const newArray = [];
//         newArray.push(i);
//         console.log(newArray);
//     }
// };

const numberFromRange = arrayFromRange(-3,3);
console.log(numberFromRange);

function arrayFromRange(min, max) {
    const newArray = [];
    for (let i = min; i <= max; i++) {
        newArray.push(i)
    };
    return newArray;        // Don't log => You need to return!!!!
}; 


console.log('----------- Exercise 2 -----------');
// Includes

const numberIncludes = [1,2,3,4];

// numberIncludes.forEach(n => {
//     const search = 4; 
//     if (n === search) {
// console.log('yes');    }
// });

    // رو پشت متد می نوشتی return  تازه اگر خروجی داشت باید 

// function includes2(array, searchElement) {
//     array.forEach(n => {
//         if (n === searchElement) 
//         return true;     //   خروجی نداردforEach متد!
//     });
//     return false;
// }

// console.log(includes2(numberIncludes,4));


function includes(array, searchElement) {
    for (const element of array) {
        if (element === searchElement) 
        {return true;}
    }
    return false;
};

console.log(includes(numberIncludes,4));
console.log(includes(numberIncludes,9));



console.log('----------- Exercise 3 -----------');
// Except

const numberExcept = [1,2,3,1,4,1];
console.log(except(numberExcept,[1]));

function except(array, excluded) {
        return array.filter( n => !excluded.includes(n))  
    };


// console.log(except(numberExcept,1));
// function except(array, excluded) {
    //     return array.filter( n => n !== excluded)
    // };
    

// * The indexOf() method with a negative return means that the specified value was not found in the array or string.
// * The indexOf() method with 0 return means that the specified value was found in the array or string.
// function except(array, excluded) {
//         return array.filter( n => excluded.indexOf(n) !== 0)   // => excluded.indexOf(n) === -1 
//     };


// // Use reduce and includes
// function except(array, excluded) {
//     return array.reduce((acc, curr) => {
//             if (!excluded.includes(curr)) {acc.push(curr);}
//             return acc;
//         }, [])
// };



    // mosh solution

console.log(exceptMosh(numberExcept,[1]));

function exceptMosh(array, excluded) {
    const output = [];
    for (let element of array) {
        if (!excluded.includes(element)) {output.push (element);}
    }
    return output;
};



console.log('----------- Exercise 4 -----------');
// Moving an Element

const numberMove = [1, 2, 3, 4];
console.log(move(numberMove, 0, 3));

// // First Test:
// console.log(numberMove.splice(0,1));
// console.log(numberMove);
// console.log(numberMove.splice(1,0,1));
// console.log(numberMove);


// // Second Test:
// const goalNumber = numberMove.splice(2,1);
// // console.log(goalNumber);
// // console.log(numberMove);
// numberMove.splice(3,0,goalNumber[0]);
// console.log(numberMove);


//  // First Try
// function move(array, index, offset) {
//     const goalNumber = array.splice(index,1);
//     // console.log(goalNumber);
//     // console.log(array);
//     array.splice(offset,0,goalNumber[0]);    // You can not return it derictly
//     return array;                            // Should return at End
    
//     // console.error('Invalid offset!');
// }


function move(array, index, offset) {
    const position = index + offset;                // index + offset : Show movement
    if (position >= array.length || position < 0) {
        console.error('Invalid offset!');
        return;
    }
    
    const output = [...array];                       // We don't want to modify (change) the Original array
    const goalNumber = output.splice(index,1)[0];   // [0]: It give back the value of array (array to number)
    output.splice(position,0,goalNumber);    
    return output;
}
console.log(numberMove);



console.log('----------- Exercise 5 -----------');
// Count Occurrences

const numberCount = [1, 2, 3, 1, 1];
console.log(countOccurences(numberCount, 1));

//     // Second Method myTry
// function countOccurences(array, searchElement){
//     const amount = array.reduce((count, current) => {
//         if (current === searchElement) {
//             count++;
//         }
//         // console.log(count, current, searchElement);
//         return count;
//     },0);
//     return amount;      // If add return befor array.reduce give the same result.
//     }

    // Second Method moshTry
function countOccurences(array, searchElement){
    return array.reduce((count, current) => {
        const match = (current === searchElement) ? 1 : 0;
        // console.log(count, current, searchElement);
        return count + match
    },0);
    }
    
//     // First Method
// function countOccurences(array, searchElement){
//     let count = 0;

//     for (let n of array) {
//             if (n === searchElement) 
//             count++;
//         }
//     return count;
// };

            // Try:
            // const secondMethode = numberCount.reduce((count, current) => {
            //     if (current === 1) {
            //         count++;
            //     }
            //     return count
            // }, 0);
            // console.log(secondMethode);


            // for (let n of numberCount) {
            //     if (n === 1) {
            //         console.log(n);
            //     }
            // }


            // numberCount.forEach(n => {if (n === 1) {
            //     console.log(n);
            // }})


            // console.log(numberCount.filter (value => value === 1));



console.log('----------- Exercise 6 -----------');
// Get Max

const numberMax = [1, 2, 3, 4];

console.log(getMax(numberMax));

function getMax(array) {
    if (array.length === 0) return undefined;
    return array.reduce ((a, b) => (a > b) ? a : b);    // a = max  b = current
};

        // function getMax(array) {
        //     if (array.length === 0) return undefined;
        //     let max = array[0];
        //     for (const n of array) {if (n > max) max = n};
        //     return max;
        // };

        // const try1 = numberMax.reduce ((max, current) => (max >= current) ? max : current);
        // console.log(try1);



console.log('----------- Exercise 7 -----------');
// Movies

    // All the movies in 2024 with rating > 7
    // Soprt them by their rating
    // Descending order (rating)   ترتیب نزولی
    // Pick their title

const movies = [
    {title: 'a', year: 2024, rating: 7.5},
    {title: 'b', year: 2024, rating: 7.7},
    {title: 'c', year: 2024, rating: 6},
    {title: 'd', year: 2023, rating: 7.5},
];

console.log(moviesFiltering(movies));

function moviesFiltering(array) {
    return array
            .filter (film => film.year === 2024 && film.rating > 7)
            .sort ((x, y) => y.rating - x.rating)
            .map (film => film.title)
};

//     // Try without function : return arrays
// const testChain = movies
//                     .filter ( film => film.year === 2024 && film.rating > 7) 
//                     .sort ((x, y) => y.rating - x.rating)  //= { if (x.rating > y.rating) return -1   
//                                                             //    if (x.rating < y.rating) return 1
//                                                             //    if (x.rating === y.rating) return 0}
//                     // .reverse()                           // If you write in  .sort x.rating - y.rating shuld use .reverse
// console.log(testChain);


//     // Try without function : return titles
// const filtered = movies
//                     .filter ( film => film.year === 2024 && film.rating > 7)
//                     .sort ((x, y) => y.rating - x.rating)
//                     .map (film => film.title)

// console.log(filtered);


console.log('----------- Exercise 1 -----------');
// Sum of Arguments
    // Challenge: We can pass an array of numbers to function and still we get the sum of numbers
    // How:
        // Check if this numbers array has a single element -> numbers.length === 1
        // And check if the first elemnt is an array itself -> && Array.isArray(numbers[0]
        // If true, we need to flatten this structure -> Having just an array of numbers
        // How: 
            // Reset the numbers to a new array -> numbers = []
            // And use the spread oprator -> numbers = [...]
            // to spreat numbers[0], which is another array -> [...numbers[0]]


function sum(...numbers) {              // Rest oprator convert whatever we passt in to an array.
    if (numbers.length === 1 && Array.isArray(numbers[0])) {
        numbers = [...numbers[0]];
    }
    return numbers.reduce((a,b) => a+b);  
}

console.log(sum(1,2,3,4));

console.log(sum([1,2,3,4]));     

    // Challenge: My try 
// function sumArray(array) {
//     if (! Array.isArray(array)){
//         throw new Error('Enter an array')
//     }
//     return array.reduce((a,b) => a+b); 
// }

// try {
//     console.log(sumArray([1,2,3,4]));
//     console.log(sumArray({}));
// }
// catch(e) {
//     console.log(e);
// }



console.log('----------- Exercise 2 -----------');
// Area of Circle
        // To creat a read only property we need a getter.
const circle = {
    radius: 1,
    get area(){         // area : مساحت
        return Math.PI * (this.radius ** 2)
    }
};
console.log(circle.radius);

circle.area = [1,1]
console.log(circle.area);


console.log('----------- Exercise 3 -----------');
// Error Handling

const howMany = [1, 2, 3, 1, 1];
try {
    console.log(errorHandling(howMany, 1));
    console.log(errorHandling('Nojan', 1));
} catch (e) {
    console.log(e.message);
}

function errorHandling(array, searchElement){
    if (!Array.isArray(array)) {
        throw new Error ('You can only check an array!')
    }
    return array.reduce((count, current) => {
        const match = (current === searchElement) ? 1 : 0;
        // console.log(count, current, searchElement);
        return count + match
    },0);
    }
    