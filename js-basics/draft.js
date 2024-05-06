console.log('----------- Exercise 1 -----------');

let address = {
    street: 'a',
    city: 'b',
    zipCode: '123'
}

function showAddress (address) {
    for (const key in address) {
        console.log(key, address[key]);        
    }
};
showAddress(address);

console.log('----------- Exercise 2 -----------');

function createAddress (street, city, zipCode) {
    return {
        street,
        city,
        zipCode,
    };
};

console.log(createAddress('a','b','c'));

function Address (street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
console.log(new Address ('a','b','c'));

console.log('----------- Exercise 3 -----------');

const address1 = new Address ('a','b','c');
const address2 = new Address ('a','b','c');

function areEqual (address1, address2) {
    // console.log(address1);
    // console.log(address2);
    return address1.street === address2.street  && address1.city === address2.city && address1.zipCode === address2.zipCode;
};

console.log(areEqual(address1, address2));

function areSame (address1, address2) {
   return address1 === address2;
}

console.log(areSame(address1, address2));

console.log('----------- Exercise 4 -----------');

let blog = {
    title: 'a',
    boddy: 'lorem',
    author: 'b',
    views: 23,
    comments: [{author: 'c', body: 'lorem'}, {author: 'd', body: 'lorem'}],
    isLive: true
}

console.log(blog);

console.log('----------- Exercise 5 -----------');

function Blog (title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

blog = new Blog ('a', 'b', 'c');
console.log(blog);

console.log('----------- Exercise 6 -----------');

// let priceRanges = [
//     {lable: '$', tooltip: 'inexpensive', minPerPerson: 0, maxPerPerson: 10},
//     {lable: '$$', tooltip: 'moderate', minPerPerson: 11, maxPerPerson: 20},
//     {lable: '$§§', tooltip: 'expensive', minPerPerson: 21, maxPerPerson: 50}
// ]

// console.log(priceRanges);

// let restaurants = [
//     function averagePerPerson (minPerPerson, maxPerPerson) {
//         return (minPerPerson + maxPerPerson) / 2;
//     },
// ]


// console.log(averagePerPerson(0,10));


console.log('----------- Exercise 1 -----------');



function arrayFromRange(min,max) {
    let range = [];
    for (let i = min; i<= max; i++){
    range.push(i);
}
return range;
};
console.log(arrayFromRange(1,5));


console.log('----------- Exercise 1 -----------');

// function sum(...numbers) {
//     if (numbers.length === 1 && Array.isArray(numbers[0])) {
//         numbers = [...numbers[0]]
//     }
//     return numbers.reduce((a,b) => a+b)
// }
// console.log(sum ([1,2,3,4]));


// function sumNew(...numbers) {
//     numbers = numbers.flatMap(item => item);
//     numbers.forEach(item => {
//         if (typeof(item) !== 'number')
//         throw new Error('You can only enter numbers')
//     })
//     return numbers.reduce((a,b) => a+b)
// }


// try {
//     console.log(sumNew ([1,2,3],4,));
//     console.log(sumNew ([1,2,3],4,'j'));
// } catch (e) {
//    console.log(e); 
// }



function sumNew(...numbers) {
    numbers = numbers.flatMap(item => item);
    numbers = numbers.map(item => Number(item))
    numbers.forEach(item => {
        if (isNaN(item))
        throw new Error('You can only enter numbers!')
    })
    return numbers.reduce((a,b) => a+b)
}


try {
    console.log(sumNew ([1,2,3],4,));
    console.log(sumNew ([1,2,3],4,'3'));
    console.log(sumNew ([1,2,3],4,'j'));
} catch (e) {
   console.log(e.message); 
}


console.log('----------- Exercise Test -----------');

const array = [1, 2, 3, 0];

console.log(countTruthy(array));


// console.log(array.reduce((sum,i) => sum + i));


function countTruthy(array) {
    return array.reduce ((sum, item) =>  { 
          return sum+item
    }, 0)
}


// function countTruthy(array) {
//     let sum = 0;
//     for (const item of array) {
//     if (item) {sum++;}
//     }
//     return sum;
// }


console.log('----------- Exercise Test -----------');

// let startTime = 0;
// let endTime = 0;
// let duration = 0;
// let isStarted = false;

// function start() {
//     if (isStarted) {
//         throw new Error('Is already startet.')
//     };
//     isStarted = true;
//     startTime = new Date();
//     startTime = startTime.getTime();
//     console.log(startTime);
// }


// function stop() {
//     if (!isStarted) {
//         throw new Error('Is not started.')
//     };
//     isStarted= false;
//     endTime = new Date();
//     endTime = endTime.getTime();
//     console.log(endTime);
//     duration = (endTime - startTime) / 1000
//     console.log(duration);
//     return duration;
// }

// function reset() {
//     startTime = 0;
//     endTime = 0;
//     duration = 0;
//     isStarted = false;
// }


let stopWatch = new StopWatch();

function StopWatch () {
    let startTime = 0;
    let endTime = 0;
    let duration = 0;
    let isStarted = false;

    this.start = () => {
        if (isStarted) {
            throw new Error('Is already startet.')
        };
        isStarted = true;
        startTime = new Date();
        startTime = startTime.getTime();
    }

    this.stop = () => {
        if (!isStarted) {
            throw new Error('Is not started.')
        };
        isStarted= false;
        endTime = new Date();
        endTime = endTime.getTime();
        duration += ((endTime - startTime) / 1000)
    }

    this.reset = function() {
        startTime = 0;
        endTime = 0;
        duration = 0;
        isStarted = false;
    }
   
    Object.defineProperty(this, 'duration', {
        get: () => {return duration}
    })
}
