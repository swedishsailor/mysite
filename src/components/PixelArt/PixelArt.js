import React from 'react';
import styles from './PixelArt.scss';
import { Carousel } from 'react-responsive-carousel';
//import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class PixelArt extends React.Component {
    render() {
        return (
            <section className={styles.pixelArt}>
                <div className={styles.pixelArtContainer}>
                    <br />
                    <br />
                    <br />
                    <h1 className={styles.pixelartHeader}> PIXEL ART </h1>
                    <br />
                    <Carousel showArrows={true} className={styles.carousel} swipeable={true} autoPlay={3500} infiniteLoop={true}>
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
                            <img className={styles.carouselImg} src="https://i.postimg.cc/zBywpMh5/kamien.png"></img>
                        </div>
                        <div className={styles.carouselDiv}>
                            <img className={styles.carouselImg} src="https://i.postimg.cc/K86zWfqn/sd-tp.gif"></img>
                        </div>
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
                </div>
            </section>
        )
    }
} export default PixelArt;
