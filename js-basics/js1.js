        // alt + z : وقتی متن طولانی است بر اساس اندازه مانیتور، باقیمانده رو در خط بعدی نمایش میده 

// ....... Geting Started
                // This is my first JavaScript code!
        console.log('Hello World');


// ....... Basics: 
        // 1.Variables: a variable is like a box. It´s name is the lable of the box.
        
                // Command prompt: cmd
                // Go back throu folders: cd..
                //Go to a folder: cd folderName
        
        let user ='MahMeh'; // We use the let keyword to declear a variable.
        console.log(user);

                // Rules for naming Variables:
                // Connot be a reserved keyword (if, esl, let, ...)
                // Should be meaningful (a, jj, ...)
                // Cannot start with a number (1name)
                // Cannot contain a space or hyphen (firstName) *camelcase*
                // Are case-sensitive (firstName ≠ FirstName)
        
        let firstName ='Mah';
        let lastName ='Mehrjoo';
        console.log(firstName)
        console.log(lastName)

                // normal string
                // const result = firstName + ' family name is ' + lastName;  

                // template string
        const result = `${firstName} family name is ${lastName}` ;       // newer and better method
        console.log(result)

console.log('............2');
        // 2.Constants: We cannot assign a constant, but we can always change its properties.

                // moteghayer: let is a variable
        let interestRateM = 0.3;
        interestRateM = 1;
        console.log(interestRateM)

                // Sabet: Instead of a variable, we use a constant 
        const interestRate = 0.3;
        console.log(interestRate)

console.log('............3');
        // 3.Primitive or Value Types: String, Number, Boolean, undefined, null (*data type)

        let Name ='Noj'; // String Literal
                // Without console is in console of browser invisibel
        let age = 30; // Number Literal
        console.log(age);
        let isApproved = true; // Boolean Literal (Can be true or false)
        console.log(isApproved);
        let selectedShape = undefined; // Is not very common
        console.log(selectedShape);
        let selectedForms = null; // We use null in situations where we want to clear the value of a variable
        console.log(selectedForms);

console.log('............5');
        // 4.Dynamic Typing: You can search [typeof] each  Variable in console of browser.

                // (Reference Types: Object, Array, Function) (*data type)
        // 5.Objects 

        let hight = 165;
        let weight = 52;
        console.log(hight)
        console.log(weight)

                // When we have some related variables (above), we can put them inside of an object (below). it makes our code cleaner.

        let size = {
                hight: 165,
                weight: 52
        };
        console.log(size)

                //how to change a property in object:
                // Dot "." Notation  *cleaner and easier
        size.weight = 53
        console.log(size.weight)

                // Bracket "[]" Notaition *If you achive the data later...
        size['weight'] = 51
        console.log(size.weight)

        const person = {
                name: ' mahtab',
                age: 37 ,
                gender: 'female',
                address: {              // Is an object
                        country: 'Germany',
                        city: 'Dortmund'
                },
                hobbies: ['coding', 'learning'] // Is an Array
                
        };
        person.email = 'mahtab@gmail.com'
        console.log(person);
        console.log(person.age);

console.log('............6');
        // 6.Arrays: is a data steucture, that we use to represent a list of items.
        const selectedColors = ['purple', 'blue'];
        selectedColors[2] = 'green';    // You can expand the lenght of an Array      
        selectedColors[3] = 23;         //* New item should not be the same type of other items. e.g. The fourth one can be a number instead of a String

        console.log(selectedColors);


                // مثال فروشگاه 

                const title = "Book"; 
                const price = 50;
                const exists = true;

                const product = ['Book', 50, true]
                // * const رو نمیشه دوباره تعریف کرد، ولی میتوان مقدار خانه های آن رو کم و زیاد کرد   

                console.log(product)

console.log('............7');
        // 7.Functions: Is a set of statements that performs a task or calculates a value.
        // * مهم نیست که تابع کجا تعریف شده، مهم اینه که کجا صدا زاده بشه.
        // 8.Types of Functions: performs a task or calculates a value

                //These two functions are performing a task: فقط ورودی دارد  

        function sayHello(){    // This function has no parameter.
                console.log(' Hello World');
        }        
        sayHello();

        function greet (name, familyName) {     // * name is a parameter of the greet function: Parameter is what we have at the time of declaration
           // console.log('Hello '+ name + ' ' + familyName)    
            console.log(`Hello ${name} ${familyName}`)
        }
        greet('Nojan', 'Bakhtiarian');  // * e.g. Nojan is an argument of the greet function: Argument is the actual value of supply for that prameter.
        greet('Mahtab', 'Mehrjoo');

                // * difference between a parameter and an argument *
        
        
                //This function is calculating a value: ورودی و خروجی دارد 

        function square(number) {
                return number * number;
        }
        square(2);
        console.log(square(2)); // * We have 2 function calls in this code. * Where we have () represent a function.
                                // square of 2, is one function call
                                // console.log is also another function call


                // function sayWelcome () {
                        //         let txt = `Welcome ${esm}`;
                //         console.log(txt);
                // }
                // let esm = prompt('Pleas enter your name');
                // sayWelcome();

// ....... Operators: 
console.log('............2');
        // 1.JavaScript Operators: We use operators along with our variables and constants to create expressions...
        // 2.Arithmetic Operators: Use to performe calculations.

        let x = 10;
        let y = 3;

        console.log(x+y); // edition operator
        console.log(x-y); // subtraction operator
        console.log(x*y); // multiplication operator
        console.log(x/y); // division operator
        console.log(x%y); // remainder of division operator
        console.log(x**y); // exponentiation operator (tavan)


                // Increment (++)

        console.log(x++); // first showed 10, then will be +1
        console.log(x);   // to see 11 we should do another consol.log of x.

        console.log(++x); // first 10+1, therefor showd 11. ** In this case showed 12, because of last consoles frist x=11. 



                // Decrement (--)
        console.log(x--); // first showed 12, then will be -1
        console.log(x);   // showed 11
        console.log(--x); // 11-1=10

