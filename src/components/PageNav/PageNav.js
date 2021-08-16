import { Link} from 'react-router-dom';
import React from 'react';
import styles from './PageNav.scss';

const PageNav = () => (
    <nav className={styles.component}>
        <Link className={styles.link} exact to={'/'} activeClassName='active'>Home</Link>
        <Link className={styles.link} to={'/games'} activeClassName='active'>Games</Link>
        <Link className={styles.link} to={'/games'} activeClassName='active'>PixelArt</Link>
        <Link className={styles.link} to={'/games'} activeClassName='active'>Contact</Link>
    </nav>
);

export default PageNav;