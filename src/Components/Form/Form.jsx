import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';

import {TaskContent} from './../../context/TaskContent'

/* icons */

import { VscAdd} from "react-icons/vsc";


function Form() {

    const {createTask} = useContext(TaskContent)

    const [title, setTitle] = useState()


    const handleSubmit = (e) => {
        e.preventDefault();
    
        createTask(title);

        /* setea title a vacia */
        setTitle('');
    }

    return (
      
        <form className='d-flex' onSubmit={handleSubmit} method="post">

            <input className='form-control' placeholder='Task' type="text" onChange={
                (e) => setTitle(e.target.value)
            } value={title ? title: ''} autoFocus/>

            <Button type='submit' className='mx-2' variant="primary">
                <VscAdd/>
            </Button>

        </form>
       
    )
}

export default Form