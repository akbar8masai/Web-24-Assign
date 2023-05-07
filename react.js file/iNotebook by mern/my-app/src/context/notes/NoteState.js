import React, { useState } from 'react'
import noteContext from './noteContext'


const NoteState =(props)=>{
  const s1 ={
    "name":"akki",
    "class":"10b"
  }
 const [state,setState]=useState(s1)
 
 const update=()=>{
    setTimeout(() => {
        setState({
            "name":"bakki",
            "class":"10c"
        })
    }, 1000);
 } 

  return (
    <noteContext.Provider value={{state , update}}>
        {props.children}
    </noteContext.Provider>

  )
}


export default NoteState