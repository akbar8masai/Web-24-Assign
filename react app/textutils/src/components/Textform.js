import React, {useState} from 'react'



//refer react hook for state use i.e line 8 { => remember this for any variable change const [count, setCount] = useState(0);}and {usestate}

export default function Textform(props) {

   const handleupclick=()=>{
    //console.log("uppercase "+text)
    let newText = text.toUpperCase();

    setText(newText)
   }
   const handleDownclick=()=>{
    //console.log("uppercase "+text)
    let newText = text.toLowerCase();
    setText(newText)
   }
   const handleclear=()=>{
    let newText = "";
    setText(newText)
   }
   const handlecopy=()=>{
    var text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
   }
   const handleExtraspace=()=>{
    let newText = text.split(/[ ]+/); 
    // regex in js
    setText(newText.join(" "))
   }

   const handleOnchange=(event)=>{
   // console.log("onchange") 
     setText(event.target.value)
   }
    const [text, setText] = useState("");
    //to update any text we can use settext("any update text") i.e setText("achadcujgbvcjug");
  return (
    <>
    <div className='container'>
     <h1>{props.heading}</h1>
  <div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to Uppercase</button>
{/* //mx-2 for button space  for margin*/}
<button className="btn btn-secondary mx-1" onClick={handleDownclick}>Convert to lowercase</button>
<button type="button" class="btn btn-success" onClick={handleclear}>clear</button>
<button className="btn btn-secondary mx-1" onClick={handlecopy}>Copy</button>
<button className="btn btn-primary mx-1" onClick={handleExtraspace}>Remove extra spaces</button>
    </div>
    <div className="container my-3">     
    {/* //my-2 is for margin  */}
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes to read the words</p>
     <h2>Preview</h2>
     <p>{text}</p>
    </div>
    </>
  )
}
