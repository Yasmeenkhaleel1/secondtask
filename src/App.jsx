
import { useState } from "react";
//import Counter from "./Counter";

function App() {

  useState();
  let[count,setCount]=useState(0);
  const changeCounter=()=>{
   setCount(count+1);
  }

  return (
  <>

<button onClick={changeCounter}> yasmeen khaleel {count}</button>

</>

  );
}

export default App
