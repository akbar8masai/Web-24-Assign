// All the JS Code for the Add Students Page Goes Here
let Arr=JSON.parse(localStorage.getItem("addtobase"))||[]
    document.querySelector("form").addEventListener("submit",myform)
    function myform(event){
       event.preventDefault()
       if(person_name==""||person_mail==""||person_mob==""||person_course==""||person_gen==""){
        alert("fill all the details")
       }else{
        let obj={
            person_name:document.querySelector("#name").value,
            person_mail:document.querySelector("#email").value,
            person_mob:document.querySelector("#phone").value,
            person_gen:document.querySelector("#gender").value,
            person_course:document.querySelector("#course").value,
           }
       }
      
        Arr.push(obj)
        //console.log(Arr)
        localStorage.setItem("addtobase",JSON.stringify(Arr))
      
    
    }