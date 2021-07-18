
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
  return (
    //whatever you return MUST be a single element
    <div className='container' >
      <Header title={'The App'}/>
      <Tasks tasks={tasks}/>
    </div>

  )
}



export default App
