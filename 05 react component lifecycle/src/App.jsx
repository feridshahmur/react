import { useEffect, useState } from 'react';
import './App.css'
import Cards from './components/Cards'
import controller from './services';
import Search from './components/SearchForm';

function App() {
  const [search, setsearch] = useState("")

  const [recepts, setrecepts] = useState([])
  const getrecepts = async()=>{
    const data = await controller.getAllData("recipes");
    setrecepts(data);
  }
  useEffect(() => {
    getrecepts()
  
    
  }, [])

  return (<>
  <h1 style={{color : "red", textAlign: "center"}}><b>Farid Chef's menu</b></h1>
  <Search search = {search} setsearch = {setsearch}/>
    <div className='cards'>
      <Cards recepts = {recepts} setrecepts = {setrecepts} />
    </div>
    </>
  )
}

export default App
