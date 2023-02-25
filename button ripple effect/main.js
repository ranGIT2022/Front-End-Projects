// const btnEl=document.querySelector(".btn");

// btnEl.addEventListener("mouseover",function(event){

// const x=event.pageX-btnEl.offsetLeft; //we have to substract the x value of button from its own left only from the x value of total page left
// const y=event.pageY-btnEl.offsetTop;

// btnEl.style.setpProperty("--xpos",x + "px");
// btnEl.style.setpProperty("--ypos",y+ "px");
// })  


const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});