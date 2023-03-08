
/* boostrap */
import Card from 'react-bootstrap/Card';

/* datos */
import { data } from './../../data'

/* componentes */
import ListTask from "../ListTask/ListTask";
import Form from "./../Form/Form";

/* Hooks */
import { useEffect,useState } from 'react';



function Task() {

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

    <Card className='my-5' style={{ width: '28rem' }}>
      <Card.Body>

        <Form createTask={createTask} />

        {/* task list */}
        <ListTask tasks={datos} deleteTask={deleteTask}/>

      </Card.Body>
    </Card>

  );
}

export default Task;