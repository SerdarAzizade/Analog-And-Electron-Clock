const DOMsecond = document.querySelector(".sec");
const DOMminute = document.querySelector(".min");
const DOMhours = document.querySelector(".hour");
let s = document.querySelector(".second");
let m = document.querySelector(".minute");
let h = document.querySelector(".hours");



function clock() {
     let now = new Date();
     let second = now.getSeconds();
     let minute = now.getMinutes();
     let hour = now.getHours();

     let secondAngle = 180 + (second * 6);
     let minuteAngle = 180 + (minute * 6) + (second / 10); 
     let hourAngle = 180 + (hour * 30) + (minute / 2);

     DOMsecond.style.transform = `rotate(${secondAngle}deg)`;
     DOMminute.style.transform = `rotate(${minuteAngle}deg)`;
     DOMhours.style.transform = `rotate(${hourAngle}deg)`;

     h.innerHTML = hour;
     s.innerHTML = second;
     m.innerHTML = minute;
     
}



setInterval(clock, 1000)
