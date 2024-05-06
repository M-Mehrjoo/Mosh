// ....... Geting Started

// 1. OOP: object oriented programming
    // A style of programming that is centerd around objects rather than functions.

// 2. Four Pillars of OOP : (مفهوم اصلی / چهار ستون)

    // Encapsulation : Group related variables and functions (method) that operate on them into objects.
let employee = {
    baseSalary: 50000,
    overtime: 10,
    rate: 20,
    getWage: () => this.baseSalary + (this.overtime * this.rate)    // method (arrow function)
};

    // Abstraction : Hidding some of the properties and methods from the outside

    // Inheritance : Eliminate (حذف) redundant (اضافی) code
        // htmlElement : innerHTML , hidden, click(), focus()

    // Polymorphism : poly = many | morph = form -> many forms
        // Get rid of long if and else or switch and case statements.



// ....... Objects

// 2. Object Literals -> {}

const objectMembers = {
    key: 'value',                       // property
    functionName: (parameter) => {}     // method
};



console.log('............3');
// 3. Factory Function: ... return an object  

function createObjectFactory(parameter) {
    return {
        parameter,
        functionName: () => {}
    };
}
const objectFactory = createObjectFactory(1);
console.log(objectFactory);



console.log('............4');
// 4. Constructor Function: ... this keyword + new operator
    // ** In javaScript we don't have classes

function CreateObjectConstructor(parameter) {
        this.parameter = parameter;
        this.functionName = () => {}
}
const objectConstructor = new CreateObjectConstructor(2)    // 1. new oprator creat an empty object. {}
console.log(objectConstructor);                             // 2. set this to point to that object. {}
                                                            // 3.  return that object from function (with this keyword)
// const withoutNew = Function()                            // without new oprator -> this point to the global object.



// 5. Constructor Property 
    // every object has an constroctor property, that
    // references the function that was used to construct (creat) the object.


console.log('............6');
// 6. Functions are Objects

    // what happend under the hood when we use object syntax to creat an object {}
const CreateObjectConstructor2 = new Function ('parameter', `
this.parameter = parameter;
this.functionName = () => {}
`);

const objectFanction = new CreateObjectConstructor2(3);
console.log(objectFanction);


// CreateObjectConstructor.call({}, 4); 
// CreateObjectConstructor.apply({}, 4); // array
// = new CreateObjectConstructor(4);

// the expressions are exacly the same -> new === {}
//                                     -> without new === global object




console.log('............7');
// 7. Value Type vs. Reference Type (primitives vs. objects)

// Value (primitives)           Primitives (value types) are copied by their value.

// String
// Number
// Boolean
// Symbol
// undefined
// null 

let x = 10;                     
let y = x;                      // They are completely independent of each other 

x = 20;

console.log(x);
console.log(y);
                        

// Reference Type               Objects (reference types) are copied by their reference.

// Object
// Function -> are objects
// Array    -> are objects
              
let obj = {key: 10};   

function increase(obj) {        // They are pointing to the same object
  obj.key++;                    // We are Not dealing with two independent copies.
}          

increase(obj)
console.log(obj);


console.log('............8');
// 8. Ading or removing properties

function Circle8(radius) {
    this.radius = radius
    this.draw = () => console.log('draw');
}
const circle8 = new Circle8(8);

circle8.location = {x: 1};   // . -> Dot notation

   // . -> [] notation
// If at the time of writing the code, we don't know the name of property. (That is calculated at run time.)
// If using property names that are not valid identifiers e.g. special characters, space...
const propertyName = '...';    
circle8[propertyName] = 'run time';      // [''] -> 
console.log(circle8);


// delete oprator to delete a parameter from an object -> . Dot notation [] Brackets notation
delete circle8.location
console.log(circle8);



console.log('............9');
// 9. Enumerating Properties

// for in loop -> iterate over, all the members in an object (key, value ...)
for (const key in circle8) {
    console.log(key);           // keys
    console.log(circle8[key]);  // values 
    // if (typeof circle8[key] !== 'function') // Don't get methods
}

// keys method -> Return all the keys in our object az an array
const keys9 = Object.keys (circle8)
console.log(keys9);

// in oprator -> to see if an object has a given property
if ('radius' in circle8) {
    console.log('Circle 8 has a radius property.');
}


// 10. Abstraction      
                    // Hide the details
                    // Show the essentials

console.log('............11');
// 11. Private Properties and Methods

    // Closure: Inner function acsses all local variable of parent fuction.

    // We want to hide certain members from the outside.
    // ** We should define this members as a local variable in our function -> without 'this' keyword

function Circle10(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0}; // **

    let computeOptimumLocation = () => console.log('optimum location'); // **

    this.draw = () => {
        computeOptimumLocation();      // To acsses local members we don't use 'this' keyword
        console.log('draw');
    };
}
const circle10 = new Circle10(10);
console.log(circle10);

console.log('............12');
// 12. Getters and Setters -> Use Object.defineProperty to set Getters and Setters 

    // Object.defineProperty( 1, 2, 3)
                                        // 1. The object that we want to add a new property to. 
                                        // 2. The name of our Property ''
                                        // 3. An object, it's key is get / set and the value is a function -> {get: (){}}
                                                                                                           // {set: (value){}}

        // Display the privet properties:

        // Solution 1: define the method    -> this.getProperty
                    // 2. this.getProperty = () => { return property;}

        // Solution 2: defineProperty Method -> Object.defineProperty( 1, 2, 3)
                    // 3. An object, it's key is get and the value is a function -> {get: {}}



