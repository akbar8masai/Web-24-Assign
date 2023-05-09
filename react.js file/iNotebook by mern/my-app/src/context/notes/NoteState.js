import React, { useState } from 'react'
import noteContext from './noteContext'


const NoteState =(props)=>{

 const host ="http://localhost:7000"

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
 const notesInitial =[]


const [notes,setnotes]=useState(notesInitial)


 const getNotes =async()=>{

  const response = await fetch(`${host}/api/notes/fetchallnotes`,{
    method: 'GET', 
    headers: {
      "Content-Type": "application/json",
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjgzMzg5MDQ5fQ.i5td16T1B4tIaHyYpsAMpaz5SYWaebp1vIReKpCr8XM"
    },
       });

       const json = await response.json()
       console.log(json)
       setnotes(json)
  }

  //add note
  const addNote=async(title,description,tag)=>{
    // todo api call
    const response = await fetch( `${host}/api/notes/addnote` , {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjgzMzg5MDQ5fQ.i5td16T1B4tIaHyYpsAMpaz5SYWaebp1vIReKpCr8XM"
      },
       body: JSON.stringify(title,description,tag),
         });


    // const note= {
    //   "_id": "64578ba17beadc11d5ec07560d1f",
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "date": "2023-05-07T11:29:37.581Z",
    //   "__v": 0
    // };
    // setnotes(notes.concat(note))
  }
  //edit note
  //api call todo
 const editNote= async(id,title,description,tag)=>{
  //api  call refer fetch api header in google
  const response = await fetch( `${host}/api/notes/updatenote/${id}` , {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjgzMzg5MDQ5fQ.i5td16T1B4tIaHyYpsAMpaz5SYWaebp1vIReKpCr8XM"
    },
     body: JSON.stringify({title,description,tag}),
       });
    const json =response.json()
  //logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id === id){
        element.title=title;
        element.description=description;
        element.tag=tag
      }
      
    }
  }

  //delete note
  const deleteNote= async(id)=>{
    // API CALL
    const response = await fetch( `${host}/api/notes/deletenote/${id}` , {
      method: 'DELETE', 
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjgzMzg5MDQ5fQ.i5td16T1B4tIaHyYpsAMpaz5SYWaebp1vIReKpCr8XM"
      },
      
         });
      const json =response.json()
      console.log(json)


    //console.log("delete note",id)
   const  newNotes = notes.filter((notes)=>{
     return  notes._id !== id
    })
    setnotes(newNotes)
  }



  return (
   // <noteContext.Provider value={{state , update}}>
       <noteContext.Provider value={{notes,addNote,editNote,deleteNote,getNotes}}>
        {props.children}
       </noteContext.Provider>

  )
}


export default NoteState