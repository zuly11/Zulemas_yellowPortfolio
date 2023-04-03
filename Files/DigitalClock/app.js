
function clock() {

    const fullDate = new Date();
    var hours = fullDate.getHours();
    const mins = fullDate.getMinutes();
    const secs = fullDate.getSeconds();
    var amPm = ( hours < 12 ) ? "AM" : "PM";
    
    hours = (hours > 12) ? hours - 12: hours;
    
    


    if(hours < 10) {
        hours = "0" + hours;    
    }
     if(mins < 10) {
        mins = "0" + mins;    
    }
     if(secs < 10) {
        secs = "0" + secs;    
    }
    
   document.getElementById('hour').innerHTML = hours;
   document.getElementById('minute').innerHTML = ":" + mins;
   document.getElementById('second').innerHTML = ":" + secs; 

    document.getElementById('mode').innerHTML = amPm;  
    
}

setInterval(clock,100);