console.log('............3');
        // 3. Assignment Operators: =

        x = x + 13;     // better way to write it: x += 5;
        console.log(x)

        let z=10;
        z += 13;
        console.log(z); // that's exactly like z = z + 13;

console.log('............4');
        // 4. Comparison Operators: The result of an expression, that includes a comparison operator is a bpplean, it's true or false.
        let w=1;

                // Relational 
        console.log(w > 0);
        console.log(w >= 1);
        console.log(w < 1);
        console.log(w <= 1);

                // Equality
        console.log (w === 1); // if w is equal to 1
        console.log(w !== 1); // if w is not equal to 1

console.log('............5');
        // 5. Equality Operators:

                // Strict Equality ( the same Type + Value)
        console.log(1 === 1); // number, 1 = number, 1 > true
        console.log('1' === 1); // string, 1 = number, 1 > fals

                // lose Equality: It will automatically convert type of what we have on the right side. ( the same Value)
        console.log(1 == 1);
        console.log('1' == 1); // ('1' == '1')


console.log('............6');
        // 6. Ternary (conditional) Operators:

                // let _ = _ ? _ : _ ;
        let athenticated = true ;
        let buttonText = athenticated === true ? 'dashboard' : 'login';
        console.log(buttonText);

                // We want to implement this rule:
                // If a customer has more than 100 points, they are a 'gold' customer, otherwise, they are a silver customer.  
        let points = 110;
        let type = (points > 100) ? 'gold' : 'silver';
                // If this expression the value (points > 100), is to true (?) set type to gold ('gold'). Otherwise if it's fals (:) srt to silver ('silver')
       
        console.log(type)

console.log('............7');
        // 7. Logical Operators:

                // Logical AND (&&): Returns TRUE if both operands are TRUE

        let productCount = 3;
        let productPrice = 100;
        let credit = 130;
        let allowedToBuy = productCount > 0 && productPrice <=credit;
        console.log(`allowed to buy: ${allowedToBuy}`);


                // Logical OR (||): Returns TRUE if at least one of the operands is TRUE

        let highIncome = false;
        let goodCreditScore = true;
        let eligibleForLoan = highIncome || goodCreditScore;
        console.log(`eligible for loan: ${eligibleForLoan}`);
        

                // NOT Operator (!)

        let applicationRefused = !eligibleForLoan;
        console.log(`application refused: ${applicationRefused}`);

console.log('............8');
        // 8. Logical Operators with non-booleans:

                // Falsy (not boolean false):
                // undefined
                // null
                // 0
                // false
                // ''
                // NaN (not a number)

                //Any thing that is not FALSY -> Truthy

        console.log(false || true);

        console.log(false || 'mahtab');

        console.log(false || 1);

        console.log(false || 0 || 'nojan' || 'mahtab' || true || 1); 
                // Short-circuiting: will show first TRUTHY (true) that be fined.

                // پیدا بکنه  true تلاش میکنه ||  
        console.log(true || 'mahtab'); // true or truthy -> true
        console.log(true || 0); // true or falsy -> true 
        console.log(false || 0); // false or falsy -> falsy: 0 

                // پیدا بکنه  false تلاش میکنه &&  
        console.log(true && 'mahtab'); // true & truthy -> truthy: mahtab 
        console.log(false && 'mahtab'); // false & truthy -> false 
        console.log(true && 0); // true & falsy -> falsy: 0
        console.log(false && 0); // false & falsy -> false

        let userColor = 'red';
        let defaultColor = 'white';
        let currentColor = userColor || defaultColor;
        console.log(currentColor);

        let userNumber = undefined;
        let defaultNumber = 23;
        let currentNumber = userNumber || defaultNumber;
        console.log(currentNumber);

console.log('............9');
        // 9. Bitwise Operators

                // 1, 2, 3, 4, .... = Decimal system
                // 00000001, 00000000 = Binary format (0 and 1) 

                // 1 = 00000001
                // 2 = 00000010

        console.log (1 | 2);    // Bitwise OR : | 
                                // result = 3 -> Compare 1 and 2 binary, if one of bits is 1 , show 1 -> 0000011 (=3) 


        console.log (1 & 2);    // Bitwise AND : & 
                                // result = 0 -> Compare 1 and 2 binary, if both of bits is 1 , show 1 -> 0000000 (=0)


                // Real e.g. : We want to implement an access control system....
                // Read permission = 00000100 (= 4)
                // Write permission = 00000010 (= 2)
                // Execute permission = 00000001 (= 1)
                // We can use one byte (8 bits), to determine user permission...

        const readPermission = 4;
        const writePermission = 2;
        const executePermission = 1;
        let myPermission = 0;
        myPermission = myPermission | readPermission | writePermission // We can ADD permission with Bitwise OR
        console.log(`my permission: ${myPermission}`)

        let message = myPermission & readPermission ? 'yes' : 'no'; // We can Check a permission with Bitwise And 
        console.log(message);

        message = myPermission & executePermission ? 'yes' : 'no'; // We can Check a permission with Bitwise And 
        console.log(message);

console.log('............10');
        // 10. Operators Precedence: ( )
        
        console.log(2+3*4); // -> a. 3*4=12     b. 12+2= 14

        console.log((2+3)*4); // ->a. 2+3=5     b. 5*4=20 

