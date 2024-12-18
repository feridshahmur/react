import { useState } from 'react';
import './App.css'
import Form from './components/Form'
import Table from './components/Table'

function App() {
  
  const [students, setStudents] = useState([]);
  return (
    <>
      <Form/>
      <hr />
      <Table/>
    </>
  )
}

export default App
