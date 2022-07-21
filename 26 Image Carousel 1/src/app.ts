const imgsContainer = document.getElementById('imgs-container')! as HTMLElement
const carousel = document.getElementById('carousel')! as HTMLElement
const imgs = imgsContainer.querySelectorAll('img')! as NodeListOf<HTMLElement>

let idx = 0
let size = computeSize()

let interval = setInterval(forward,2000)


function forward(){
    idx++    
    if(idx > imgs.length - 1){
        idx = 0
    }
    imgsContainer.style.transform = `translateX(${-size * idx}px)`
}


function computeSize():number{
    const width = getComputedStyle(carousel).getPropertyValue('width')
    return +width.substring(0,width.length-2)
}


// loop
// https://codepen.io/jonathan-asbell/pen/QWgampv