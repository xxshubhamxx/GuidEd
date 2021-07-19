const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

var clickcount=0;

function Increment(){
  clickcount++;
  if(clickcount==0)
  {
    document.getElementById("button-readmore").innerHTML = "Click Me";
    document.getElementById("myForm").style.display = "none";
  }
  if(clickcount>0)
    {
    document.getElementById("button-readmore").innerHTML = "Close";
    document.getElementById("myForm").style.display = "block";
    clickcount=-1;
    }
}




document.body.style.zoom=1.0;
this.blur();





// Testing Code: 
//currently not working properly, I need to make sure to put it in full screen only if it is in divided view
//if it is not in divided view, the following code is not supposed to be executed:


const element = document.querySelector('.links')
const x = element.style.position

if(x == "absolute" )
{
  const main = document.querySelector(".main");
  main.addEventListener("click", () => {
  container.classList.toggle("active");
});
}
