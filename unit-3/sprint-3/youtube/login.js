// what was the tool used before for authentication -> local storage
//1.signup-> store data
//2.login-> retreive and verify data
//3. verification logic? -> YOU

//two things for comparison

// 1. user input (username & pass)
//2. stored data on server (username & pass)

//oops -> object oriented program server //constructive function (without let const var) => class


class User{
 
  constructor(){
//   this.name =name

  }
   
  validateUsername(username){
   
    // if(username.includes('@')){
    //     return false
    // }else{
    //     return true
    // }

   return username.includes('@')? false: true;
    
  }
  validatePassword(password){
// if pass length is less than 8 , return false else true

  return password.length<8 ? false :true;
  }

  async signUP(n,e,u,p,m,d){


    //check if user is submitting valid username and pass 
    // u-> username and p-> password

    let isValidated = this.validateUsername(u) && this.validatePassword(p);
     if(isValidated){

        //good to store the data

        this.name =n
        this.email = e
        this.username = u
        this.password =p
        this.mobile =m
        this.description = d;
        // https://masai-api-mocker.herokuapp.com/auth/register'

      const register_api = 'https://masai-api-mocker.herokuapp.com/auth/register'
       
      const response = await fetch(register_api,{

      method:'POST',
      body: JSON.stringify(this),
      headers : {

        'content-Type' : 'application/json',
       },

      }) ;

      const data = await response.json()
     // console.log(data);

      //nature of fetch ?-> function
      //if its a function ,does it eat ?-> arguments
      //first argument -> URL
      // what the default request of fetch -> GET
      //give this data to server


      
     }

  }
 
  async Login(u,p){

    const login_data={
        username:u,
        password:p,
    };


  const login_api =`https://masai-api-mocker.herokuapp.com/auth/login`

  const response =await fetch(login_api,{
    method:'POST',
    body:JSON.stringify(login_data),

    headers:{

     'Content-Type':'application/json'

    }
  })

 const data =await response.json()
  return data

  }
 

}
let user = new User()

const Register =()=>{

    const reg_form = document.getElementById('reg_form')
   
    const name = reg_form.name.value
    const email = reg_form.email.value
    const username = reg_form.username.value
    const password =reg_form.password.value

    const mobile = reg_form.mobile.value;
    const description = reg_form.description.value;

  user.signUP(name,email,username,password,mobile,description)
  console.log(user);

}

const Login =async()=>{

    const username = document.getElementById('login-username').value
    const password = document.getElementById('login-password').value

 let { token } =await  user.Login(username,password)

   getProfile(username,token)

}


const getProfile =async(username,token)=>{


    let api_link = `https://masai-api-mocker.herokuapp.com/user/${username}`

    let response = await fetch(api_link,{
        headers:{
            Authorization:  `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })

    let data = await response.json()

    console.log(data);

}


// for reference:https://github.com/masai-school/api-mocker/wiki/Authentication-API