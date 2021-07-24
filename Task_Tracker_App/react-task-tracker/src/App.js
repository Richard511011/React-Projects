
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState,useEffect} from 'react'
import AddTask from './components/AddTask'
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks,setTasks] = useState(
    [
      ]
      );
      useEffect(()=>{
      const getTasks = async ()=>{
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }
      getTasks()
        
      }
      
      ,[])


const fetchTasks=async()=>{
  const res = await fetch('http://localhost:5000/tasks')
  const data =await res.json()
return data
}



const fetchTask=async(id)=>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data =await res.json()
return data
}

//Toggle reminder
const toggleReminder= async (id)=>{


const taskToToggle= await fetchTask(id)
const updatedTask={...taskToToggle,reminder:!taskToToggle.reminder};

const res = await fetch(`http://localhost:5000/tasks/${id}`,
{
  method:'PUT',
  header:{
    'Content-type':'application/json'
  }, body:JSON.stringify(updatedTask)})
  const data = await res.json()


 
  //iterating through the task array. if the id passed is equal to the task id the iterator is on flip the task.reminder boolean,
setTasks(tasks.map((task)=>task.id===id ? {...task,reminder:(data.reminder)}:task))
console.log(id)
}

// Delete Tasks

const deleteTask = async(id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'DELETE',
  })

  console.log('delete',id)
  // following code is for each task thats id is not equal to the given ID, we want it to show.
setTasks(tasks.filter((tasks)=>tasks.id!==id))
}
const addTask=async(task)=>{
  const res = await fetch('http://localhost:5000/tasks',
  {
    method:'POST',
    headers:{
    'Content-type':'application/json'
  }, 
  body:JSON.stringify(task)
 } )
 const data = await res.json()
 setTasks([...tasks,data])
  // console.log(task);
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
