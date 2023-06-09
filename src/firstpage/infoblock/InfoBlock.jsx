

import { FaUsers,FaWater,FaChartArea } from "react-icons/fa";
import classes from "../infoblock/infoblock.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
function InfoBlock ({lightDarkTheme}){
    const resultData = [

        {
            id:1,
            resultIcon: <FaChartArea/>,
           resultCounter: 8.6 + "կմ²",
           resultName:"Մակերես"
        },{
            id:2,
            resultIcon: <FaWater/>,
           resultCounter: 1540 + "մ",
           resultName:"ԲԾՄ"
        },
        {
            id:3,
            resultIcon: <FaUsers/>,
           resultCounter: 750,
           resultName:"Բնակչություն"
        },

    ]
 return (
<>
<div className="container " id={classes.cont}>
   <h1 style={lightDarkTheme?{color:"white"}:{color:"black"}}>Ցուցանիշները ըստ 2014 թ-ի տվյալների</h1>

{resultData.map((result)=>{
    return(
    <>
<div key={result.id} className="row" id={classes.MutualBlock}>
<div style={lightDarkTheme?{backgroundColor:"gray",color:"white"}:{backgroundColor:"white",color:"black"}}  className="col-sm-12 col-md-10 col-lg-4"  id={classes.resultBlock}>
        <h2>{result.resultName}</h2>
        <span>{result.resultIcon}</span>
        <p>{result.resultCounter}</p>
    </div>
</div>      
    </>
    )
})}

</div>
</>
 )
}

export default InfoBlock 
