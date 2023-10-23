import "./App.css";
import Child from "./components/child";
import { createContext, useState } from "react";
export let userContext=createContext();
function App() {
  let [name,setName]=useState("Chiraag");
  let changeName=(newUser)=>{
    setName(newUser)
  }
  return (
    <userContext.Provider value={{name:name,changeName:changeName}}>
      <>
        This is coming from {name} <br></br>
        <Child />
      </>
    </userContext.Provider>
  );
}

export default App;
