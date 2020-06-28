// initialize variables
let btn;
let output;
let input;
let deleteItem;
let btnClear;

// once page loads, set variables
function scriptInitializer () {

  // assign objects to variables
  btn = document.getElementById('btn');
  output = document.querySelector('#output-tasks');
  input = document.querySelector('#task-input');
  btnClear = document.querySelector('#clear');

  // create event listeners
  btn.addEventListener('click', addTask);
  window.addEventListener('keypress', addTask)
  output.addEventListener('click', deleteTask);
  btnClear.addEventListener('click', clearTasks);
}

// add items to the list
function addTask(e) {
  if (e.keyCode === 13 || e.type === 'click'){ // click event or push ENTER
    if (input.value !== '' && input.value !== ' ' && input.value.length > 0){
  const li = document.createElement('li'); // create item from input
  const a = document.createElement('a'); // create link to delete item if desired
  a.appendChild(document.createTextNode('x')); // add 'x' to the link for clickability
  a.setAttribute('href', '#'); // set required attribute
  a.setAttribute('alt', 'delete'); // set required attribute
  li.appendChild(document.createTextNode(input.value)); // add delete item link to input item
  li.appendChild(a); // add 'x' to end of list item
  li.setAttribute('class', 'task-item'); // assign class
  output.appendChild(li); // add it all to the output

  //clear text box
  input.value = '';

  e.preventDefault();
    }
  }
}

// delete added item
function deleteTask (e) {
  if (e.target.parentElement.className === 'task-item') {
    e.target.parentElement.remove();
  }
}
// clear it all
function clearTasks(e) {
  output.innerHTML = '';
}

// initialze variables once page loads
window.addEventListener('load', scriptInitializer);