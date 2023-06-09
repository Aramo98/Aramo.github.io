import classes from "../firstpage/firstpage.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import SlideImage1 from '../villimage/Beniamin_29.jpg'
import SlideImage2 from '../villimage/Beniamin_13.jpg'
import SlideImage3 from '../villimage/Beniamin_19.jpg';
import LegendImage from '../villimage/Beniamin_32.jpg'
import {Helmet} from 'react-helmet'
import LegendBlock from "./legendBlock/LegendBlock";
import InfoBlock from "./infoblock/InfoBlock";

function FirstPage({switchLight}){
return(
    <>
    <Helmet>
      <title>Բարի գալուստ</title>
      <meta charSet="UTF-8" />

    </Helmet>
    <div className={classes.container}>
    <div className={classes.overlay}></div>
    <Carousel  className={classes.carousel}>

      <Carousel.Item className={classes.carouselItem}>
        <img
          className="d-block "
          src={SlideImage1}
          alt="First slide"
          style={{objectPosition:"center 23%"}}
        />
        <Carousel.Caption className={classes.caption}>
        <h2>Եկեղեցու կառուցումը</h2>
          <p>Որպես Կարևոր հիմնախնդիր</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.carouselItem}>
        <img
          className="d-block "
          src={SlideImage2}
          alt="Second slide"
          style={{objectPosition:"center 23%"}}
        />

        <Carousel.Caption className={classes.caption}>
          <h2>Իմանանք</h2>
          <p>Մեր պատմական վայրերը</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.carouselItem}>
        <img
          className="d-block"
          src={SlideImage3}
          alt="Third slide"
        />

        <Carousel.Caption className={classes.caption}>
        <h2>Ճանաչենք</h2>
          <p>
         մեր Հերոսներն
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
      <LegendBlock image= {LegendImage} text = {`Ըստ ավանդության՝ սկեսուրը հարսի խոնարհությունը փորձելու համար ձեռքի ճլորը՝ կավե փոքրիկ
                              աման, գցում է շիկացած թոնրի մեջ ու խնդրում նրան, որ հանի՝ «Խա'րս, ճլորը խա՛ն»։ Հարսը իրեն
                              նետում է թոնիրը և այրվում։ Այդ օրվանից գյուղի անունը մնում է Ճլոխան`}/>
          
          <InfoBlock lightDarkTheme = {switchLight}/>
    </>

)
}

export default FirstPage