console.log('............12');
        // 12. Swaping Variables: 

        let n = 'red';
        let m = 'blue';

        let h = n;
        n = m;
        m = h;

        console.log(n);
        console.log(m);

// ....... Control Flow
console.log('............1');
        // 1. If....else
        
        // If the hour is between 6am and 12pm: Good morning!
        // If the hour is between 12pm and 6pm: Good afternoon!
        // Otherwise: Good evening!


        /* if (codition) { // If we have multiple statements, we need to put them between {}
                statement   
        }
        else if (anotherCondition) { // If we have multiple statements, we need to put them between {}
                statement   
        }
        else
         statement */


         let hour = 13;

         if (hour >= 6 && hour < 12)
         console.log('Good morning');
         else if (hour >= 12 && hour < 18)
         console.log ('Good afternoon');
         else if (hour >= 18 && hour <24)
         console.log ('Good evening');
         else
         console.log ('Sleep good');


         const grade = 17;

         if (grade >= 18)
         console.log ('great!');
        else if (grade >= 16)
        console.log ('good!');
        else if (grade >= 14)
        console.log ('not bad!')
        else if (grade >= 10)
        console.log ('pass!')
        else
        console.log ('faile!');

console.log('............2');
        // 2. Switch...case   * If ... else is cleaner!!!!

        /* switch (variable) {
                case '...': 
                console.log('...');
                break;

                default: 
                console.log('....');
        } */

        let role = 'moderator';
        switch (role) {
                case 'guest':
                        console.log('Guest User');
                        break;
                
                case 'moderator':
                        console.log('Moderator User');
                        break;

                default:
                        console.log('Unknown User');
        }
        

        if (role === 'guest') console.log ('Guest User');

        else if (role === 'moderator') console.log('Moderator User');

        else console.log('Unknown User');

console.log('............3');
        // 3. For Loop: to repeat an action a number of time

        // for (initialExpretion; condition; incrementExpression)
        // statment { // If we have multiple statements, we need to put them between {}

        for (let i = 0; i < 5; i++) // i: short for index -> loop variable
        console.log ('Hello World');

        // We want to display the odd numbers between 1 to 5:
        
        for (let i = 1; i <= 5; i++) {
                if (i % 2 !== 0)  console.log (i);
        }

console.log('............4');
        // 4. While Loop: to repeat an action a number of time          
        
        /* let= initialExpretion; 
           while (condition) {
           statment
           incrementExpression;
        } */
        
        let i = 0;
        while (i < 5) {
                if (i % 2 !== 0)  console.log (i);
                i++;
        }

console.log('............7');
        // 5. Do...while Loop: to repeat an action a number of time     

        /* let i = 0;
        do {
                if (i % 2 !== 0)  console.log (i);
                i++;
        } while (i < 5);  */
      
        

        // 6. Infinite Loops: وقتی به اشتباه طوری نوشته شود که همیشه درست باشد و مدام اجرا شود 

        // e.g.          فراموش شده، بینهایت اجرا میشه i++ چون 

        // for (let i = 1; i <= 5; ) {  if (i % 2 !== 0)  console.log (i); }



        // 7. For ... in Loop: to iterate over (display) all the properties / items of an object or array. 
                //* for Arrays -> for...of is better 

                // Object (key and value)
        const member = {
                name: 'Mahtab',
                age: 30
        };

        for (let key in member){           
                console.log(key);       // استفاده شده رو نمایش میده member کلیدهایی که در ابجکت 
                console.log(member[key]); // استفاده شده رو نمایش میده member کلیدهایی که در ابجکت  (value) محتوا    
        }

                // Array with for ... in         
        const forms = ['Square', 'Circle', 'Triangle'];

        for (let index in forms){        
                console.log(index);
                console.log(forms[index]);      // -> for ... of is better
        }

                // Array with for (like for...in)       
        for (let index = 0; index <= forms.length; index++){   
                let indexWithFor = index;
                let element = forms [index];
                console.log(indexWithFor);
                console.log(element);   // -> for ... of is better
        }

console.log('............8');
        // 8. For ... of: To iterate over the elements of an array.(Just for Array or maps)

        for (let form of forms) {
                console.log (form);
        }

        for (let num of 'mahtab') {     // show each part
                console.log(num);
        }

console.log('............9');
        // 9. Break and Continue: They are 2 keywords that can change how a loop behaves. * not commen
                // Break: کلا عملیات رو قطع میکنه 
                // Continue: بخش اجرا (تکرار ) نمیکنه
        
        for (counter = 0; counter < 10; counter++) {
                if (counter===7){       // Don't show 7,8,9
                        break;
                }
                else if (counter===2){  // Don't show 2
                        continue;
                }

                console.log(counter);
        }

        
console.log('............13');  
        // 13. Math.floor(): گرد کردن عدد به سمته پایین : 1 <-- 1.3 

        console.log(Math.floor(2.3));
        


// ....... Objects: 
console.log('............1');        
        // 1. Basics 
                // Object-oriented Programming (OOP): The function in an object called 'method'


        const circle = {                // The value in an Object can be any type in jS:
                radius: 1,              // number
                location: {             // another object
                        x: 1,           
                        y: 1            
                },                      
                isVisible: true,        // boolean
                draw: function () {     // function
                        console.log ('draw')
                }
        };

        circle.draw();                  // Method        

                        
console.log('............2');
        // 2. Factory Functions --> It produces objects: to avoid duplicating an object

        function createCircle(radius) {         // Add radius as a prameter here: To avoid hard coding
                return {                        // Don't need to circle constant
                        radius,                 // if our key and value are the same, remove the value.
                        draw () {               // = draw: function ()...
                                console.log ('draw');
                        }
                }; 
        }

                // We can call the function to create a Circle
        const circle1Factory = createCircle(1);
        console.log(circle1Factory);

        const circle2Factory = createCircle(2);
        console.log(circle2Factory);


