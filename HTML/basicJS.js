//#1 Basic Function
// function add(num1, num2){
//     let sum = num1 + num2;
//     return sum;
// }

// console.log(add(5,3));


// #2 Function Literal
// We save the function to a varible.
// let add = function(num1, num2){
//     let sum = num1 + num2;
//     console.log( 
//         sum);
// }(10,5);

// #3 Create an object with "this" keyword
let process = {
    fullName: "Weylin Douglas",
    displayName: function(){
        console.log(this.fullName)
    }
};
process.displayName();
console.log(process.fullName);

// object constructor
let Car = function(){
    let model, year;
};

bmw = new Car; //creates an instance of a new car
bmw.model = 'M3';
console.log(bmw.model);

mercedes = new Car; //creates an instance of a new car
mercedes.model = 'c250';
console.log(mercedes.model);

function Auto(){
    let model, year, runs;
    this.model = "Rav 4";
    this.runs = function(){
        console.log("The car runs fast");
    }

}

toyota= new Auto;
console.log(toyota.model);
console.log(toyota.runs());

