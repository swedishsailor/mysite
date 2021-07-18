import React from 'react';
import styles from './PixelArt.scss';
import {Carousel} from 'react-responsive-carousel';
//import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class PixelArt extends React.Component{
    render(){
        return(
            <section className={styles.pixelArt}>
                <br/>
                <h1 className={styles.pixelartHeader}> Pixel Art </h1>
                <Carousel showArrows={true} className={styles.carousel} swipeable={true} autoPlay={2000}>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/85MGX7Ln/de-coin.gif"></img>
                    </div>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/fLBCNK73/kraczek1.png"></img>
                    </div>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/43Hc7nM1/lampa.gif"></img>
                    </div>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/NFsL40NS/royal-sqm-v1.png"></img>
                    </div>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/K86zWfqn/sd-tp.gif"></img>
                    </div>
                </Carousel>
                <Carousel showArrows={true} className={styles.carousel2} swipeable={true} autoPlay={2000}>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/C1snVqJ2/deathforce.gif"></img>
                    </div>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/QxZr17dw/kamyczki.png"></img>
                    </div>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/c4DtFQGm/lampkanascienna.gif"></img>
                    </div>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/h4sXG9vB/sd-dead-Sorc.gif"></img>
                    </div>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/N0RMvXSZ/trawka2.png"></img>
                    </div>
        </Carousel> 
               <Carousel showArrows={true} className={styles.carousel3} swipeable={true} autoPlay={2000}>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/QM0gDcHz/wooden-sqm-v1.png"></img>
                    </div>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/Yqp78q0b/jackgif.gif"></img>
                    </div>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/DwHJTnZ4/mana-fluid1.png"></img>
                    </div>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/X7DXf491/sd-poison-Shape.gif"></img>
                    </div>
                    <div className={styles.carouselDiv}>
                        <img className={styles.carouselImg} src="https://i.postimg.cc/RhZVtDhz/sd-dog.gif"></img>
                    </div>
        </Carousel> 
            </section>
        )
    }
} export default PixelArt;