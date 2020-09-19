
// create a new header element with the class header
const header = $(`<h1 class="header"> Hello World </h1>`);
const header1 = $(`<h1 class="header"> Hello World </h1>`);

// you can set CSS attributes using the css method, you can set more than one attributes at the same time
header.css("color", "red");

let toggle = true;

// creating a new button with the text of Show/Hide
const button = $(`<button> Show/Hide </button>`);

// add a click event listener on the previously created button
button.click(function () {
  if (toggle) {
    header.hide();
    toggle = !toggle;
  } else {
    header.show();
    toggle = !toggle;
  }
});

// another way of attaching an event listener using the `on` method, it is possible to add multiple events at once
// button.on("click", function () {
//   if (toggle) {
//     header.hide();
//     toggle = !toggle;
//   } else {
//     header.show();
//     toggle = !toggle;
//   }
// });

// select the body
const body = $(`body`);

// append header header1 button
body.append(header);
body.append(header1);
body.append(button);

// create a new element
const ul = $(`<ul></ul>`);
// append the ul to the body
body.append(ul);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// iterate over the the above array
numbers.forEach((number, index) => {
  // create an li element
  const li = $(`<li id=li${index}>${number}</li>`);
  // add class to the li   
  li.addClass("list-item");
  // append the li to the ul
  ul.append(li);
});

// create an input and a button
const input = $("<input type=text />");
const button1 = $(`<button>asd</button>`);

button1.click(function () {
  // get the value of the input and log it to the console
  console.log(input.val());
});

// append the input and button to the body
body.append(input);
body.append(button1);

// it is possible to remove elements using the remove method
header1.remove();
