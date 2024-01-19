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



        // 2.Constants

                // moteghayer: let is a variable
        let interestRateM = 0.3;
        interestRateM = 1;
        console.log(interestRateM)

                // Sabet: Instead of a variable, we use a constant
        const interestRate = 0.3;
        console.log(interestRate)


        
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
        console.log(person)



        // 6.Arrays: is a data steucture, that we use to represent a list of items.
        const selectedColors = ['purple', 'blue'];
        selectedColors[2] = 'green';    // You can expand the lenght of an Array      
        selectedColors[3] = 23;         //* New item should not be the same type of other items. e.g. The fourth one can be a number instead of a String

        selectedColors.push('red');    // add new item at the end
        selectedColors.unshift('gold');  // add new item at the start
        selectedColors.pop(); // delete the last item

        const [firstColor] = selectedColors;
        console.log(selectedColors);
        console.log(firstColor);


                // مثال فروشگاه 

                const title = "Book"; 
                const price = 50;
                const exists = true;

                const product = ['Book', 50, true]
                // * const رو نمیشه دوباره تعریف کرد، ولی میتوان مقدار خانه های آن رو کم و زیاد کرد   

                console.log(product)


        // 7.Functions: Is a set of statements that performs a task or calculates a value.
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



        // ....... Operators: 

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


        // 3. Assignment Operators: =

        x = x + 13;     // better way to write it: x += 5;
        console.log(x)

        let z=10;
        z += 13;
        console.log(z); // that's exactly like z = z + 13;

        
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


        // 5. Equality Operators:

                // Strict Equality ( the same Type + Value)
        console.log(1 === 1); // number, 1 = number, 1 > true
        console.log('1' === 1); // string, 1 = number, 1 > fals

                // lose Equality: It will automatically convert type of what we have on the right side. ( the same Value)
        console.log(1 == 1);
        console.log('1' == 1); // ('1' == '1')



        // 6. Ternary (conditional) Operators:

                // let _ = _ ? _ : _ ;
        let athenticated = true ;
        let buttonText = athenticated === true ? 'dashboard' : 'login';
        console.log(buttonText);

                // We want to implement this rule:
                // If a customer has more than 100 points, they are a 'gold' customer, otherwise, they are a silver customer.  
        let points = 110;
        let type = points > 100 ? 'gold' : 'silver';
                // If this expression the value (points > 100), is to true (?) set type to gold ('gold'). Otherwise if it's fals (:) srt to silver ('silver')
       
        console.log(type)


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


        
        // 10. Operators Precedence: ( )
        
        console.log(2+3*4); // -> a. 3*4=12     b. 12+2= 14

        console.log((2+3)*4); // ->a. 2+3=5     b. 5*4=20 



        // 12. Swaping Variables: 

        let n = 'red';
        let m = 'blue';

        let h = n;
        n = m;
        m = h;

        console.log(n);
        console.log(m);




        // ....... Control Flow


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



        // 3. For Loop: to repeat an action a number of time

        // for (initialExpretion; condition; incrementExpression)
        // statment { // If we have multiple statements, we need to put them between {}

        for (let i = 0; i < 5; i++) // i: short for index -> loop variable
        console.log ('Hello World');

        // We want to display the odd numbers between 1 to 5:
        
        for (let i = 1; i <= 5; i++) {
                if (i % 2 !== 0)  console.log (i);
        }
      








                
        














