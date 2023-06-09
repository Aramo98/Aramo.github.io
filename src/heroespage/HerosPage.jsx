import {Helmet} from 'react-helmet';
import {heroesData} from './data';
import HeroesItem from './HeroesItem';
import classes from './heroespage.module.scss';
import { useState } from 'react';
import  Form  from 'react-bootstrap/Form';

function HeroesPage({switchLight}){
  const [searchNames,setSearcNames] = useState(heroesData)
 const filterNames  = (evt)=>{
const search = evt.target.value.toUpperCase();
const filteredNames = heroesData.filter((hero)=>hero.name.toUpperCase().includes(search));
setSearcNames(filteredNames)
 }
return (
    <>
    <Helmet>
      <title>Հերոսների Պատ</title>
      <meta charSet="UTF-8" />
     <meta name="author" content="Aram Margaryan"/>
    </Helmet>
   <div className='container-fluid' id={classes.heroesBlock}>
<div className="w-100  ms-0 d-flex justify-content-start align-items-center " id ={classes.searchBox}>
<Form className='w-75'>
<Form.Group>
  <Form.Control onChange = {(e)=>filterNames(e)} placeholder = "Փնտրել Ձեզ հետաքրքրող Հերոսին" />
</Form.Group>
</Form>

</div>
<div className=" h-auto d-flex justify-content-center align-items-start flex-wrap gap-3">
{searchNames.map(hero=><HeroesItem darkLightMode = {switchLight} key={hero.id} hero={hero}/>)}
</div>

   </div>
    </>
)
}

export default HeroesPage