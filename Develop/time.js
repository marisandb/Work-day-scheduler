let currentDay = document.querySelector("#currentDay");

//Sets Current Date 
let setCurrent = function() {
    
    let time = moment().format('dddd, MMMM Do, YYYY');
    currentDay.textContent = time;
}
setCurrent();

