//compressed for many users and production we can see code
// uncompressed for production we cant see code in that


//we will use compressed in jquery
// $('selector').action() => syntax
//   $('p').click();  //click on p

//   $('p').click(function(){
//    console.log("u clicked on p");

//   // $('p').hide()

//   $(this).hide();

//   }); //do this when we click on p

//for hide the text
//$('p').hide()

//to select any one text to hide will use $(this).hide();

// $('#id').hide()
//$('.class').hide()

//also this is used when we write script before execute => $(document).ready(function(){ your jquery code here })

$(document).ready(function () {
  //     //your jquery code here

  // //     $('p').click();  //click on p

  //   $('p').click(function(){
  //    console.log("u clicked on p",this);
  // $('p').hide()

  //this to used above body operation....
  //    $(this).hide();

  //   })
  //  there are three main types of selector in jQuery
  //  1.Element selector
  //  2. id selector
  //  3.class selector

  //element selector - this is an example pf element selector which clicks on all p
  //  $('p').click()

  //id selector - this is an example of id selector
  //   $('#hi').click()

  //class selector - this is an example of id selector
  //   $('.hiii').click()

  //for universal
  // $('*').click()

  //to select odd or even element we use
  //    $('p.even').click()

  //    $('p.odd').click()

  // $('p:last').click()

  // $('p:first').click()

  // events in jquery
  //  Mouse Events =click,dblclick,mouseenter,mouseleave
  //  KeyboardEvent =keypress,keydown,MediaKeyStatusMap
  //  formevent =submit,change, focus ,blur
  //  document/window events = load ,resize, scroll,unload

  //      $('p').dblclick(function(){
  //   console.log("u clicked  double on p",this);
  //   })

  //   $('p').mouseenter(function(){   //mouseenter will give if u move the cursor in that line automatically give console
  //     console.log("u  enter on p",this);
  //     })
  //demoing the on method
  //    $('p').on('click',function () {
  //       console.log("thanks",this)
  //    })

//   $("p").on({
//     click:
//     function() {
//       console.log("thanks", this);
//     },
//     mouseleave :function () {
//         console.log("mouseleave")
//     }
//   });

// $('#wiki').show()
// $('#wiki').hide()
// $('#wiki')

// $('#wiki').hide(1000,()=>{
//     console.log("hidden")
// })  //1000 for 1s to hide we will pass argument
 
// $('#btn').click(function(){
//    $('#wiki').toggle(2000)
// })  //will show and hide toggle

//fadeIn(),fadeOut(),fadeToggle(),fadeTo()  => fadeOut() same as toggle 
//$('#btn').click(function(){
    //    $('#wiki').fadeOut(5000)
    // })

//SlideDown SlideUp slideToggle will works same animation 
//   $('#wiki').slideUp(1000,()=>{
   // console.log("done") => callback function is optional
// })
// $('#wiki').slideToggle(1000)


//Animate function =>
   //$('#wiki').animate({opacity:0.3,height:"150px",width:"350px"},2000)  //bascially it will make lite in text 
   //$('#wiki').animate({opacity:0.3,height:"150px",width:"350px"},"fast")   //slow and fast
    
//    $('#wiki').animate({opacity:0.3},12000)
//    $('#wiki').animate({opacity:0.9},1000)
//    $('#wiki').animate({height:"250px"},8000)

  // $('#wiki').stop(function(){console.log("stop")})  //stop the animation
   
  //$('#wiki').text() // to show the text in inspect console
  
 // $('#wiki').text("this is akki ")  // change the text in inspect console
 
 //$('body').html()  //// show html in inspect console

 //$('body').html("this is akki")  //// change html in inspect console

//$('body').html("i am setting html")  // to set html in inspect console

// $('#ta').val("setting is here") // change in text area html in inspect console
 //val means value in html
 
 // $('#wiki').empty() // to empty the data in body

 //$('#wiki').remove() // to remove the element in dom


// --------------------to add CSS-----------------------------

//$('#wiki').addClass('myclass')  //to add class in css font with className 

//$('#wiki').removeClass('myclass')  //to remove class in css font with className 
 
//toggleClass('')

//$('#wiki').css('background-color','red')  //to add class in css font with className 

// ------------------------------AJAX in jquery-----------------------------------

  // just go jquery cdn => uncompressed => in that file => go to script tag in which https://code.jquery.com/jquery-3.6.4.js file click


//  $.get('https://code.jquery.com/jquery-3.6.4.js') => to get all details of file 


//Ajax get function
//$.get('https://code.jquery.com/jquery-3.6.4.js',function(data,status){alert(data)})

//$.get('https://code.jquery.com/jquery-3.6.4.js',function(data,status){alert(status)})

//backened with post using jquery
// $.post('https://code.jquery.com/jquery-3.6.4.js',{
//     name:"akki",channel:"code with akki"
// },function(data,status){alert(status)})


});
