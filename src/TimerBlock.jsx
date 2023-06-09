import { FaClock } from "react-icons/fa"
import { useState,useEffect } from "react"
function TimerBlock(){
const [hour,setHour] =  useState();
const [minute,setMinute] =  useState();
const [second,setSecond] =  useState();
 useEffect(()=>{
    setInterval(()=>{
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
   setHour(h);
   setMinute(m);
   setSecond(s)
  
    },1000)
 },[])
return(
<>
<span style={{fontSize:"30px",display:"flex",gap:"15px"}}>
 <FaClock />   {hour}:{minute<=9 ? "0" + minute:minute}
    :{second<=9?"0"+ second:second}
    <p>{hour>=12?"AM":"PM"}</p></span>
</>
)
}

export default TimerBlock