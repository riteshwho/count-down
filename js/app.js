const endDate = "7 February 2023 12:00 AM";

document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date()
    const diff = (end - now)/1000; // conversion to seconds from milli seconds
    if (diff < 0) return;
     //Conversion to Days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    //conversion to hours 
    inputs[1].value = Math.floor(diff / 3600) % 24;
    //conversion to minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    //conversion to seconds
    inputs[3].value = Math.floor(diff) % 60;

}
clock();
/**
 * 1 day = 24 hr
 * 1 hr = 60 min
 * 60 min = 3600 sec
 */

setInterval(
    () =>{
        clock();
    },
    1000
)