import FullStar from '../../assets/full_star.png'
import EmptyStar from '../../assets/empty_star.png'
import styles from '../Ratings/Ratings.module.css'

function Ratings ({rating}) {

    const stars = [1, 2, 3, 4, 5];

    return(
        <div className={styles.star_rating}>
            {stars.map((i) =>{
                return(
                    <img src={i > rating ? EmptyStar : FullStar} alt='' />
                )
            })}
        </div>
    )

}

export default Ratings