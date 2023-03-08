import React from 'react'
import ReactDOM from 'react-dom/client'
import Task from "./Components/Card/Task";

/* Context */
import {TaskContentProvider} from './context/TaskContent'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      
      <TaskContentProvider>

        <Task/>
      </TaskContentProvider>
      
  </React.StrictMode>,
)
