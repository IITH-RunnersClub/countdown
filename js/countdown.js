const eventDate = new Date("2026-11-22T05:30:00+05:30").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if(distance < 0){

        document.getElementById("days").innerHTML="0";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";

        return;

    }

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));

    const seconds = Math.floor((distance % (1000*60))/1000);

    document.getElementById("days").innerHTML=days;

    document.getElementById("hours").innerHTML=String(hours).padStart(2,'0');

    document.getElementById("minutes").innerHTML=String(minutes).padStart(2,'0');

    document.getElementById("seconds").innerHTML=String(seconds).padStart(2,'0');

}

updateCountdown();

setInterval(updateCountdown,1000);
