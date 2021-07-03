let currentDay = document.querySelector("#currentDay");
const currentHour = moment().format("k");

let tasksArr = []

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