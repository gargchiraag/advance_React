import React from "react";
import { useContext } from "react";
import { userContext} from "../App";
function Child() {
  const {changeName} = useContext(userContext);
  let newName="Chiraag Garg"
  return (
    <>
      this is coming from child <br></br>
      <button onClick={()=>changeName(newName)}>Click Me</button>
    </>
  );
}

export default Child;
