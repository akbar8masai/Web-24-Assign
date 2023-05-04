class Vehicle{
   constructor(t,r){
    this.type=t;
    this.regNumber=r;
   }
};


//same as car as vehicle
class Car extends Vehicle{
    constructor(t,r){
    //  this.type=t;
    //  this.regNumber=r;
    super(t,r)
    }
 };


//multiple types of vehicle (bike,car,bus)


// let v1 = new Vehicle("bike",'MH05 DJ 6827');
// console.log(v1)

let c1 = new Car("car",'MH05 DJ 6827');
console.log(c1)