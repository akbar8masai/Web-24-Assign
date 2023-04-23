


// closure is related to functions


//nested function 
// there has to be dependency


function greet(){


    let n= "raj" //depend

    return function(){

      return function(){

        console.log(n); 

      }

        //depend
    }
}

//console.log(greet())


let x= greet()

let y= x()

y()




// ----------------------------------------------------


function flow(){


    let m= "luffy"

    return function(){

        console.log(m);
    }
}


let z= flow()

z()



// -----------------------------------------------

// debouncing
