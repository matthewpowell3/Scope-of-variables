// Scope of variables

var a = 5;

document.write('<h1>' + a + '</h1>');

document.write('<h1>' + a + '</h1>');

// So a is a GLOBE variable it can be use anywhere in the script we can see

function myFun() {
  var y = 18;
  document.write('<h1>' + y + '</h1>');
}
// document.write('<h1>' + y + '</h1>');
// use can't call it from outside of the function
myFun();

// If we define a variable inside a function that variable is called a LOCAL variable cause it can't be used outside of the function

var Name = 'Matthew';

function Names() {
  document.write('Hello Welcome ' + Name);
}

Names();

// On the other hand you can use GLOBE variables inside of a function

function exception() {
  var1 = 200;
  // why the var1 is printed outside the function is because it's not using the var key word
}

exception();
document.write('<h1>' + var1 + '</h1>');

// any variable declared without the var keyword is a globe variable
