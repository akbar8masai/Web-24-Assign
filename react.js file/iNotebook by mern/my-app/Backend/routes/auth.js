const express =require('express')
const router =express.Router()
const User =require('../models/user')
const jwt = require('jsonwebtoken');
const fetchuser =require("../middleware/fetchuser")

//install bcryptjs refer bycrypt in google for password protection we use salt and pepper 
const bcrypt = require('bcryptjs');

//for signature password we will send jwt token refer jwt node js or jwt site official for secret message password
const Jwt_secret = "akkiisagoodboy"



const { body, validationResult } = require('express-validator');

//Route 1 : create a user using:post "api/auth/" .doesnt require auth = newuser => createuser

 router.post('/createuser',[
   body('name','enter a valid name').isLength({ min: 3 }),
   body('email','enter a valid email').isEmail(),
   body('password','enter password at least 5 char').isLength({ min: 5 }),
 ], async (req,res)=>{
  
  //if there are error ,return bad request & error


//    // obj={
//    //     a:'thios',
//    //       number:34
//    // }
//    // res.json(obj)

  
  // console.log(req.body);
//    res.send('hello')

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  
  // to create user
  //check whether user is email exists already
    try {
    let user = await User.findOne({email:req.body.email});
    if(user){
      return res.status(400).json( {Error:"sorry user already exists"})
    }
     

    const salt = await bcrypt.genSalt(10);
    const secPass =await bcrypt.hash(req.body.password,salt)


    user = await User.create({
    name : req.body.name,
    email:req.body.email,
    password:secPass
   });
   
   const data={
    user:{
      id:user.id
    }
   }

   //jwt sign
   const authtoken= jwt.sign(data,Jwt_secret);
   //res.json({authtoken})



  //  .then(user=> res.json(user)).catch(err=> console.log(err))
  //    res.json({error:'please enter unique value'})
   //const user =User(req.body)
  // user.save()
  //  res.send(req.body)
  res.send(user)

 } catch (error) {
  console.log("error")
  res.status(500).send("some error occured")
}

 })



 //Route 2 : create authentic user by login :post "/api/auth/login" no login req
 router.post('/login',[
  body('email','enter a valid email').isEmail(),
  body('password','enter password at least 5 char').isLength({ min: 5 }),
  // body('password','cannot be blank ').exists()
], async (req,res)=>{

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
   
  const {email,password}=req.body;
 try {
  let user = await User.findOne({email});
  if(!user){
    return res.status(400).json( {Error:"please try to login with correct credentials"})
  }

  const passwordCompare = await bcrypt.compare(password,user.password)
  if(!passwordCompare){
    return res.status(400).json( {Error:"please try to login with correct credentials"})
  }
  const data={
    user:{
      id:user.id
    }
   }
   const authtoken= jwt.sign(data,Jwt_secret);
   res.json({authtoken})

}  catch (error) {
  console.log("error")
  res.status(500).send("Internal server error")
}


})

//Route 3 : get logged in details :post "/api/auth/getuser"  login req
router.post('/getuser', fetchuser, async (req,res)=>{

try{
   userId=req.user.id;
   const user = await User.findById(userId).select("-password")
  res.send(user)
} catch (error) {
  console.log("error")
  res.status(500).send("Internal server error")
}
 
})
module.exports = router;