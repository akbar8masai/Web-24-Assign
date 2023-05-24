const jwt = require('jsonwebtoken');
const Jwt_secret = "akkiisagoodboy";

fetchuser=(req,res,next)=>{
  //get the user from the jwt token and add id to req object
  const token = req.header("auth-token")
  if(!token){
    res.status(401).send({err:"please authenticate using a valid token"})
  }
try{
    const data =jwt.verify(token,Jwt_secret)
    req.user = data.user;
      next();
}catch(err){
    res.status(401).send({err:"please authenticate using a valid token"})
    
}

}



module.exports=fetchuser;