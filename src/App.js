import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react";

function App() {

  const [tasks,setTasks] = useState([
    {
      id: 1,
      text: "Buy groceries",
      day: "August 14th at 9.00am",
      reminder: true,
    },
    {
      id: 2,
      text: "Go to McDonalds",
      day: "August 14th at 9.00am",
      reminder: true,
    },
    {
      id: 3,
      text: "Hang out with friends",
      day: "August 14th at 9.00am",
      reminder: true,
    },
    {
      id: 4,
      text: "Start learning react",
      day: "August 14th at 9.00am",
      reminder: false,
    },
  ]);

  const deleteTask = (id)=>{
    setTasks(tasks.filter(task=>task.id!==id))
  }

  return (
    <div className='container'>
     <Header/>
    <Tasks list={tasks} onDelete={deleteTask} 
    />
    </div>
  );
}

export default App;
