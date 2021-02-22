
const myForm = document.getElementById('create-task-form');


myForm.onsubmit = function(e) {
  e.preventDefault();
  myTask = document.getElementById('new-task-description').value;
  myList = document.getElementById('list');
  let el = document.createElement('li');
  let deleteButton = document.createElement('button');
  el.innerHTML = myTask;
  myList.appendChild(el)
  return false;
};