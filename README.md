# js-bounty
For this bounty, I developed a simple banking website to demonstrate my understanding of JavaScript classes, switch statements, and try-catch-finally blocks. The BankAccount class represents a bank account with properties like accountNumber, balance, and accountHolder. It has methods to deposit, withdraw, and checkBalance. The index.html file contains a form to interact with a BankAccount object. The app.js file handles the form submission using a switch statement to call the appropriate BankAccount method. Try-catch-finally blocks are used to gracefully handle errors like insufficient funds. Overall this project shows how to use OOP concepts like classes in JavaScript as well as control flow tools like switch and exception handling with try-catch-finally. The full code is available on GitHub and instructions on using the app are in the README. This project highlights core intermediate JavaScript skills.
## Switch Statements

Switch statements allow you to perform different actions based on different conditions/cases. 

- Use the `switch` expression to evaluate and match with `case` clauses
- The `default` clause runs if no case matches
- More concise than long `if/else if` chains

```js
switch(num) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  default:
   console.log("Number not one or two");
}


Try-Catch-Finally
Try-catch-finally allows handling errors gracefully in JavaScript.

try block contains code that may cause an exception
catch block handles the exception if one occurs
finally block always executes after try/catch
catch clause specifies error object for debugging
js



try {
  nonExistentFunction(); 
} catch (error) {
  console.log(error);
} finally {
  console.log("Always executes"); 
}
Classes
Classes define reusable Object templates.

Use class keyword to define a class
constructor method initializes new instances
Class methods provide object functionality
Extend parent classes to reuse logic
js



class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}!`)
  }
}

let person1 = new Person("John");
person1.greet(); // Hello John!
