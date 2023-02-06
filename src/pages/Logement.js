import Header from '../shared/Header'
import Error from '../pages/Error';
import { useParams, Navigate } from "react-router-dom";
import { Logements } from "../datas/Logements";
import Carousel from '../componenents/Carousel/Carousel';
import CollapseLogement from '../componenents/CollapseLogement/CollapseLogement';
import Tags from '../componenents/Tags/Tags'
import Ratings from '../componenents/Ratings/Ratings';
import '../styles/Logements.css'



function Logement(){
    
        const { id } = useParams();
        const pageLogement = Logements.find((logement) => logement.id === id);

        return( 
           
           pageLogement ?
            
            <div>
                <Header />
                <Carousel slides={pageLogement.pictures} />
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
                        <Ratings rating={pageLogement.rating} />
                        </div>
                    
                </div>
                <div className='box_collapse'>
                    <div className='collapse_description'>
                        <CollapseLogement
                        title ='Description' 
                        description={pageLogement.description} />
                    </div>
                    <div className='collapse_equipement'>
                        <CollapseLogement
                        title='Equipements' 
                        description={pageLogement.equipments.map((equipment, index) =>{
                            return <li style={{listStyleType :'none'}} key={index}>{equipment}</li>
                        })}/>
                    </div>
                </div>
            </div> 
            
            :

            <Navigate to='/Error' replace={<Error />} />
        )
}
export default Logement