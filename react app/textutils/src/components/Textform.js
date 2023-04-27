import React, {useState} from 'react'



//refer react hook for state use i.e line 8 { => remember this for any variable change const [count, setCount] = useState(0);}and {usestate}

export default function Textform(props) {

   const handleupclick=()=>{
    //console.log("uppercase "+text)
    let newText = text.toUpperCase();

    setText(newText)
    props.showAlert("convert to uppercase","success")
  
   }
   const handleDownclick=()=>{
    //console.log("uppercase "+text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("convert to lowercase","success")
   }
   const handleclear=()=>{
    let newText = "";
    setText(newText)
    props.showAlert("Text is clear","success")
   }
   const handlecopy=()=>{
    var text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied","success")
   }
   const handleExtraspace=()=>{
    let newText = text.split(/[ ]+/); 
    // regex in js
    setText(newText.join(" "))
    props.showAlert("Extra is removed","success")
    
   }

   const handleOnchange=(event)=>{
   // console.log("onchange") 
     setText(event.target.value)
   }
    const [text, setText] = useState("");
    //to update any text we can use settext("any update text") i.e setText("achadcujgbvcjug");
  return (
    <>
    <div className='container' style={{color:props.mode==="light"?'black':'white'}}>
     <h1>{props.heading}</h1>
  <div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==="light"?'white':'grey'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>Convert to Uppercase</button>
{/* //mx-2 for button space  for margin*/}
<button disabled={text.length===0}   className="btn btn-secondary mx-1 my-1" onClick={handleDownclick}>Convert to lowercase</button>
<button disabled={text.length===0}  type="button" class="btn btn-success" onClick={handleclear}>clear</button>
<button disabled={text.length===0}  className="btn btn-secondary mx-1 my-1" onClick={handlecopy}>Copy</button>
<button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraspace}>Remove extra spaces</button>
    </div>
    <div className="container my-3"style={{color:props.mode==="light"?'black':'white',backgroundColor:props.mode==="light"?'white':'grey'}}>     
    {/* //my-2 is for margin  */}
      <h2>your text summary</h2>
      <p>{text.split(" ").filter((el)=>{return el.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((el)=>{return el.length!==0}).length}Minutes to read the words</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter your text to preview here"}</p>
    </div>
    </>
  )
}
