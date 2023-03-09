let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let format = document.getElementById('format');
let dates = document.getElementById('dates');
let months = document.getElementById('months');
let years = document.getElementById('years');
setInterval(()=>{
    let d = new Date();
    let x = (d.getHours() < 12)?"AM":"PM"
    hours.innerHTML = `${d.getHours()}`;
    minutes.innerHTML = `${d.getMinutes()}`;
    seconds.innerHTML = `${d.getSeconds()}`;
    format.innerHTML = `${x}`;
    dates.innerHTML = `${d.getDate()}`;
    months.innerHTML = `${d.getMonth()+1}`;
    years.innerHTML = `${d.getFullYear()}`;
},1000)