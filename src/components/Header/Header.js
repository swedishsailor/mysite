import React from 'react';
import styles from './Header.scss';

class Header extends React.Component{
    render(){
        return(
            <section>
                <h1 className={styles.mainHeader}> SwedishSailor </h1>
                <h3 className={styles.nameHeader}>Kamil Żygowski</h3>
            </section>
        )
    }

}export default Header;