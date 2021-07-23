
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks,setTasks] = useState(
    [
        {id: 1,
            text: "Panera Bread Jam Session",
            day: "Today",
            reminder: false},
        {id: 2,
        text: "Burger Interview",
        day: "next monday",
        reminder: false},
    ]
);
//Toggle reminder
const toggleReminder=(id)=>{
  console.log(id)
  //iterating through the task array. if the id passed is equal to the task id the iterator is on flip the task.reminder boolean,
setTasks(tasks.map((task)=>task.id===id ? {...task,reminder:(!task.remainder)}:task))
}

// Delete Tasks

const deleteTask = (id)=>{
  console.log('delete',id)
  // following code is for each task thats id is not equal to the given ID, we want it to show.
setTasks(tasks.filter((tasks)=>tasks.id!==id))
}
const addTask=(task)=>{
  console.log(task);
  // const id = Math.floor(Math.random()*10000)+1
  // // console.log(id);
  // const newTask={id, ...task}
  // setTasks([...tasks,newTask])
}

return(
    //whatever you return MUST be a single element
    <div className='container' >
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/> 
      {showAddTask&&<AddTask onAdd={addTask}/>}
      {tasks.length>0 ?
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:'No Tasks to show'}
    </div>

  )
}



export default App
