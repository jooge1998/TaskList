import { useState } from 'react';
import Button from 'react-bootstrap/Button';


function Form({createTask}) {

    const [title, setTitle] = useState()


    const handleSubmit = (e) => {
        e.preventDefault();
    
        createTask(title);

        /* setea title a vacia */
        setTitle('');
    }

    return (
        <>
            <form className='d-flex' onSubmit={handleSubmit} method="post">

                <input className='form-control' placeholder='Task' type="text" onChange={
                    (e) => setTitle(e.target.value)
                } value={title} autoFocus/>

                <Button type='submit' className='mx-2' variant="primary">Add</Button>
            </form>
        </>
    )
}

export default Form