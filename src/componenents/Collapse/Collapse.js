import { useState } from "react";
import styles from '../Collapse/Collapse.module.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Collapse = ({title, description}) =>{

    const [collapse, setCollapse] = useState(false)
    const toggleCollapse = () => setCollapse((prevExpend) => !prevExpend)
    

    return(
        <article>
        <div className={styles.collapse}>
            <button onClick={toggleCollapse} className={styles.button_style}>
                <span>{title}</span> <span>{collapse ? <FaChevronUp /> : <FaChevronDown /> }</span>
            </button>
            {collapse && <div className={styles.content}>{description}</div>}
            
        </div>
        </article>
        
    )
}

export default Collapse;