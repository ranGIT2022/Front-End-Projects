const hourE1=document.getElementById("hour");
const minuteE1=document.getElementById("minutes");
const secondsE1=document.getElementById("seconds");
const ampmE1=document.getElementById("ampm");

// to get time from  computer we can  use the constroctor in a function as below

function updatedClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";

    if(h>12){
        h=h-12;
        ampm="PM";
    }

   h= h<10 ? "0" + h:h;  // if else statement in pakaram upayogikkaavunna method //
   m= m<10 ? "0" + m:m;
   s= s<10 ? "0" + s:s;

    

    hourE1.innerHTML=h;
    minuteE1.innerHTML=m;
    secondsE1.innerHTML=s;
    ampmE1.innerHTML=ampm;

    setTimeout(()=>{ //instead of writing the word function we can use the symbol ()=> instead of it//
        updatedClock()} ,1000)

}
updatedClock();