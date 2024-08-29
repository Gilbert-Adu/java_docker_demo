import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [javaData, setJavaData] = useState('');

  useEffect(() => {
    const getString = async() => {
      try {
        const response = await axios.get('http://localhost:8080/api/hello');
        setJavaData(response.data)
  
      }catch(err) {
        console.log(err.message)

      }
  

    }
    getString();

  }, [])

  return (
    <div className="App">
      Java test demo app
      Our data: {javaData}
    </div>
  );
}

export default App;