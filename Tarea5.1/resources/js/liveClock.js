/* 
Metodo Estatico 
//'new Date();' va a ser el constructor que se usa para crear la fecha como un objeto y este se va a guardar en una variable llamda 'datetime'
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime
*/

/* Metodo de Refresh IRL
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toDateString();
    const formattedString = dateString.replace(","," - ")
    timeDisplay.textContent = formattedString;
}

setInterval(refreshTime, 1000);
*/

/* Usando getDay() 
var daysTime= new Date().getDay();
console.log(daysTime);
document.getElementById("show-days").textContent = daysTime;
*/

/* Usando getHours() 
`use strict`
var hoursTime = new Date().getHours();
console.log(hoursTime); 
document.getElementById("show-hours").textContent = hoursTime; 
*/

/* Usando getMinutes() 
`use strict`
var minutesTime = new Date().getMinutes();
console.log(minutesTime); 
document.getElementById("show-minutes").textContent = minutesTime; 
*/

/* Usando getSeconds() 
`use strict`
var secondsTime = new Date().getMinutes();
console.log(secondsTime); 
document.getElementById("show-seconds").textContent = secondsTime; 
*/

//Funcion que permite ver los dias que han pasado desde el inicio del año
function days(displayToday) {
    //864000000 milisegundos en un dia
    return Math.ceil((new Date(displayToday.getTime()) - new Date(displayToday.getFullYear(),0,1)) / 86400000);
}
document.getElementById("show-days").textContent = days(new Date());

//Funcion que refresca la hora en tiempo real
function refreshHours() {
    const displayHours = new Date().getHours();
    document.getElementById("show-hours").textContent = displayHours;
}

setInterval(refreshHours, 1000);

//Funcion que refresca los minutos en tiempo real
function refreshMinutes() {
    const displayMinutes = new Date().getMinutes();
    document.getElementById("show-minutes").textContent = displayMinutes;
}

setInterval(refreshMinutes, 1000);

//Funcion que refresca los segundos cada segundo en tiempo real
function refreshSeconds() {
    const displaySeconds = new Date().getSeconds();
    document.getElementById("show-seconds").textContent = displaySeconds;
}

setInterval(refreshSeconds, 1000);