//Anonymous function means the function which have no any name
// we use to assign a function in variable
//Function expression
let a = function() {
    console.log("swam srivastava")
}
a();
// Why we use this ??  just to execute only at once , memory not wasted also.
//we can also use setTimeout(function name,time in ms)

//  Immediately invoked function


//we r going to just direct call the function 
(function() {
    console.log("hello");
})(); // it consume less RAM just to declare a variable in function if two programmer uses
// the same name as a var the using IIF it doesn't cause any trouble.