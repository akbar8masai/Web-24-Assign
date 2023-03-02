
let carousel_div= document.getElementById("carousel")

function carousel(){

let images =["https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-02-22/MHTNM_desk-6c947a7f-7a40-4e6a-bb12-e0f23adda92e.jpg","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8470/1478470-h-211f5b4ce647","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4266/1364266-h-470552ba960d","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8505/1478505-h-4f0093416da6","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5119/1455119-h-2a917e92adac","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6756/1476756-h-309c8858e0b2"]



let imgElement= document.createElement("img")
imgElement.src=images[0]
carousel_div.append(imgElement)

let i=1;

setInterval(function(){

if(i == images.length){
    i=1
}

imgElement.src =images[i]
carousel_div.append(imgElement)

console.log(i)

i++

},3000)


}

carousel()
