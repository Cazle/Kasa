import { useState } from "react";
import styles from '../Collapse/Collapse.module.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'


const Collapse = ({title, description, className}) =>{

    const [collapse, setCollapse] = useState(false)
    const toggleCollapse = () => setCollapse((prevExpend) => !prevExpend)
    

    return(
            <div className={className}>
                <button onClick={toggleCollapse} className={styles.button_style}>
                    <span>{title}</span> <span>{collapse ? <FaChevronUp /> : <FaChevronDown /> }</span>
                </button>
                {collapse && <div className={styles.content}>{description}</div>}
            </div>
        
        
    )
}

export default Collapse;