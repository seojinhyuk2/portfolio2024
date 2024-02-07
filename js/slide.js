let mainText=document.querySelector("p")
window.addEventListener('scroll',function(){
    let value=window.scrollY;
    console.log("scroll", value);

    if(value>400){
        mainText.style.animation='disappear 1s ease-out forwards'
    }else{
        mainText.style.animation='slide 1s ease-out'
    }
})