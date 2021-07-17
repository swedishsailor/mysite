import React from 'react';
import styles from './Games.scss';

class Games extends React.Component{
    render(){
        return(
            <section className={styles.games}>
                
                <br/>
                <h1 className={styles.gamesheader}> GAMES </h1>
                <div className={styles.gamesContainer}>
                    <div className={styles.game}><img className={styles.gamesImg} src="https://i.postimg.cc/hjvDLsvg/sd-Sorcerer.png"></img>
                        <div className={styles.gamesDescription}>
                            <h3 className={styles.gamesDescriptionText}> Salve Devito </h3>
                            <p  className={styles.gamesDescriptionText}> Salve devito is a .....</p>
                            <p className={styles.gamesDescriptionText}> Check how the work goessss</p>
                        </div>
                    </div>
                    <div className={styles.game}><img className={styles.gamesImg} src="https://i.postimg.cc/XNKHKWMj/dimension-eye-logo.png"></img>
                    <div className={styles.gamesDescription}>
                            <h3  className={styles.gamesDescriptionText}> Dimension Eye </h3>
                            <p  className={styles.gamesDescriptionText}> Dimension eye is a .....</p>
                            <p  className={styles.gamesDescriptionText}> Click for quick demo :)</p>
                        </div>
                    </div>
                    <div className={styles.game}><img className={styles.gamesImg} src="https://i.postimg.cc/nVv1J8v9/ml21.png"></img>
                    <div className={styles.gamesDescription}>
                            <h3  className={styles.gamesDescriptionText}> Milion Lasers </h3>
                            <p  className={styles.gamesDescriptionText}> Milion laser is a short game, made in one week for Brackey's Game Jam 2021.1, it's a really hard, co-op action game </p>
                            <p  className={styles.gamesDescriptionText}> Click to play :)</p>
                        </div>
                    </div>
                    <div className={styles.game}><img className={styles.gamesImg} src="https://i.postimg.cc/8PPHhrB4/Skull-avatar.png"></img>
                    <div className={styles.gamesDescription}>
                            <h3  className={styles.gamesDescriptionText}> Salve Devito - Heroes </h3>
                            <p  className={styles.gamesDescriptionText}> Salve devito is a .....</p>
                            <p  className={styles.gamesDescriptionText}> Check how the work goessss</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

} export default Games;