console.log('............3');
        // 3. Constructor Functions --> Just like factory fanction, it produces an object. 
           // i.e. the job of this function is to create an object.
        
           // The name method: Pascal Notation  --> OneTowThree

        function Circle (radius) {
                this.radius = radius;
                this.draw = function (){
                        console.log ('draw');
                }
        }
        
        const circleConstructor = new Circle(3);
        console.log(circleConstructor);


console.log('............4');
        // 4. Dynamic Nature of Objects: We can add or delete properties and methods to an object.

        const myCircle = {
                radius: 4
        };

        myCircle.color = 'green';       // Add new property

        myCircle.draw = function () {
                console.log('draw');
        };

        console.log(myCircle);

        delete myCircle.draw;
        console.log(myCircle);

console.log('............5');
        // 5. Constructor Property: Every objects has a constructor property, that
                // references the function that was used to create that object.

                // If you use object literal syntax (let = x{}) or factory function to create an object:
                // It is a bilt in constructor object in jS....

                // new String('mah'); = 'mah';
                // new Number(); = 1;

                let anotherWayToMakeObject = new Object();
                console.log(anotherWayToMakeObject);



console.log('............8');

        // 6. In jS Functions are Objects 

        Circle.call({}, 3);         // = const circleConstructor = new Circle(3);

        Circle.apply({},[]);         // = write the arguments of an object in an array.


        // 7. Value (primitives) vs. Reference Type:

                        // Primitives (value types) are copied by their value.
                        // Objects (reference types) are copied by their reference.


        // 8. Enumerating Properties of an Object

        for (let key in myCircle) {                   // The simplest way
                console.log(key);                               // Shows keys 
                console.log(myCircle[key]);                     // Shows value of keys
        }


        const myCircleKeys = Object.keys(myCircle);   //  Object.keys() method
        console.log(myCircleKeys);                    // It get all the keys in object and returns as a string array

        for (let key of Object.keys(myCircle)) {     // For using 'for of' loop on an object we shuold use this method: Object.keys() 
                console.log(key);                    // ** Object is a constructor & .keys one of it's methods
        }                                            



        for (let entry of Object.entries(myCircle)) {  // Returns each key value pair as an Array:  Object.entries()
                console.log(entry);                    // First element is key, second is it's value
        }

                // in operator
        if ( 'radius' in myCircle) {        // To see if an object has a given property or method
                console.log('yes');
        }
        
        console.log('radius' in myCircle);  // To see if an object has a given property or method

console.log('............9');
        // 9. Cloning an Object: ** New object is independent of source object

                // Object.assign method : It takes all the properties in and methods from source object and copies them in to new object.

        const myObjectNewWithAssign = Object.assign({}, myCircle);    // {} Can be an empty object or an existing object (can have properties)
                                                                                // ,  Can pass 1 or more source objects    
        console.log(myObjectNewWithAssign);   
        
        
                // Spread operator: Simler and more elegant way to clone an object
                // It takes all the properties and methods in source object.    {...}

        const myObjectNewWithSpread = { ...myCircle };   // You can have another properties,too: { location: 1 , ...myCircle , draw (){} }
        console.log(myObjectNewWithSpread);
        
        // ** New object is independent of source object

        delete myCircle.color;
        console.log(myCircle);


console.log('............11');

        // 10. Garbage Collection : We don't need to allocate (تخصیص دادن) or reallocate memory to an object, it happens automatically.

        // 11. Math (bilt-in Object) : It hase many metoths, e.g.: Math.random

        console.log(Math.PI);

        console.log(Math.round(2.3));

        console.log(Math.max(1,2,3,4,5));

        console.log(Math.min(1,2,3,4,5));

                // To getting a random number between tow values
        function getRandomArbitrary(min,max) {  
                return Math.random() * (max - min) + min;       // Math.random() : It gives an output between 0 and 1
        }
        console.log(getRandomArbitrary(2,3));
        


console.log('............12');
        // 12. String (bilt-in Object) ** They don't change the main string, just console new edite

                // In jS we have two keind of string:
                        // String primitive
                        // String object : When we use the dot notation with a string primitive
                                        // jS engine internally wraps this with string object.
        

        const stringMessage = 'This is my first message';

        console.log(stringMessage.length);      // Maybe in case you want to put a limit

        console.log(stringMessage[1]);

        console.log(stringMessage.includes ('is'));

        console.log(stringMessage.startsWith('this'));  // It's sensible to Uppercase

        console.log(stringMessage.indexOf('my'));

        console.log(stringMessage.replace('first','second'));

        console.log(stringMessage.toUpperCase);

                // stringMessage.trim : delete white spce before or after string. ('   This is') --> ('This is')



                // Escape notation 

                        // \'   to add '' in a string
                        // \n   to start from a new line
        const escapeNotationMessage = 'This is\n my \'first\' message'   // = 'This is my 'first' message
        
        console.log(escapeNotationMessage);
        
        console.log(escapeNotationMessage.split(' '));  // An array of items, that each item is a word in massage
                                                        // We add space between '', because the words are with space from each other separated.
                                                        
console.log('............13');
        // 13. Template Literals : ``   
            // Object Literals: {}
            // Boolean Literals: true, false
            // String Literals: '',"", 

        const templateMessage = `This is 
my 'first' message`;

        console.log(templateMessage);


        // --> Very useful if you want to send out email message in your app:

        const userName = 'Nojan';

        const emailMessageWithTemplate = 
`Hi ${userName},

Thank you for joining my mailing list.

Regards,
Mahtab`;

        console.log(emailMessageWithTemplate);


