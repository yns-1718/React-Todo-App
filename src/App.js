import React from 'react'
import { useState } from "react"



function App() {
  /*const [ todo , setTodo] =  useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleADDTodo = () => {
    setTodo([...todo, inputValue]);
    setInputValue('');
  }
  */

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleNewTask = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handeleComplete = (index) => {
    const newTask = [...tasks];
    newTask[index].completed = true;
    setTasks(newTasks);
  };


  return(

   /* <div>
    <h1>To-Do List</h1>
    <input type="text" value={newTask} onChange={handleNewTask} />
    <button onClick={handleAddTask}>Add Task</button>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => handleDeleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>*/

  
    
<div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-md-12">
                <div class="card px-3">
                    <div class="card-body">
                        <h2 class="card-title">Todo list</h2>
                        <input type="text" class="form-control todo-list-input" value={newTask} onChange={handleNewTask} placeholder="What do you need to do today?"></input>
                       
                        <div class="add-items d-flex">  
                        <button onClick={handleAddTask} class="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button> 
                        </div>
                        <div class="list-wrapper">
                            <ul class="d-flex flex-column-reverse todo-list">
                              {tasks.map((tasks, index) => (
                               <li key={index} className={tasks.completed ? 'completed' : ''}>
                                    <div class="form-check"> 
                                    <label class="form-check-label">{tasks}. 
                                    <i class="input-helper"></i></label> 
                                    </div> 
                                    {!tasks.completed && (
                                    <>
                                    <i onClick={() => handleDeleteTask(index)} class="remove mdi mdi-close-circle-outline"></i>
                                    <i onClick={() => handeleComplete(index)} class="fa fa-list" aria-hidden="true"></i>

                                    </>
                                    )}
                                </li>

                               ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
  );
}

export default App;
