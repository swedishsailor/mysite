import React from 'react';
import styles from './PixelArt.scss';

class PixelArt extends React.Component{
    render(){
        return(
            <section className={styles.pixelArt}>
                <br/>
                <h1 className={styles.pixelartHeader}> Pixel Art </h1>
            </section>
        )
    }
} export default PixelArt;