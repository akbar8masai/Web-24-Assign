// objects-------------------------------


// var person ={
//     name: "jam",
//     myName : function (){
//         console.log(this) //this =person (owner objects)
//     }
// }
// //person.myName()

// function myName(){
//     console.log(this) //this =global object
// }
// myName()

// -----------------------------------------
// constructive function -> new and this.
// function Player(n,t){

// this.name=n,
// this.team=t

// }

// var myplayer = new Player("messi","naymar")

// console.log(myplayer)

// -------------------------------------------------------


// call,apply,bind
/*
var person ={
    name: "john",
    myName(m){
        this.age=m
    }
}

var person2 ={
    name:"akki"
}


function myName(m,c){
    console.log(this.name,m) //this =global object

    this.age=m
    this.city=c
}
myName.call(person2) // this =person2

myName.call(person,21,"pune") // this =person


*/


// call : u have to make invoke function with comma
//apply: u have to make invoke function with array
// i.e myName.apply(person,[21,"pune"])

// details of function
// bind :u have to make invoke function with
// var myBind =myName.bind(person2,21,"pune")
//console.log(myBind);-> give details of function
//myBind()=> main answer





