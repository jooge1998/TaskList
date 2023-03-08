import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import { TaskContent } from './../../context/TaskContent'
import { useContext } from 'react';

/* Icons */
import { VscTrash, VscCheck } from "react-icons/vsc";

function ListTask() {

    const { datos, deleteTask,updateTask } = useContext(TaskContent);

    return (

        <>
            {datos.map((task, index) => (

                <Alert key={index} className='mt-3 d-flex justify-content-between align-items-center' variant={task.completed ? 'success' : 'danger'}>

                    {task.title}

                    <div>

                        <Button onClick={() => updateTask(index,'completed',true)} className='mx-2' variant="warning">
                            <VscCheck />
                        </Button>

                        <Button onClick={() => deleteTask(index)} className='mx-2' variant="danger">
                            <VscTrash />
                        </Button>

                    </div>
                </Alert>


            ))}
        </>
    )
}

export default ListTask