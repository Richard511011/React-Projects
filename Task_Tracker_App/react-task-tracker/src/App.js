
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
function App() {
  const [tasks,setTasks] = useState(
    [
        {id: 1,
            text: "Panera Bread Jam Session",
            day: "Today",
            remainder: true},
        {id: 2,
        text: "Burger Interview",
        day: "next monday",
        remainder: true},
    ]
);

// Delete Tasks

const deleteTask = (id)=>{
  // following code is for each task thats id is not equal to the given ID, we want it to show.
setTasks(tasks.filter((tasks)=>tasks.id!==id))
}
  return (
    //whatever you return MUST be a single element
    <div className='container' >
      <Header /> 
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask}/>:'No Tasks to show'}
    </div>

  )
}



export default App
