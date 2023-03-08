import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


function ListTask({tasks,deleteTask}) {

    if (tasks.length == 0) {
        <h1>no hay tareas</h1>
        
    }
    
    return (

        <>
            {tasks.map((task,index) => (

                <Alert key={index} className='mt-3 d-flex justify-content-between align-items-center' variant='success'>

                    {task.title}

                    <Button onClick={() => deleteTask(index)} className='mx-2' variant="danger">Delete</Button>
                </Alert>


            ))}
        </>
    )
}

export default ListTask