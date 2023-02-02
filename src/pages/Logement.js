import Header from '../shared/Header'
import Error from '../pages/Error';
import { useParams, Navigate } from "react-router-dom";
import { Logements } from "../datas/Logements";
import Carousel from '../componenents/Carousel/Carousel';
import '../styles/Logements.css'
import Collapse from '../componenents/Collapse/Collapse';




function Logement(){
    

        const { id } = useParams();
        const pageLogement = Logements.find((logement) => logement.id === id);
        

        return( 
           
           pageLogement ?
            
            <div>
                
                <Header />
                <Carousel slides={pageLogement.pictures} />
                <div className='box_tag_rating'>
                    <div>
                        <h1>{pageLogement.title}</h1>
                        <span>{pageLogement.location}</span>
                    </div>
                    <div>
                        <img src={pageLogement.host.picture} alt=''></img> 
                    </div>
                </div>
                <div className='box_collapse'>
                <Collapse title ='Description' description={pageLogement.description} />
                <Collapse title ='Equipement' description={pageLogement.equipments} />
                </div>
                
                
            </div> 
            
            :

            <Navigate to='/Error' replace={<Error />} />
        )
    
        
}

export default Logement