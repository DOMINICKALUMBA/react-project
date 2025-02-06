import { useState } from "react";

const Counter = () =>{
    const [Count,setCount] =useState(0);

    return <div>
        
        <p>you clicked me : {Count}</p>
        <button onClick={() => setCount(Count + 1)}>increament</button>
        <button onClick={() => setCount(Count - 1)}>decreament</button>

    </div>
};

export default Counter;