import React from 'react';
import styles from './Games.scss';
import {Button} from './GamesElements'; 

class Games extends React.Component {
    render() {
        return (
            <section className={styles.games} id="/games">

                <h1 className={styles.gamesheader}> GAMES </h1>
                <div className={styles.gamesContainer}>
                    <Button to="/salvedevito" className={styles.game}><img className={styles.gamesImg1, styles.gamesImg} src="https://i.postimg.cc/hjvDLsvg/sd-Sorcerer.png"></img>
                        <div className={`${styles.gamesDescription} ${styles.first}`}>
                            <br />
                            <h3 className={styles.gamesDescriptionHeader}> Salve Devito </h3>
                            <img className={styles.descriptionImg} src="https://i.postimg.cc/FH745khH/salvedevito3.png"></img>
                            <p className={styles.gamesDescriptionText}> MMO RPG game, which tells us story about magic world of late middle ages, where you can find magical animals, demonic powers, mythical creatures and much, much more...
                                {/*Salve devito is a mmo rpg game. Choose your character's class, get your weapon and go ahead, explore, fish, 
                            solve puzzles, every single thing you see is a key to something.. Don't even think about it too long just go and ask Sphinx about everyhting!*/}</p>
                            <p className={styles.gamesDescriptionText2}> Click the image for more info</p>
                        </div>
                    </Button>
                    <div className={styles.game}><img className={styles.gamesImg2, styles.gamesImg} src="https://i.postimg.cc/XNKHKWMj/dimension-eye-logo.png"></img>
                        <div className={`${styles.gamesDescription} ${styles.second}`}>
                            <br />
                            <h3 className={styles.gamesDescriptionHeader}> Dimension Eye </h3>
                            <img className={styles.descriptionImg} src="https://i.postimg.cc/gjvCs3yg/DE.png"></img>
                            <p className={styles.gamesDescriptionText}> 2D platformer game, interesting story mixed with unusual mechanics. Game story is about a society where your strength is determined by your occular power!
                                {/*Dimension eye is a platformer game telling story about society of "eye power", where the strongest eye is the dimension eye, which controls physical matter, what about rest of the eyes? Find and check them out :)*/}</p>
                            <p className={styles.gamesDescriptionText2}> Click the image for quick demo :)</p>
                        </div>
                    </div>
                    <div className={styles.game}><img className={styles.gamesImg3, styles.gamesImg} src="https://i.postimg.cc/nVv1J8v9/ml21.png"></img>
                        <div className={`${styles.gamesDescription} ${styles.third}`}>
                            <br />
                            <h3 className={styles.gamesDescriptionHeader}> Milion Lasers </h3>
                            <img className={styles.descriptionImg} src="https://i.postimg.cc/2y2wC6Cz/ML.png"></img>
                            <p className={styles.gamesDescriptionText}> Milion lasers is a short game, made in one week for Brackey's Game Jam 2021.1, it's a really hard, co-op action game focused on avoiding obstacles in front of you and deal with enemies around you.
                                {/*The main objective of this game is to control the distance bar (on the right-bottom of the screen) and try to avoid all the obstacles on your way.*/} </p>
                            <p className={styles.gamesDescriptionText2}> Click the image to play :)</p>
                        </div>
                    </div>
                    <div className={styles.game}><img className={styles.gamesImg4, styles.gamesImg} src="https://i.postimg.cc/8PPHhrB4/Skull-avatar.png"></img>
                    <div className={styles.gamesDescription}>
                        <div className={styles.gamesDescriptioninner}>
                            <br />
                            <h3 className={styles.gamesDescriptionHeader}> Salve Devito - Heroes </h3>
                            <img className={styles.descriptionImg} src="https://i.postimg.cc/PqSjVGN5/window.png"></img>
                            <p className={styles.gamesDescriptionText}> Salve devito - heroes is a project of browser, interactive clicker game. Game is in pre-pre-alpha. More information soon :)</p>
                            <p className={styles.gamesDescriptionText2}> Click the image for more info</p>
                        </div>
                        </div>
                    </div>           
                </div>
                <div className={styles.underContainer}></div>

            </section>
        )
    }

} export default Games;