console.log('............14');
        // 14. Date (bilt-in Object) 

        const dateNow = new Date();  // empty () shows now date
        console.log(dateNow);
        console.log(dateNow.toDateString());    // .toDateString method
        console.log(dateNow.toTimeString());    // .toTimeString method
        console.log(dateNow.toISOString());     // Commonly use in web or mobile app
        

        const date1 = new Date('February 02 2024 21:50');
        console.log(date1);
        console.log(date1.toDateString());   


        const date2 = new Date(2024, 1, 2, 21);      // (year, month, day, hour, minute) --> * month start with 0 = January

                // .get and .set methods

        date2.setFullYear(2025);
        console.log(date2);

        console.log(dateNow.getDate());         // Which day of month
        console.log(dateNow.getDay());          // Which day of week


        
        // ....... Arrays
        
console.log('............2');
        // 2. Adding Elements

        const magicNumbers = [2,2,3,3];

                // Middle
        magicNumbers.splice(1, 0, '23'); // *(1) start-position index, (0) how many items delete, ('23'): what should be add
       
                // End
        magicNumbers.push(4);

                // Beginning
        magicNumbers.unshift(1);  

        console.log(magicNumbers);
        
        
console.log('............6');
        // 6. Removing Elements
        
                // Middle
        magicNumbers.splice(2,1); // *(2) start-position index, (1) how many items delete
       
                // End
        magicNumbers.pop();

                // Beginning
        magicNumbers.shift();  

        console.log(magicNumbers);
     


console.log('............3');
        // 3. Finding Elements (Primitives)     * As a scond parameter you can set from which index should start searching 

                // includes : to see if a given element exists in an array
        console.log(magicNumbers.includes('23'));       // If doesn't exist return false

                // indexOf
        console.log(magicNumbers.indexOf(23));          // If doesn't exist return -1
        console.log(magicNumbers.indexOf(4));

                // lastIndexOf
        console.log(magicNumbers.lastIndexOf(3));       // Index of last searched element (if we have more than one)


console.log('............4');
        // 4. Finding Elements (Reference Types)
        
        const courses = [
                {id: 1, name: 'a'},
                {id: 2, name: 'b'},
        ];
        
                // find : The find() method returns the value of the first element in the array that passes a test.
        
        const course = courses.find(function(course){          // (function(){}) : called a Predicate or callback function (بی نام )
                return course.name === 'a';
        })      
        console.log(course);                           // If doesn't exist return undefined
        
        
        // find index
        const courseIndex = courses.findIndex(function(course){          
                return course.name === 'a';
        });      
        console.log(courseIndex);                      // If doesn't exist return -1
        
        
        
console.log('............5');
        // 5. Arrow Functions : To pass a function as a Predicate(callback function) or argument for a different method or (بی نام ), you can use it !
        
        // test.find(function(x){return y});         
        
        // test.find((x) => {return y});         // 1. Remove function keyword, add =>
        
        // test.find(x => {return y});           // 2. If only one parameter, can skip the parentheses
        
        // test.find(x => y) ;                   // 3. If the function has only one statement, and the statement returns a value, can remove the brackets and the return keyword
        
        // test.find(() => y);                   // * 2. If don't have any parameters,  must pass ()

               
        const courseWithArrowFanction = courses.find(course => course.name === 'a');      
        console.log(courseWithArrowFanction);                           
        
    

console.log('............7');
        // 7. Emptying an Array : Remove all the elements in an array
        
        // Solution 1 
        let empty1 = [1,2,3,4];         // Doesn't work if the array is const 
        let anotherEmpty1 = empty1;     // If another variable points to the same object, it doesn't change =
        
        empty1 = [];                            // It points to a new object in memory
        
        console.log(empty1);
        console.log(anotherEmpty1);     // = Other references to the original array doesn't change.
        
        // Solution 2   
        const empty2 = [1,2,3,4];
        let anotherEmpty2 = empty2;
                
        empty2.length = 0;                      // Best solution
        
                console.log(empty2);
                console.log(anotherEmpty2);     // It does't matter how many references you have to the original array
                
                
                
console.log('............8');                       
        // 8. Combining and Slicing Arrays 
        
        const first = [0,1,2];
        const second = [3,4,5];
        
                // Combining: concat() method > array1.concat(array2);
        const combined = first.concat(second);
        console.log(combined);
        
                // Slicing: slice() method > array.slice(start index, end index);
        const slice = combined.slice(2,4);      // It start from index 2 (include) and finish before index 4 (doesn't include)
        console.log(slice);

        // const slice = combined.slice(2);     // array.slice (start index) : Slice from start index until end of array
        
        // const slice = combined.slice();      // array.slice () : If a empty () make a copy from array

        
        first[2] = 23;                          // ** If you change an element of original array
        console.log(first);                     // new concat / slice array won't be changed (Primitive)
        
        
        
                // اگر یکی از المان های آرایه آبجکت باشه، مقدار آن در آرایه جدید کپی نمیشه بلکه آدرسش کپی شده.
                // یعنی اگر در آن آبجکت چیزی تغیر بکند، آرایه جدید هم تغیر میکند

        const firstReference = [{id: 1}];
        
        const combinedReference = firstReference.concat(second);
        console.log(combinedReference);
        
        
        firstReference[0].id = 23;               // ** If you change the value of a property of original array
        console.log(firstReference);             // new concat / slice array will be changed (Reference)


console.log('............9');
        // 9. Spread Operator : a better method to combine array
        
        let newComined = [...first, ...second];                 // = first.concat(second)
        newComined = ['a', ...first, 'b', ...second, 'c'];      // We can easily add other elements at the end, start or between 
        
        console.log(newComined);
        
        const copy = [...newComined];                           // = newComined.slice();
        console.log(copy);


