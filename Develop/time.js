let currentDay = document.querySelector("#currentDay");
const currentHour = moment().format("k");


let tasksArray = []

//displays date at top of page
let now = moment().format("dddd, MMM Do, YYYY");
currentDay.textContent = now;

// allows user to edit task content
$(document).on("click", ".textarea", function() {
    // get current text of td element
    var text = $(this)
      .text()
      .trim();
  
    // replace td element with a new textarea
    var textInput = $("<textarea>").val(text);
    $(this).replaceWith(textInput);
  
    // auto focus new element
    textInput.trigger("focus");
  });

  // set function that sets color for past/present/future
function setColor() {
    let hourOfDay = $(".time-block")
    for (let i = 1; i < 10; i++) {
        let hourOfDayId = document.getElementsByClassName("time-block")[i].id
        let hourOfDayIdInt = parseInt(hourOfDayId);
        let currentHourInt = parseInt(currentHour)
        if (hourOfDay) {
            if (currentHourInt > hourOfDayIdInt) {
                hourOfDay[i].setAttribute('class', 'time-block past')
            } else if (currentHourInt < hourOfDayIdInt) {
                hourOfDay[i].setAttribute('class', 'time-block future')
            }
        }
    
    }
    }

setColor();
