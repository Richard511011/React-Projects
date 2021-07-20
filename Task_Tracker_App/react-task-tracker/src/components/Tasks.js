import React from 'react'
import Task from './Task'
//Using an Array before
// const tasks = [
//     {id: 1,
//         text: "Panera Bread Jam Session",
//         day: "Today",
//         remainder: true},
//     {id: 2,
//     text: "Burger Interview",
//     day: "next monday",
//     remainder: true},
// ]

//Now we use states and hooks


//Handles multiple tasks, component takes in a array of tasks and outputs it back to App.js
const Tasks = ({tasks,onDelete}) => {
   
    return (
       <>
       {/* Using a list with tasks.map, for each loop with each element in tasks, send it to Task.js to display  */}
       {tasks.map((task)=>(
        <Task key={task.id} task={task} onDelete={onDelete}/>
       ))}
       
       </>
    )
}

export default Tasks