console.log('............10');                                
        // 10. iterating an Array 

        for (const number of magicNumbers) {                    // iterate over the elements of an array
                // console.log(number);
        }

        // magicNumbers.forEach(function(number) {console.log(number);});
        magicNumbers.forEach(number => console.log(number));    // iterate over the elements of an array
        magicNumbers.forEach((number, index) => console.log(number, index));    // V2. Show index (like for in)


console.log('............11');                              
        // 11. Joining Arrays : Join elements in an array and returns a string

        console.log(magicNumbers.join('-'));    // Optional: What should be used as a separator.  e.g ('-')

                // Building a URL slug:   
        const messageString = 'How to make URL slug';           // Split method: part of strings
        const splitMessage = messageString.split(' ');          // According to (' ') seprate the parts
        console.log(splitMessage);                              // Split a string and retuns as an array

        console.log(splitMessage.join('-'));


console.log('............12');                              
        // 12. Sorting Arrays   *This method change Original Array 

        const numberSorting = [3,23,5,4];
        console.log(numberSorting);

                // Primitive (numbers & string)
        numberSorting.sort((x, y) => x-y);
        console.log(numberSorting);

        numberSorting.reverse()         // reverse
        console.log(numberSorting);

                // reference (object)
        const objectSorting = [
                { id: 1, name: 'nojan' },
                { id: 2, name: 'Mahtab' },
        ]
        
        objectSorting.sort((a,b) => {
                // a < b => -1
                // a > b => 1
                // a === b => 0
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {return -1};
                if (nameA > nameB) {return 1};
                return 0;
        });

        
        console.log(objectSorting);


console.log('............13');                                
        // 13. Testing the Elemnts of an Arrays

                // every
        const allPosetive = magicNumbers.every(value => value >= 0);    // = (function(value) {return value >= 0;})
        console.log(allPosetive);   
        
        
                // some
        const atLeastOneNegative = magicNumbers.some(value => value < 0);    // = (function(value) {return value < 0;})
        console.log(atLeastOneNegative);   


console.log('............14');                               
        // 14. Filtering an Array : return a new array

        const filtered = magicNumbers.filter(number => number % 2 !== 0);
        console.log(filtered);


        const users = [
                { name : 'Ali', age : 18 },
                { name : 'Amir', age : 14 },
                { name : 'Laleh', age : 21 },
                { name : 'Sara', age : 17 },
                { name : 'Gol', age : 23 },
        ]
        const older18 = users.filter(user => user.age >= 18);
        console.log(older18);

        const userPoints = [1, 9, -3, 6, 0];

        console.log(userPoints.filter( n => n>=0 ));



console.log('............15');                               
        // 15. Mapping Array : We can map each element in an Array into something else and return a new array
                            // .map     [2,4,6] > *2 > [4,8,12] تغیرات روی تک تک المان ها اعمال شده و آرایه تبدیل به یک آرایه جدید میشود 
                            // .forEach [2,4,6] > *2 > 4,8,12   تغییرات روی تک تک المان ها اعمال شده و المان ها رو به صورت جدا از هم نمایش میده
                            // .map     [2,4,6] > ['2'.'4','6'] میتوان هر تغییری روی تک تک المان ها داد. مثلا تبدیل عدد به رشته 

        const mapNumbers = [2,4,6];
        console.log(mapNumbers.map (n => n*2));

                 // e.g. Construct some html markup, using the elements (values) in an array 

        const coursesMap = ['html', 'css', 'jS'];       // array with the names of courses 
        console.log(coursesMap);

                // 1. Make a new Array: Map each course to a list (a html markup): <li> </li>
        const htmlListArray = coursesMap.map(course => `<li>${course}</li>`);     // ``= '<li>' + course + '</li>'
        console.log(htmlListArray);

                // 2. Create a String: Join the elements of new array
        const htmlList = htmlListArray.join('');  // Use an empty Character as a separator to avoid ',' in html markup
        console.log(htmlList);

                // 3. Add 'ul' element to complete html markup
        const htmlMarkup = `<ul>${htmlList}</ul>`;      // = '<ul>' + htmlList + '</ul>'
        console.log(htmlMarkup);
        
        // Chain : We can chain different methods together
        const html =
        '<ul>' +                                                // 3
        coursesMap
                .map(course => `<li>${course}</li>`)            // 1
                .join('')                                       // 2
        + '</ul>';                                              // 3
        console.log(html);

        
                // e.g. Map each element to an object
                              // = coursesMap.map (course => {const obj = {value: course}; return obj;});
                              // = coursesMap.map (course => {return {value: course};});
                              // = coursesMap.map (course => {value: course});        * It will not work. 
        const coursesMapToObject = coursesMap.map (course => ({value: course}));   // * If we return an object, should put the object in ()
        console.log(coursesMapToObject);

                // map Objects to String
        console.log(coursesMapToObject.map(obj => obj.value));


                // chain : We can chain different methods together (*methods, that don't change Original Array)
        const numberChain = [1,5,23,-5,-9,0,3];

        const resultChain = 
        numberChain
                .filter( n => n >= 0)                   // [ 1, 5, 23, 0, 3 ]
                .map( n => ({value: n}))                // Object { value: 1 }, ..., Object { value: 23 }, ..., Object { value: 3 }
                .filter( obj => obj.value < 10)         // Object { value: 1 }, ..., ..., Object { value: 3 }
                .map(obj => obj.value)                  // [ 1, 5, 0, 3 ] * map each object to a number
                .sort();                                // [ 0, 1, 3, 5 ]
        
        console.log(resultChain);
        


