"use strict";
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    // if input box is empty then alert box will open
    alert("You must write something!!");
  } else {
    let li = document.createElement("li"); // storing element in li
    li.innerHTML = inputBox.value; // adding text in input box will be stored here
    listContainer.appendChild(li); // we've to display the li where? under the input box

    // now want remove list items
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // close icon
    li.appendChild(span);
  }
  // for e.g. input box- Hello then it printed in the li, now still it's showing Hello in input box then how can we clear it?
  inputBox.value = "";
  saveData(); // saving updated content in the browser
}

// close the list item
listContainer.addEventListener(
  "click",
  function (e) {
    // checks if element that was clicked on e.target has a tag name "LI"(represents list items)
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); // if the clicked element is a list item, toggles the checked class on that list item(allows to mark or unmark)
      saveData();
      // if the clicked element is not a list item but a child span element(close button), this checks if it's a span element
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); // if the clicked element is a span, removes the parent element of span
      saveData();
    }
  },
  false
);
// saving data when open browser in local storage
function saveData() {
  // save entire content in listContainer
  localStorage.setItem("data", listContainer.innerHTML);
}

// whenever we add new data then we use saveData fn call

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
