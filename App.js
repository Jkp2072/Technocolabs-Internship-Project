import React,{useState} from 'react';
import Todo from "./components/todo.js";
import Form from "./components/form.js";
import FilterButton from "./components/filterbutton.js";
import {nanoid} from "nanoid";
const FILTER_MAP ={
  All : ()  => true,
  Active : task => !task.c,
  completed : task =>task.c
}

function App(props) {
  const FILTER_NAMES = Object.keys(FILTER_MAP);
  
 
  const [tasks,settask] = useState(props.tasks); // as we have used props.task here,use task.map() instead of props.task.map();
  const[filter,setFilter]=useState('All');

  function toggleTaskCompleted(id){
    const updatedTask = tasks.map(task => {
      if(id===task.id){
        return {...task,c: !task.c}
      }
      return task;
    });
    settask(updatedTask);
  }

function deleteTask(id){
  const remainingTasks=tasks.filter(task => id !==task.id);
  settask(remainingTasks);
}

function editTask(id,newName){
  const editedTask =tasks.map(task => {
    if(id===task.id){
      return {...task,name : newName}
    }
    return task;
  });
  settask(editedTask);
    
}


  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
    <Todo id={task.id} name={task.name} c={task.c} key={task.id} toggleTaskCompleted={toggleTaskCompleted}  deleteTask={deleteTask} editTask={editTask}  />
      ));
     
     
      const filterList = FILTER_NAMES.map(name => (
        <FilterButton key={name} name={name}  isPressed={name === filter}  setFilter={setFilter}/>
      ));
  function addtasks(name){
    const newTask={id :"todo-" + nanoid() ,name : name,c : false};
    settask([...tasks,newTask]);
  }


  const taskn = taskList.length === 1 ? 'task' : 'tasks';
  const headingTask=`${taskList.length} ${taskn} remaining`;
  return (
    <div className="todoapp stack-large">
      <h1>Today's Plan</h1>
      
     <Form addTask={addtasks}/>
      <div className="filters btn-group stack-exception">
        {filterList}
       </div>
      <h2 id="list-heading">
        {headingTask}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {/*
         <Todo  name ="Eat" c={true} id="todo-0"/>  
       <Todo  name ="Sleep" c={false} id="todo-1"/>
       <Todo  name = "Repeat" c={false} id="todo-2"/>
        */}
        {taskList}
      </ul>
      <h4 align="right">- Jeet Patel(IIIT-SURAT)</h4>
    </div>
  );
}

export default App;