console.log('............16');                               
        // 16. Reducing an Array : Reduce all the elements in an array into a single value.
                                // That singel value can be a number, string, object, ...

                // Reduce method has two arguments: The first one is a callback function, the second one is the initial value for the accumulator
                // = ....reduce((accumulator, currentValue) => {}, second argument)     // accumulator is like 'sum' in old method
                // We can exclude the initialization of the accumulator ( no second argument ) => accumulator will be set to the first element

                        // ** Any time you have an array of values and
                        // you want to get a single value
                        // as a result of iterating that array,
                        // think of the reduce method.**

                // Calculating the total cost of all items in a shopping cart (calculate the sum of all numbers in array)
                // = Reduce all the elemnts into a single number (sum of all numbers in array)

        const shoppingCard = [10,11,23,8,16];

                // old method
        let sumOld = 0;
        for (const price of shoppingCard) { sumOld += price };

        console.log(sumOld);

        
                // more elegent way        

        const sum = shoppingCard.reduce(
                (accumulator, currentValue) => accumulator + currentValue
                );   

        console.log(sum);

                // a = accumulator      c = currentValue
                // a = 10, c = 11 => 10+11 = 21 (new a)              
                // a = 21, c = 23 => 21+23 = 44 (new a)          
                // a = 44, c = 8  => 44+8 = 52  (new a)          
                // a = 52, c = 16 => 52+16 = 68 (new a) 



console.log('............20');
        // 20. To display errors on console, we use 'console.error' method.

        console.error('Invalide offset.');




// ....... Objects
console.log('............1');
        // 1. Function Declaration vs Expressions

                // Function Declaration
        function walk() {
                console.log('walk');
        }       //  don't put ; 
        walk();

                // Function Expressions
                        // Anonymous Function Expressions
        let run = function () {         // The function has no name       
                console.log('run');
        };      // Shuld put ;  -> like let x =1;
        run();

                        // Named Function Expressions
        let runNamed = function walk () {};     // The function has a name


console.log('............2');
        // 2. Hoisting
                        // When jS engine executes a code, it moves all the function declarations to the top.
                        // DE: einen Code ausführt, verschiebt nach oben.

console.log('............3');
        // 3. Arguments

        function sumDaynamic(a,b) {
                return a+b;
        }
        console.log(sumDaynamic (1, 2));
        console.log(sumDaynamic (1));  // a + b = 1 + undefined = NaN
        console.log(sumDaynamic ());   // undefined + undefined = NaN
        console.log(sumDaynamic (1, 2, 3, 4));  

                // Every function in jS has a special object aclled arguments.
        function sumArguments() {                        
                let total = 0;                          
                for (const value of arguments) {        // Use arguments object to have a Function
                        total += value                  // with a varying number of parameters
                }                                       // to work with all the arguments
                return total;                           // that are passed to this function
                // console.log(arguments);
        }
        console.log(sumArguments(1,2,3,4));



console.log('............4');
        // 4. The Rest Operator: ** Better method than arguments
        
                // When we apply the rest operator to a parameter of a function -> function learnRestOperator (...parameter) {}
                // we can pass a varying number of arguments -> learnRestOperator(argument1,arguments2,arguments3)   
                // and the rest operator will take all of them and put them in an array. -> [argument1,arguments2,arguments3]

        function sumRest(...numbers) {          // It looks like speard optator [...], that be used with arrays 
                return numbers.reduce ((a,b) => a + b);
                // console.log(numbers);        // This is an Array of some elements, in this case numbers!
        }                                      

        console.log(sumRest(1,2,3,4));
        
        // e.g. calculate the total costs of items in a shopping cart.
        function sumCart(discount, ...prices) {         // Rest operator should be last parameter in a function
                const total = prices.reduce ((a,b) => a + b);
                return total * (1-discount);            // 0.1 = 10% (discount)
        }                                        

        console.log(sumCart(0.1, 20, 30));              



console.log('............5');
        // 5. Default Parameters: To supply deafult values to the parameters of a function 
                // e.g.: Calculating the total interest. (محاسبه سود کل)
        
        function interest (principal, rate = 18.5, years = 3) { // If set no argument to 
                // rate = rate || 18.5;                         // 'rate' and 'years' parameters
                // years = rate || 3;                           // the deafult value will be used
                return principal * rate / 100 * years;          
        } 
        
        console.log(interest (100));



console.log('............6');
        // 6. Getters und Setters: A method in objects
                // Getters -> ** to access properties **
                // Setters -> ** to change (mutate) properties **

                // We want to desplay student's full name.
        const student = {
                firstName: 'Mahtab',
                lastName: 'Mehrjoo',
                get fullName () {                               // ** Add 'get' at start -> It will be a getter **
                        return `${student.firstName} ${student.lastName}`  
                },                                              // With getter we can read the student's full name like a property
                set fullName (newValue) {                       // ** Add 'set' at start -> It needs a parameter **
                        const parts = newValue.split(' ');      // This will return an Array (divide the string from each space ' ')
                        this.firstName = parts[0];
                        this.lastName = parts[1];
                }                                               // With setter we can set it from the outside
        };
        
         console.log(student);       
        
        console.log(`${student.firstName} ${student.lastName}`);        // Solution 1 : We should repeat the code each time
        
        // console.log(student.fullName());     // Solution 2 : It's read only i.e. we can not set a new fullName from the outside
        
        console.log(student.fullName);          // Solution 3 : ** fullName will be like a property and not a function any more.**

        student.fullName = 'Nojan Bakhtiarian';
        console.log(student.fullName);          // Solution 3 : ** Read the new values form outsid and print new student's name.**
        console.log(student);


