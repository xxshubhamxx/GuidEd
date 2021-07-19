document.body.style.zoom=0.98;
this.blur();

const isHover = e => e.parentElement.querySelector(':hover') === e;    
const myDiv = document.getElementsByClassName("container");
document.addEventListener('mousemove', function checkHover() {
const hovered = isHover(myDiv);
if (hovered !== checkHover.hovered) {
    if(hovered){
    document.getElementById("insta").style.opacity=1 ;
    }
    else{ 
        document.getElementById("insta").style.opacity=0;
    }
    checkHover.hovered = hovered;
}
});