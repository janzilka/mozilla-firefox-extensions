// this script was created to add a time to online broadcast
// to help viewers to recognize safely
// what time it was during the live event
// during any later time on replay of the youtube video
//
// created by Jan Zilka 2019-12-17
// 
// feel free to use or reuse it

function two_digits(eat_number) {
    if (eat_number < 10) {
      eat_number = '0' + eat_number
    }
    return eat_number;
} //function two_digits


function tick() {

// create a new Date object and assign it to a variable called "time"
var mytime = new Date(),
    
    // Access the "getHours" method on the Date object with the dot accessor.
    hours = mytime.getHours(),

    // Access the "getMinutes" method with the dot accessor.
    minutes = mytime.getMinutes(),

    // same with seconds, may be omitted later    
    seconds = mytime.getSeconds();

div_to_update = document.getElementsByClassName('clock_class')[0];
div_to_update.innerHTML = two_digits(hours) + ":" + two_digits(minutes) + ":" + two_digits(seconds);

} //function tick

var clock_element = document.createElement('div');
clock_element.className = "clock_class";
clock_element.innerHTML = "00:00:00";
clock_element.style.cssText = 'font-size:25px;position:fixed;width:105px;height:35px;left:800px;top:85px;opacity:0.3;z-index:900;color:#d0d0d0;background:#404040';
document.body.appendChild(clock_element);

setInterval(tick, 1000);
