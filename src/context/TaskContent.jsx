import {createContext} from 'react'

/* Hooks */
import { useEffect,useState } from 'react';

/* datos */
import { data } from './../data'



export const TaskContent = createContext();


export function TaskContentProvider(props) {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
  
      setDatos(data)
    }, [])
  
  
    function createTask(taskTitle) {
  
      const newData = {
        'id':  datos.length,
        'title': taskTitle,
        'completed': false
        };
  
      setDatos([...datos, newData ]);
  
      console.log(newData);
  
    }
  
    function deleteTask(taskId) {
  
      const newTodos = [...datos];
      newTodos.splice(taskId, 1);
      setDatos(newTodos);
    }
  


  return (

    <TaskContent.Provider value={
        {
        datos,
        createTask,
        deleteTask
        }
    }>
        {props.children}
    </TaskContent.Provider>
  )
}
