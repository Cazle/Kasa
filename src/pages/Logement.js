import Header from '../shared/Header'
import { useParams } from "react-router-dom";
import { Logements } from "../datas/Logements";
import Carousel from '../componenents/Carousel/Carousel';


function Logement(slides){
    

        const { id } = useParams();
        const pageLogement = Logements.find((logement) => logement.id === id)
        console.log(pageLogement)

       

        return(
            
            
            <div>
                <Header />
                <Carousel slides={pageLogement.pictures} />
                <div className='title'>{pageLogement.title}</div>
            </div>
        )
    
        
}

export default Logement