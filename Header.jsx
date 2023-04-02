import React from 'react'
import styles from './Header.module.css'
import {Link} from 'react-router-dom'
function Header(){
    return(
        <header className={styles.header}>
            <h1> HEADER</h1>

            
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Ram">Galeria</Link></li>
                <li><Link to="/">Episodios</Link></li>
                
            </ul>
        </header>
        
    )
}

export default Header