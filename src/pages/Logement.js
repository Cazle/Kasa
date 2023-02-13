import Error from '../pages/Error';
import { useParams, Navigate } from "react-router-dom";
import { Logements } from "../datas/Logements";
import Carousel from '../componenents/Carousel/Carousel';
import HouseDescription from '../componenents/HouseDescription/HouseDescription';
import '../styles/Logements.css'    
import Collapse from '../componenents/Collapse/Collapse';




function Logement(){
    
        const { id } = useParams();
        const pageLogement = Logements.find((logement) => logement.id === id);

        return( 
           
           pageLogement ?
            
            <div>
                <Carousel slides={pageLogement.pictures} />
                <HouseDescription />
                <div className='box_collapse'>
                    <div className='collapse_description'>
                        <Collapse
                        title ='Description'
                        description={pageLogement.description} />
                    </div>
                    <div className='collapse_equipement'>
                        <Collapse
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