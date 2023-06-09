import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import FirstPage from "./firstpage/FirstPage";
import classes from "../src/app.module.scss";
import { FaTimes, FaBars,FaMoon,FaSun } from "react-icons/fa";
import { useState,useEffect } from "react";
import HeroesPage from "./heroespage/HerosPage";
import Footer from "./footerPart/Footer";
import  FlagImage1 from './otherImage/armFlag.jpg'
import  FlagImage2 from './otherImage/russianFlag.png'
import  FlagImage3 from './otherImage/gb.png'
import GalleryPage from "./gallerypage/GalleryPage"
import OtherInfos from "./otherInfos/OtherInfos";
import TimerBlock from './TimerBlock'
function App() {
  const [toggle, setToggle] = useState(false);
  const [switchLight,setSwitchLight] = useState(false);



useEffect(()=>{
  const data = JSON.parse(localStorage.getItem("switch light")) 
  if (data !== false) setSwitchLight(JSON.parse(data))  
},[])

useEffect(()=>{
  localStorage.setItem("switch light",JSON.stringify(switchLight))
  },[switchLight])

  return (
    <>
    
      <div className={classes.ToggleButton} onClick={() => setToggle(!toggle)}>
        {toggle ? <FaTimes /> : <FaBars />}
      </div>
      <div  className={switchLight ? classes.navBlockDark : classes.navBlockLight}  style={toggle?{left:"0%"}:{left:"-100%"}}>
      <button className={classes.switchButton} style={switchLight?{backgroundColor:"blue",color:"yellow"}:{backgroundColor:"yellow",color:"black"}} onClick={()=>setSwitchLight(!switchLight)}>{switchLight?<FaMoon/>:<FaSun />}</button>
      <div className={classes.clock}>  
{<TimerBlock />}
      </div>
        <div className={classes.buttonGroup} >
          <button><img src={FlagImage1}  alt="" /></button>
          <button><img src={FlagImage2}  alt="" /></button>
          <button><img src={FlagImage3}  alt="" /></button>
        </div>
      <ul>
        <li><a  href="/">Գլխավոր Էջ</a></li>
        <li><a href="/heroespage">Հերոսների Պատ</a></li>
        <li><a href="/otherinfo">Հավելյալ տեղեկություններ</a></li>
        <li><a href="/gallerypage">Պատկերասրահ</a></li>
      </ul>

    </div>
      <div className={classes.generalBlock} style={switchLight?{backgroundColor:"black"}:{backgroundColor:"white",color:"black"}}>
      <Router>
          <Routes>
            <Route exact path="/" element={<FirstPage switchLight = {switchLight}/>} />
            <Route path = "heroespage" element={<HeroesPage switchLight={switchLight} />} />
            <Route path = "otherinfo" element={<OtherInfos />} />
            <Route path = "gallerypage" element={<GalleryPage />} />
          </Routes>
        </Router>
      </div>
    <Footer switchLight = {switchLight}/>
    </>
  );
}

export default App;
