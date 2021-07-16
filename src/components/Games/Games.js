import React from 'react';
import styles from './Games.scss';

class Games extends React.Component{
    render(){
        return(
            <section className={styles.games}>
                <br/>
                <h1 className={styles.gamesheader}> GAMES </h1>
                <div className={styles.gamesContainer}>
                    <div className={styles.game}><img className={styles.gamesImg} src="https://i.postimg.cc/hjvDLsvg/sd-Sorcerer.png"></img></div>
                    <div className={styles.game}><img className={styles.gamesImg} src="https://i.postimg.cc/XNKHKWMj/dimension-eye-logo.png"></img></div>
                    <div className={styles.game}><img className={styles.gamesImg} src="https://i.postimg.cc/nVv1J8v9/ml21.png"></img></div>
                    <div className={styles.game}><img className={styles.gamesImg} src="https://i.postimg.cc/8PPHhrB4/Skull-avatar.png"></img></div>
                </div>
            </section>
        )
    }

} export default Games;
