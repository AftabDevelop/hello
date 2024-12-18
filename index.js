function timing(){
const timer = document.getElementById('root');
const date1 = new Date();
const date2 = new Date("2028-07-21");

const date = date2-date1;
const days = Math.floor(date/(1000*60*60*24));
timer.innerHTML=days+"Days";
timer.style.fontSize="4rem";
// timer.style.height="100%";
timer.style.display="flex";
timer.style.justifyContent="center";
timer.style.alignItems="center";

const timer1 = document.getElementById('root1');
const hour = Math.floor((date/(1000*60*60))%24);
timer1.innerHTML=hour + "hours";
timer1.style.fontSize="4rem";
// timer1.style.height="100vh";
timer1.style.display="flex";
timer1.style.justifyContent="center";
timer1.style.alignItems="center";

const timer2 = document.getElementById('root2');
const min = Math.floor((date/(1000*60))%60);
timer2.innerHTML=min+"Minutes";
timer2.style.fontSize="2rem";
// timer2.style.height="100vh";
timer2.style.display="flex";
timer2.style.justifyContent="center";
timer2.style.alignItems="center";

const timer3 = document.getElementById('root3');
const sec = Math.floor((date/(1000))%60);
timer3.innerHTML=sec+"seconds";
timer3.style.fontSize="1.5rem";
// timer3.style.height="100vh";
timer3.style.display="flex";
timer3.style.justifyContent="center";
timer3.style.alignItems="center";
}
setInterval(timing,1000);