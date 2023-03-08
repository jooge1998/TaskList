
/* boostrap */
import Card from 'react-bootstrap/Card';


/* componentes */
import ListTask from "../ListTask/ListTask";
import Form from "./../Form/Form";


function Task() {

  return (

    <Card className='my-5' style={{ width: '28rem' }}>
      <Card.Body>

        <Form  />

        {/* task list */}
        <ListTask />

      </Card.Body>
    </Card>

  );
}

export default Task;