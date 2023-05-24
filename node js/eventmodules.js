const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('please turn off the motor!');
  setTimeout(()=>{
   console.log("ok turn off motor!")
  },3000)
});
// myEmitter.emit('event');

myEmitter.emit('waterfull');


console.log("the script is running")
//note package.json remove (type :module)