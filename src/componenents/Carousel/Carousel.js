import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from '../Carousel/Carousel.module.css'
import { Logements } from "../../datas/Logements";


function Carousel ({slides}){

    
    const [currentImage, setCurrentImage] = useState(0);
    
    const goToPrevious = () =>{
        const isFirstSlide = currentImage === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentImage -1;
        setCurrentImage(newIndex);
    }
    const goToNext = () => {
        const isLastSlide = currentImage === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentImage +1;
        setCurrentImage(newIndex)
    }

    return(
    <div className={styles.container_carousel} key={Logements.id}>
        <div className={styles.leftArrow} onClick={goToPrevious}><FaChevronLeft /></div>
        <div className={styles.rightArrow} onClick={goToNext}><FaChevronRight /></div>
        <img className={styles.carousel_image} src={slides[currentImage]} alt='' ></img>
        <span className={styles.index_slide}>{currentImage +1}/{slides.length}</span>
    </div>
    ) 
}

export default Carousel;