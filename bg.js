const body = document.querySelector("body");


const IMG_NUMBER = 5;

// function handleImgLoad(){
//     console.log("finished loading");
// }



function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
   // image.addEventListener("loaded",handleImgLoad);

}


function getRandom(){
    const number = Math.floor(Math.random()*4);
    return number;
}


function init(){
    const randomNumber= getRandom();
    paintImage(randomNumber);
}

init();