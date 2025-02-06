[06-02-2025 09:56] Dimple: import React from "react";

import './App.css';

const Welcome=()=><h1 className="message">Hello Dimple</h1>

function App() {
  return(
    <div className="App">
    <Welcome/>  
    </div>
  )
}
export default App;
[06-02-2025 10:02] Dimple: .message{
  color: blue;
  background-color: aquamarine;
  font-size: 40px;
  text-align: center;
  width: 30%;
  margin-left: 80px;
}
[06-02-2025 10:18] Dimple: import React from "react";

// import './App.css';
import Welcome from './Welcome'

const App=()=>{
  return(
    <div style={{textAlign:'center' ,color:'red'}}> 
    <Welcome name="Dimple" greeting="Hello"/>
    <Welcome/>
    </div>
  )
}
export default Welcome;
[06-02-2025 10:20] Dimple: import React from "react";

const Welcome=(props)=>{
    const{name ,greeting}=props;

    return(
        <h1 className="message">{greeting},{name}</h1>
    )
}

export default App;
