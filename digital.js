const hourel=document.getElementById("hour");
const minuteel=document.getElementById("minute");
const secondel=document.getElementById("second");
const ampmel=document.getElementById("am-pm");

function upclock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ap="AM";

    if(h>11){
        ap="PM";
    }
    if(h>12){
        h=h-12;
    }

    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;

    hourel.innerText=h;
    minuteel.innerText=m;
    secondel.innerText=s;
    ampmel.innerText=ap;
    setTimeout(()=>{
        upclock()},1000)
}

upclock();

const dayel=document.getElementById("day");
const monthel=document.getElementById("month");
const yearel=document.getElementById("year");

function upcal(){
    let d=new Date().getDate();
    let m=new Date().getMonth();
    let y=new Date().getFullYear();

    if(m<12){
        m=m+1;
    }

    d=d<10?"0"+d:d;
    m=m<10?"0"+m:m;
    

    dayel.innerText=d;
    monthel.innerText=m;
    yearel.innerText=y;

    setTimeout(()=>{
        upcal()},1000)
}

upcal();