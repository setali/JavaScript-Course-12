// var root = document.getElementById('root')
// alert('salam')
// console.log(confirm('Do you love JavaScript?'))
// console.log(prompt("What's your name?"))

var root = document.querySelector('#root')
var todoList = document.createElement('ol')

var form = document.createElement('form')
form.addEventListener('submit', function (event) {
  event.preventDefault()

  var value = input.value.trim()
  if (!value) return

  addTodo(value)
  saveTodo(value)
})

var input = document.createElement('input')
input.setAttribute('placeholder', 'Todo')
input.setAttribute('type', 'text')
input.setAttribute('name', 'todo')

var button = document.createElement('button')
button.setAttribute('type', 'submit')
button.innerText = 'Add'

form.appendChild(input)
form.appendChild(button)

root.appendChild(form)
root.appendChild(todoList)

function addTodo (value) {
  var todo = document.createElement('li')
  todo.textContent = value

  var deleteIcon = document.createElement('span')
  deleteIcon.textContent = 'x'
  deleteIcon.style.color = 'red'
  deleteIcon.style.margin = '0 10px'
  deleteIcon.style.cursor = 'pointer'
  deleteIcon.addEventListener('click', function (event) {
    // todo.remove()
    event.target.parentElement.remove()
    removeTodo(value)

    // console.log(this === deleteIcon)
    // console.log(this === event.target)
  })

  todo.appendChild(deleteIcon)
  todoList.appendChild(todo)

  input.value = ''
}

function saveTodo (value) {
  var todos = getTodos()
  todos.push(value)
  saveTodos(todos)
}

function removeTodo (todo) {
  var todos = getTodos()
  var newTodos = todos.filter(function (el) {
    return el !== todo
  })

  saveTodos(newTodos)
}

var storage = localStorage

function saveTodos (todos) {
  storage.setItem('todos', JSON.stringify(todos))
}

function getTodos () {
  todosString = storage.getItem('todos')
  return todosString ? JSON.parse(todosString) : []
}

;(function loadTodos () {
  var todos = getTodos()
  todos.forEach(function (todo) {
    addTodo(todo)
  })
})()
