import { createContext } from 'react'

/* Hooks */
import { useEffect, useState } from 'react';

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
      'id': datos.length,
      'title': taskTitle,
      'completed': false
    };

    setDatos([...datos, newData]);

    console.log(newData);

  }

  //actualiza la propiedad completed a true de la task segun el index pasado por parametro
  function updateTask(index, key, value) {

    // recorre los datos y guarda el array resultante en una constante
    const updatedData = datos.map((task, i) => {

      //verifica si el index es igual de la funcion es igual al index de la task que esta recorriendo
      if (i === index) {

        //devuelve un objeto con la propiedad actualizada
        return { ...task, [key]: value }

      }

      // devuelve los obejtos que no cumplan con la condicion
      return task

    });

    console.log(updatedData)
    // actualiza el estado de los datos
    setDatos(updatedData)
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
        deleteTask,
        updateTask
      }
    }>
      {props.children}
    </TaskContent.Provider>
  )
}
