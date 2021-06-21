import { useState } from "react";

export function MyButton(){
    const [counter, incCounter] = useState(0)
    function addCounter(){
        console.log(counter)
        incCounter(counter+1)
  
    }
    return(
    <button onClick={addCounter}>{counter}</button>
    );
}
