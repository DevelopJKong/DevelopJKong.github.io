
// const age = prompt("how old are you?");

// if(age >18){
//  console.log("you can drink");
// } else {
//  console.log("you can't drink");
// }


// function handleResize(){
//     console.log("I have been resized");
// }

// window.addEventListener("resize",handleResize());

const title = document.getElementById("title");

const CLICKED_CLASS ="clicked";

function handleClick() {
 const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    } 

    //title.classList.toggle(CLICKED_CLASS); toggle은 위 과정을 전부 생략하지만 add 와 remove를 같이 해준다

} 


function init() {
    title.addEventListener("click",handleClick);
}
init();







