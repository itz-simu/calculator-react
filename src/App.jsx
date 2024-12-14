// import { useState } from "react";
// import './App.css'

// const calculator = () => {
// const [input, setInput] = useState("");
// const buttons = [
//     "AC", 
//     "7", "8", "9","/",
//     "6", "5", "4","*",
//     "3", "2", "1","-",
//     ".", "0", "=","+",
//     "cl"

// ];
// const handleButtonClick = (value) => {
//     if(value === "AC") {
//         setInput("");
//     } else if
// }
  
// }

import { useState } from 'react' 
import './App.css' 
//import clicksound from "../public/clicksound.mp3";

function App(
) { 
const [inputvalue, setInputvalue] = useState(""); 
const audio = new Audio('./clicksound.mp3')
 //const count =useRef(0);
 const buttons = [  
 "7", "8", "9", "/", 
 "4", "5", "6", "*", 
 "1", "2", "3", "-", 
 "0", "C", "=", "+", 
 "cl","00", "%"
 ]
 
 function handleclick(e){ 
    let innerhtml= e.target.innerHTML
    // console.log(count , count.current)
    // count.current.play()
    console.log(innerhtml)
 
 if (innerhtml == "=") { 
    if(inputvalue){
    setInputvalue(eval(inputvalue).toString())
    }else{
        alert("please enter sometime")
    }
}else{
    if(innerhtml=="C"){
        setInputvalue("")
    }else{
        if(innerhtml=="cl"){
        setInputvalue(inputvalue.slice(0,-1))
    }else{
        console.log("add")
        setInputvalue((inputvalue)=> inputvalue += innerhtml)
    }
}
}

}
console.log(typeof inputvalue)
audio.play();
 
 return ( 
    <>
    <div className='w-[300px] bg-red-100 rounded-lg drop-shadow-md border border-black p-1 mx-auto my-[50px] '>
    <div><input type="text" value={inputvalue} className='h-14 w-full border border-pink-300 mb-2 bg-slate-100' readOnly={true}/>
        </div> 
        <div className='grid grid-cols-4 grid-rows-5 gap-1 h-[200px] bg-cyan-900'>
            {buttons.map((j)=> {

            return <button key={j} className="border border-black bg-blue-500 text-white p-1 rounded hover:bg-blue-600 tranition" onClick={handleclick}>{j}</button>
                
            })}
            
            </div>   
    </div>
     {/* <audio src={clicksound} controls></audio> 
   
    <button onClick={()=> count.current +=1}>change</button>
  */}
 </>

        );
    };
export default App;