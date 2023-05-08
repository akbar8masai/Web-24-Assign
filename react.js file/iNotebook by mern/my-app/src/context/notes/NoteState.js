import React, { useState } from 'react'
import noteContext from './noteContext'


const NoteState =(props)=>{
//   const s1 ={
//     "name":"akki",
//     "class":"10b"
//   }
//  const [state,setState]=useState(s1)
 
//  const update=()=>{
//     setTimeout(() => {
//         setState({
//             "name":"bakki",
//             "class":"10c"
//         })
//     }, 1000);
//  } 


// -----------------------------------------
// for common notes reference we will fetch our notes
 const notesInitial =[
  {
    "_id": "64577f589bd29e34a2vd72ba5f",
    "title": "hello",
    "description": "yoyo akki",
    "tag": "personal",
    "date": "2023-05-07T10:37:12.885Z",
    "__v": 0
  },
  {
    "_id": "64578b827be11d5ec0ac75601b",
    "title": "hello2",
    "description": "yoyo akki2",
    "tag": "personal",
    "date": "2023-05-07T11:29:06.874Z",
    "__v": 0
  },
  {
    "_id": "64577f589bd29e3a4a272ba5f",
    "title": "hello",
    "description": "yoyo akki",
    "tag": "personal",
    "date": "2023-05-07T10:37:12.885Z",
    "__v": 0
  },
  {
    "_id": "64578b827be11d5ec0d75601b",
    "title": "hello2",
    "description": "yoyo akki2",
    "tag": "personal",
    "date": "2023-05-07T11:29:06.874Z",
    "__v": 0
  },
  {
    "_id": "64578b937be11d5ec075d601d",
    "title": "hello23",
    "description": "yoyo akki32",
    "tag": "personal",
    "date": "2023-05-07T11:29:23.787Z",
    "__v": 0
  },
  {
    "_id": "64577f589bd29e34a272ba5f",
    "title": "hello",
    "description": "yoyo akki",
    "tag": "personal",
    "date": "2023-05-07T10:37:12.885Z",
    "__v": 0
  },
  {
    "_id": "64578b827be11d5ec075601b",
    "title": "hello2",
    "description": "yoyo akki2",
    "tag": "personal",
    "date": "2023-05-07T11:29:06.874Z",
    "__v": 0
  },
  {
    "_id": "64578ba17be11d5ec07560d1f",
    "title": "hello43",
    "description": "yoyakki32",
    "tag": "personal",
    "date": "2023-05-07T11:29:37.581Z",
    "__v": 0
  }
]


const [notes,setnotes]=useState(notesInitial)

  //add note
  const addNote=(title,description,tag)=>{
    // todo api call
    console.log("add note")
    const note= {
      "_id": "64578ba17beadc11d5ec07560d1f",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-05-07T11:29:37.581Z",
      "__v": 0
    };
    setnotes(notes.concat(note))
  }
  //edit note
 const editNote=()=>{
    
  }

  //delete note
  const deleteNote=()=>{
    
  }
  return (
   // <noteContext.Provider value={{state , update}}>
       <noteContext.Provider value={{notes,addNote,editNote,deleteNote}}>
        {props.children}
       </noteContext.Provider>

  )
}


export default NoteState