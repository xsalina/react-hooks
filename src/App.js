import React,{useState} from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <button onClick={()=> setCount (count - 1)}>减去</button>
          <button onClick={()=> setCount (count + 1)}>加上</button>
          <p>you click {count} times</p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    </div>
  );
}

export default App;
