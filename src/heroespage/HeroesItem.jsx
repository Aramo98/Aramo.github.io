import { FaStar } from "react-icons/fa"
import classes from './heroespage.module.scss'
function HeroesItem({hero,darkLightMode}){
return(
    <>
    
    <div style= {darkLightMode?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}} className='card d-flex justify-content-center align-items-center ' id={classes.heroesBlock}>
    <div style={darkLightMode?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}} className="card-header border-bottom-0 d-flex">
      <h4>{hero.surname} {hero.name}</h4>  
    </div>
    <div className='card-body ' id={classes.imgBox}>
        <img src={hero.img} alt={hero.img} className="card-img-top"  id={classes.img}/>
        <div className={classes.OrdensBlock}>
            <img src={hero.ordens} alt="" />
        </div>
    </div>
    <div className="card-footer d-flex justify-content-center align-items-center flex-column">
     <p>{hero.birth}-{hero.death} թթ</p>
    <span><FaStar /> Զինվ. կոչում / մսն.: {hero.MilitaryRank}</span>
    </div>
   

</div>
    </>
)
}

export default HeroesItem