console.log('............7');
        // 7. Try and Catch

                // Defensive programming:
                // Make sure that the values that are coming in are valid and in the right shape.
                // And prevent that our code be stopped, because of a wrong argument ...
                // How:
                // 1. We need to add error handling -> at the beginning of function/method -> if (...) {}

                // 2. Reporting the error in our application:
                // ** Use the throw keyword, new operator and Error constructor function  -> throw new Error()
                        // We use the throw keyword -> to throw an exception.
                                // ERROR vs. EXEPTION: When we throw an error, we refer to that as an exception.
                                // An exeptional situation that should not have happened.  
                        // We use Error constructor function -> to create a new error object.
                        // We use the new operator to -> call Error function to create a new error object.

                // 3. Somewhere else we need to catch that exeption.
                        // Put (wrap) the line(s), where we receive an exeption in a try block -> try{}
                        // Add catch block affter try block -> catch(){}


        const stoppError= {
                firstName: 'Mahtab',
                lastName: 'Mehrjoo',
                get fullName () {                               
                        return `${stoppError.firstName} ${stoppError.lastName}`  
                },                                              
                set fullName (newValue) {
                        if (typeof newValue !== 'string') {     
                                throw new Error('Value is not a string');       // ** to make sure that this new value is a string.
                        }                         
                        const parts = newValue.split(' ');                      // beacuse split method is only available on a string
                        if (parts.length !== 2){
                                throw new Error('Enter a first and last name.');
                        }
                        this.firstName = parts[0];
                        this.lastName = parts[1];
                }                                               
        };

        stoppError.fullName = 'Aron Bakhtiarian';       // A valid & right argument -> the code will be executed.
        console.log(stoppError.fullName);
        
        try {
                stoppError.fullName = true;             
        }                 
        catch (e) {             // e is our error object that we are throwing above -> throw new Error (...)
                console.log(e);        
        }

        try {
                stoppError.fullName = '';
        }                 
        catch (e) {  
                console.log(e);            
                // alert(e);                       // Very old and poor way of reporting errors
        }



console.log('............10');
        // 10. The this Keyword
                        // This references the object that is executing the current function:
                        // a. If function is method (part of an object) -> this -> current onject
                        // b. If function is a regular function -> this -> global object (windows in browser)
                                // ** Callback functions are regular functions.
                                // i.e. They are not a method in an object
                        // c. If function is a constructor function -> this -> a new empty object {}


                // a. method -> obj        
        const thisObject = {            
                lable: 'a',
                method () {
                        console.log(this);      // this reference our object
                }
        };
        thisObject.method();                    

                // b. function -> global obj
        function thisGlobal() {
                console.log(this);
        }
        thisGlobal();                           // We get windows global object on the console

                // c. constructor function -> new empty obj {}
        function ThisConstructor() {
                console.log(this);      
        }
        const o = new ThisConstructor();        // We get a new empty object on the console {}


                // ** e.g.
                // forEach(first parameter = function, second parameter = an object
                        // pass any object you want
                        // and 'this' in first prameter (callback finctino)
                        // refrence to that object (second parameter)
        const article = {
                title: 'car',
                colors: ['blue', 'green', 'red'],
                showColors(){                                   
                        this.colors.forEach(function(color){    // this -> article
                                console.log(this.title, color); // If you don't set second parameter, this -> window object window
                                },                              // The hole function is first parameter
                                this)                           // this -> article      
                }       
        }
        article.showColors()




console.log('............11');
        // 11. Changing this

                // Solution 1: Using self approach -> 
                        // Define a constant -> call it 'self' or 'that' -> set it in to this
                        // Don't use -> Bad way
        const solution1 = {
                title: 'chainging this',
                numbers: [1],
                chaingingThis(){
                        const self= this;       // self is referencing the solution1 object                       
                        this.numbers.forEach(function(number){
                                console.log(self.title, number);
                        });
                }
        };

        solution1.chaingingThis()


                // Solution 2: Using the bind method
                                // With 'call' 'apply' 'bind' methods -> We can change the value of this
                                // The first parameter is thisArg -> We can pass an object and this reference that object.
                                // Difference between call and applay -> passing arguments
                          
                function callApplyBind(a,b) {
                        console.log(this, a, b);      // without the methods 'this' reference global object.
                }

                        // call method :                        
                callApplyBind.call({name: 'call method'}, 'argument1', 'argument2'); 
                
                        // apply method : We should pass arguments as an array
                callApplyBind.apply({name: 'apply method'}, ['argument1', 'argument2']); 

                        // bins method : ** It returns a new function
                                // THIS point ALWAYS to the 'object' that we passed hier as the first argument
                                // () -> To call the new function that is returned from bind method.  
                callApplyBind.bind({name: 'bind method'}, 'argument1', 'argument2')();     


        const solution2 = {
                title: 'chainging this',
                numbers: [2],
                chaingingThis(){
                        this.numbers.forEach(function(number){
                                console.log(this.title, number);        // without bind method 'this' reference global object.
                        }.bind(this));  // We call the bind method right after callback finction -> 
                }                       // and pass this (reference to main object)-> this.numbers.forEach(function(){}.bind(this)) 
        };

        solution2.chaingingThis()



                // Solution 3: Arrow Functions
                        // Arrow functions inherit 'this' from the containing function
                        // Best solution
        const solution3 = {
                title: 'chainging this',
                numbers: [3],
                chaingingThis(){
                        this.numbers.forEach(number => console.log(this.title, number));
                }
        };

        solution3.chaingingThis()



console.log('............12');
        // 12. Array.isArray() method : to detect if is an array
                // If we pass an array object -> get True
                // If we pass anything else -> get false


        console.log(Array.isArray([]));
        console.log(Array.isArray({}));