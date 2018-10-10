
let TextBox = document.getElementById('TextBox')
let addButton = document.getElementById('addButton')
let pendingTask = document.getElementById('pendingTask')
let completedTask = document.getElementById('completedTasks')
let deleteButton = document.querySelector(".deleteButton")

function completedItem(cb){
  completedTask.appendChild(cb.parentElement)

  if(cb.checked == false){
    pendingTask.appendChild(cb.parentElement)
  }
}

function removeItem(item) {
  if(item.parentElement.parentElement == pendingTask){
    pendingTask.removeChild(item.parentElement)
  } else if(item.parentElement.parentElement == completedTask){
    completedTask.removeChild(item.parentElement)
  }
}


addButton.addEventListener('click', function() {
let taskName = TextBox.value
let taskDiv = `
 <div class="pendingTaskDiv">
<input class="inputText" type="checkbox" onclick="completedItem(this)"></input>
<label>${taskName}</label>
<button class="deleteButton" onclick="removeItem(this)">Remove</button>
</div> `
// pendingTask.appendChild(taskDiv)
pendingTask.insertAdjacentHTML('beforeend',taskDiv)

// ============================================

})
