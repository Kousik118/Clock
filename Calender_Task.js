const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateTime() {
    const dateObject = new Date();
    const dayName = dayArray[dateObject.getDay()];
    const date = dateObject.getDate();
    const monthName = monthArray[dateObject.getMonth()];
    const year = dateObject.getFullYear();
    const time = `${dateObject.getHours().toString().padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}`;
    const seconds = dateObject.getSeconds().toString().padStart(2, '0');

    document.getElementById("day").innerText = dayName;
    document.getElementById("date").innerText = `${date} ${monthName} ${year}`;
    
    let hours = parseInt(time.split(":")[0], 10); // Extract the hour part
    let minutes = time.split(":")[1]; // Extract the minutes part

    if (hours < 12) {
        document.getElementById("time").innerText = `${hours}:${minutes} AM`;
    } else {
        let adjustedHours = hours > 12 ? hours - 12 : 12; // Convert to 12-hour format
        document.getElementById("time").innerText = `${adjustedHours}:${minutes} PM`;
    }
    document.getElementById("secarea").innerText = seconds;
    console.log(typeof time);
}

setInterval(updateTime, 1000);
updateTime();
