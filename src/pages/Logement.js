import Header from '../shared/Header'
import { useParams } from "react-router-dom";
import { Logements } from "../datas/Logements";
import Carousel from '../componenents/Carousel/Carousel';


function Logement(slides){
    

        const { id } = useParams();
        const pageLogement = Logements.find((logement) => logement.id === id)
        

       

        return(
            
            
            <div>
                <Header />
                <Carousel slides={pageLogement.pictures} />
                
            </div>
        )
    
        
}

export default Logement