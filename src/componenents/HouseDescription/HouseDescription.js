import Tags from "../Tags/Tags"
import Ratings from "../Ratings/Ratings"
import { useParams } from "react-router-dom"
import { Logements } from "../../datas/Logements";

function HouseDescription(){

    const { id } = useParams();
    const pageLogement = Logements.find((logement) => logement.id === id);



    return(
        <div className='box_tag_rating'>
                    <div className='title_location'>
                        <h1>{pageLogement.title}</h1>
                        <span>{pageLogement.location}</span>
                        
                        <Tags tag={pageLogement.tags.map((tagLogement, i) =>{
                            return(<div key={i}>{tagLogement}</div>)
                        })}/>
                    </div>
                    <div className='picture_rating'>
                        <h2>{pageLogement.host.name}</h2> 
                        <img src={pageLogement.host.picture} alt=''></img>
                    </div>
                        <Ratings rating={pageLogement.rating} />
                    
        </div>
    )
}

export default HouseDescription