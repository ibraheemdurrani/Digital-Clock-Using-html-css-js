const hour = document.getElementById("heading_hour");
const min = document.getElementById("heading_minutes");
const sec = document.getElementById("heading_seconds");
const am_pm = document.getElementById("heading_ampm");


function updateClock () {

let h= new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let ampm = "AM";

if(h > 12){
    h = h-12;
    ampm = "PM"
}



setTimeout( ()=> {
    updateClock()
},1000)


hour.innerText = h;
min.innerText = m;
sec.innerText = s;
am_pm.innerText = ampm;


}

updateClock()


