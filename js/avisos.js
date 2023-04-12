import {
    onGetTasks,
    saveTask,
    deleteTask,
    getTask,
    updateTask,
    getTasks,
  } from "./firebase.js";
  
  const taskForm = document.getElementById("task-form");
  const tasksContainer = document.getElementById("tasks-container");
  const ContenedordeAvisos = document.getElementById("avisos");
  
  let editStatus = false;
  let id = "";
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    // const querySnapshot = await getTasks();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
    onGetTasks((querySnapshot) => {
      ContenedordeAvisos.innerHTML = "";
  
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
  
        ContenedordeAvisos.innerHTML+=  `<div class="card card-body mt-2 border-primary">
        <h3 class="h5">${task.title}</h3>
        <p>${task.description}</p>
        <div>`;
  
      });
 
    });
  });
  
  taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const title = taskForm["task-title"];
    const description = taskForm["task-description"];
  
    try {
      if (!editStatus) {
        await saveTask(title.value, description.value);
      } else {
        await updateTask(id, {
          title: title.value,
          description: description.value,
        });
  
        editStatus = false;
        id = "";
        taskForm["btn-task-form"].innerText = "Save";
      }
  
      taskForm.reset();
      title.focus();
    } catch (error) {
      console.log(error);
    }
  });
  