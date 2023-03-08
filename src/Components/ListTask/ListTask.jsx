import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import {TaskContent} from './../../context/TaskContent'
import { useContext } from 'react';

/* Icons */
import { VscTrash } from "react-icons/vsc";

function ListTask() {

    const {datos,deleteTask} = useContext(TaskContent);

    return (

        <>
            {datos.map((task,index) => (

                <Alert key={index} className='mt-3 d-flex justify-content-between align-items-center' variant='success'>

                    {task.title}

                    <Button onClick={() => deleteTask(index)} className='mx-2' variant="danger">
                        <VscTrash/>
                    </Button>
                </Alert>


            ))}
        </>
    )
}

export default ListTask