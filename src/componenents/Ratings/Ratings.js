import FullStar from '../../assets/full_star.png'
import EmptyStar from '../../assets/empty_star.png'
import styles from '../Ratings/Ratings.module.css'

function Ratings ({rating}) {

    const stars = [];

    for (let i = 0; i < 5; i++){
        if (i < rating){
            stars.push(<img src={FullStar} alt='fullstar' key={i}/>)
        }
        else{
            stars.push(<img src={EmptyStar} alt='emptystar' key={i}/>)
        }
    }

    return(
        <div className={styles.star_rating}>{stars}</div>
    )

}

export default Ratings