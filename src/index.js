document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.querySelector("form");
  const tasks = document.querySelector("#tasks") //document.getElementById("tasks")
  const newTask = document.querySelector("#new-task-description")

  form.addEventListener("submit", event => {

    event.preventDefault()
    console.log("hello")

    tasks.innerHTML += `<li>${newTask.value}</li>`
    newTask.value = ""
  })


});
