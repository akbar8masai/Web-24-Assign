import React, { useState } from 'react'
import noteContext from "../context/notes/noteContext"
import { useContext } from 'react'


const AddNote = () => {
    const context = useContext(noteContext)
    const {addNote}=context;
    const [note,setnote]=useState({title:"",description:"",tag:"default"})

    const handleclick=(e)=>{
      e.preventDefault()
     addNote(note.title,note.description,note.tag)
    }

    const onchange=(e)=>{
   setnote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div className="container my-3">
    <h1>Add a Note</h1>
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
         Title
        </label>
        <input
          type="text" onChange={onchange}
          className="form-control"
          id="title" name='title'
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
         Description
        </label>
        <input
          type="text" onChange={onchange} name='description'
          className="form-control"
          id="description"
        />
      </div>
      <div className="mb-3">
      <label className="form-label" htmlFor="tag">
         Tag
        </label>
        <input
          type="text"
          className="form-control"
          id="tag" name='tag' onchange={onchange}
        />
      </div>
      <button type="submit" onClick={handleclick}  className="btn btn-primary">
       Add Note
      </button>
    </form>
    </div>
  )
}

export default AddNote