function Circle12(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0};

    // this.getDefaultLocation = () => {        
    //     return defaultLocation;
    // };                                       // Solution 1

    this.draw = () => {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: () => {return defaultLocation;},    // Solution 2 -> readOnly peroperty

        set: (value) => {                       
            if (!value.x || !value.y) 
                { throw new Error ('invalide Location.') }   // We can perform som validation -> The benefit of a setter                            
            
            defaultLocation = value;
        }
    });                                     
}     

const circle12 = new Circle12(12);
// circle12.defaultLocation = 1;        // We will get the error
console.log(circle12);



// ....... Prototypes

// 1. Inheritance (ارث بری) 

// ارث دهنده : Base-, Super-, Parent-class
// ارث برنده : Derived-, Sub-, Child-class
// Inharitence relationship: IS-A relationship-> ارث برنده IS-A  ارث دهنده

        // In JavaScript we don't have classes
        // We only have objects     
        // -> prototypical inheritance
        



// 2. Prototypes and Prototypical Inheritance

// Every object in jS has a Prototype (Parent)

// ارث دهنده : Prototype
            //  Prototype is the Parent of the ارث برنده 

// To get the prototype of an object -> we call 
                                                // Object.getPrototypeOf()
// Prototype itself is a property


console.log('............3');
// 3. Multilevel Inheritance

// Each array that we declear inherits from a prototype array(object)
// And this prototype array inherits from another prototype object (object base)

let myArray = [];
// Object.getPrototypeOf(myArray);      // To get the prototype of this array
console.log(myArray);                   // Look at the property


function Circle3(radius) {
    this.radius = radius;

    let computeOptimumLocation = () => console.log('optimum location');

    this.draw = () => {
        computeOptimumLocation();      
        console.log('draw');
    };
}
const circle3 = new Circle3(3);
console.log(circle3);                   // Look at the property




console.log('............4');
// 4. Property Descriptors

const person = {
    name: 'Mahtab',         // Property
    message: () => {        // Method
        console.log(`I'm rich and lucky and powerfull`);
    }
}

for (const key in person) {
    console.log(key);
}

console.log(Object.keys(person)); 

// Show attributes that attached to our member (here the toStrig method)  مورد نظر متصل شده اند  member نشان دادن ویژگی هایی که به  

    // Object.getOwnPropertyDescriptor(wich object, 'wich property')
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

    // configurable:            If we can delete the member (here toString()method)
    // enumerable:              If  we can iterate the member 
    // value: f toString()
    // writable:                If  we can over write the member(we can set it's value) 


// summary: Iterate over all these properties and methods of prototype (object base).
    // 1. Get the prototype of an obj (in this case -> person)
const objectBase = Object.getPrototypeOf(person); 
console.log(objectBase);
        
    // 2. Show attributes that attached to the toStrig method  
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')     
console.log(descriptor);


    // 3. Set this attributes for our propertys
    // -> using Object.defineProperty(which object, 'which property', {where we add the attributes to the property})
Object.defineProperty(person,'name', {
    // get: 
    // set: 
    writable: false,        // can't change the value of this property. (name)
    enumerable: false,      // can't iterate this property.(name)
    configurable: false,    // can't delete this property.(name)
});
    
console.log(Object.keys(person)); 



console.log('............5');
// 5. Constructor Prototypes

let obj5 = {};
        // * Get the prototype of an obj (in this case -> obj5)
const objectBase5 = Object.getPrototypeOf(obj5);

// === obj5.__proto__
// === Object.prototype ()  -> Constructor.prototype ()

console.log(objectBase5);


console.log('............6');
// 6. Prototype vs Instance Members
// -> Take methods out of the object and put in it's prototype to save memory

function Person(name) {
    this.name = name;                   // Instance member
           
    // this.message = () => {        
    //     console.log(`I'm happy`);
    // }                                // Remove the method from the Object and add to it's Prototype
}

Person.prototype.message1 = () => {      // Prototype member
    console.log(`I'm happy`);
    console.log(this);  // If you use () => {}, this refere to window
}                       // You can not over write a mthod or refere the new object.

Person.prototype.message2 = function() {     
    console.log(`I'm ${this.name}`);
    console.log(this);  // If you use function() {}, this refere to the new object
}                      

let personA = new Person ('Mahtab');
let personB = new Person ('Nojan');

personA.message2();
personB.message2();
personB.message1();

    // In both these kind of members, you can reference other members.
        // -> In a Prototype member, you can reference an Instance member
        // -> In an Instance member, you can reference a Prototype member


console.log('............7');
// 7. Iterating Inctance and Prototyp Members        


function log(params) {
    console.log(params);
}

log(Object.keys(personA));      // Returns only inctance members


for (const key in personA) {    // Returns all members (Inctance + Prototype)
    log(key);
}

    // hasOwnProperty methode -> return bulian
log(personA.hasOwnProperty('name'))


// 8. Avoid Extending the Bilt-in Objects

    // You should not modify the built in objects in JavaScript