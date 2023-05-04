import React from 'react'

function Alert(props) {
    
    //first letter capital
    
    // const captilize = (word)=>{
      
    //     const lower = word.toUpperCase()
    //     return lower.charAt(0).toUpperCase()+lower.slice(1);
    // }  line 16 put capitilize in prop.alert.type with ()

  return (
               <div style={{height:"50px"}}>
              {props.alert && <div className={`alert alert-${props.alert.type}-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong>:{props.alert.msg}
            </div>}  
            </div>
   
  )
}

export default Alert
