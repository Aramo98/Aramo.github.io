import classes from '../legendBlock/legendBlock.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function LegendBlock ({image,text, max = 15}){

  const [show,setShow] = useState(true);
 
  if (text.length<= max) {
    return(
    <p>{text}</p>
    ) 
  }



return(
    <section className={classes.LegendBlock}>
    <div className='bg-danger col-sm-6 col-md-8 col-lg-6 col-xl-7' id={classes.imgBlock}>
          <img src={image} className='card-img-top' alt="" />
          <div className={classes.overlay}>
            <h2 className="text-center text-white">Ավանդազրույց</h2>
            <p className='text-center text-white'>{show?`${text.substring(0,max)} ...`:text}  <a href="/" onClick={(evt)=>{
              evt.preventDefault();
              setShow(!show)
            }} style={show?{color:"white",textDecoration:"none"}:{color:"rgb(251, 255, 0)",textDecoration:"none"}}>{show?"կարդալ ավելին":"Փակել"}</a></p>
          </div>
    </div>
  </section>
)
}

export default LegendBlock