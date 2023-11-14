import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'

const HomePage = () => {
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navbarlist}>
                <li className={styles.navbaritems}>
                    <Link to='/createuser' className={styles.navbarlink}>CreateUser</Link>
                </li>
                <li className={styles.navbaritems}>
                    <Link to='/user' className={styles.navbarlink}>User</Link>
                </li>
            </ul>

        </nav>
    )
}

export default HomePage

