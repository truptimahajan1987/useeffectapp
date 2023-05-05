
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState(2);
  const [data, setData] = useState([]);

  useEffect( () => {
    async function getData(){
      const get =await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
      const res =await get.json();
      setData(res);
    }
    getData();
   
  }, [state])

  document.title = `(${state}) Employee`
    return (
    <div className="App">
      <button onClick={() => setState(state+2)}>click me {state}</button>
      {
        data.map((element,index)=>{

          return(
            <div className='details'>
              <h4>{element.firstName}</h4>
              <h4>{element.lastName}</h4>
              <h4>{element.email}</h4>
              </div>
          );
        })
      }

    </div>
  );
}

export default App;
