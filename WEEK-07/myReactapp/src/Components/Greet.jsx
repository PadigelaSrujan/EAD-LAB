import { useState } from "react";

function Greet()
{
    const[name,setName]=useState("");
    return(
        <div>
            <h1>Welcome</h1>
            <input id="inp" type="text" placeholder="enter your name"></input>
            <button onClick={()=>setName("Hello "+inp.value)}>click me</button>
            <h1>{name}</h1>
        </div>
    )
}
export default Greet;