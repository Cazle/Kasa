import styles from '../Tags/Tags.module.css'

function Tags({tag}){
    return(
        <div className={styles.tag_container}>
            <div className={styles.tagOne}>{tag}</div>
        </div>
    )
}

export default Tags