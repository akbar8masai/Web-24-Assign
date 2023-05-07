const express =require('express')
const router =express.Router()
const fetchuser =require("../middleware/fetchuser")
const Note =require('../models/Note')

const { body, validationResult } = require('express-validator');

//Route 1 : Get All the Notes using:GET "api/notes/getuser" Login req
router.get('/fetchallnotes',fetchuser, async(req,res)=>{
   try {
 const notes = await Note.find({user:req.user.id})
   res.json(notes)
      
   } catch (error) {
      console.log("error")
      res.status(500).send("some error occured")
    }
    
   
   
   // res.json([])
})
//Route 2 :Add a new Notes using:POST "api/notes/addnotes" Login req
router.post('/addnote',fetchuser,[
   body('title','enter a valid title').isLength({ min: 3 }),
   body('description','description must be at least 5 characters').isLength({min:5}),
], async(req,res)=>{
   

   try {

      const { title,description,tag}= req.body;
   
   const errors = validationResult(req);
   if(!errors.isEmpty()){
     return res.status(400).json({errors:errors.array()})
   }

   const note = new Note({
    title ,description ,tag, user:req.user.id
   })
  const savedNote= await note.save()
   res.json(savedNote)
      
   }catch (error) {
      console.log("error")
      res.status(500).send("some error occured")
    }
    
   
   
})

// Route : 3 update an existing Note using :PUT "/api/notes/updatenote" . login req
router.put('/updatenote/:id',fetchuser, async(req,res)=>{

   const { title,description,tag}= req.body;
   
   try {
      //create newNote object
      const newNote={};
      if(title){newNote.title=title};
      if(description){newNote.description=description};
      if(tag){newNote.tag=tag};
     
      // find the note to be updated  and ipdated it.

      let note =await Note.findById({id:req.params.id});
      if(!note){
        return  res.status(404).send("not found")
      };


      if(note.user.toString() !== req.user.id){
         return res.status(401).send("not allowed")
      }
    note = await Note.findByIdAndUpdate({id:req.params.id},{$set:newNote},{new:true})
     res.json({note});
   }
   catch (error) {
      console.log("error")
      res.status(500).send("some error occured")
    }

})

// Route : 4 delete an existing Note using :DELETE "/api/notes/deletenote" . login req

router.delete('/deletenote/:id',fetchuser, async(req,res)=>{
  
   try {
     
      // find the note to be updated  and ipdated it.
      let note =await Note.findById(req.params.id)
      if(!note){
        return  res.status(404).send("not found")
      }
     
      //allow deletion only if user owns this note


      if(note.user.toString() !== req.user.id){
         return res.status(401).send("not allowed")
      }
    note = await Note.findByIdAndDelete(req.params.id)
     res.json({"success":"note has been deleted",note:note});
   }
   catch (error) {
      console.log("error")
      res.status(500).send("some error occured")
    }

})



module.exports = router