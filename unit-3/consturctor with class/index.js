// class person{
//     constructor(){
//         this.name="akki";
//     }
//     printMyName(){
//         console.log(this.name)
//     }
// }

// const Person = new person()

// console.log(Person.PrintMyName())


// -----------------------------------------

// class Human {
//     constructor(){
//         this.gender="male";
//     }
//     printGender(){
//         console.log(this.gender)
//     }
// }

// class person extends Human {
//     constructor(){
//         super()
//         this.name="akki";
//     }
//     PrintMyName(){
//         console.log(this.name)
//     }
// }

// const Person = new person()
// console.log(Person.PrintMyName())
// console.log(Person.printGender())



// ------------------------ES7 function=> works in es7/babel-----------------


// class Human {
//         gender="male";
    
//     printGender=()=>{
//         console.log(this.gender)
//     }
// }

// class person extends Human {
  
//         super()
//        name="akki";
//        gender="female"
 
//     PrintMyName=()=>{
//         console.log(this.name)
//     }
// }

// const Person = new person()
// console.log(Person.PrintMyName())
// console.log(Person.printGender())


//destructuring in js
// const numbers=[1,2,3];
// [num1,num2]=numbers;
// console.log(num1,num2) =>  1 2


// const numbers=[1,2,3];
// [num1, ,num3]=numbers;
// console.log(num1,num3);  => 1 3