import React, { useState } from 'react';
import './CarouselStyle.css';
import { CarouselData } from './../../Data/CarouselData.js';
import { GoPrimitiveDot } from "react-icons/go";


// import Heading from '../Heading';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Carousel() {

    const [currentIndex, setcurrentIndex] = useState(1);
  
   const moveDots = (index) =>{
       setcurrentIndex(index);
   }

    return (
        <div className="Carousel__div_main">
            <div className="carouselInner_div" style={{ backgroundImage: `url(${CarouselData[currentIndex + 1].img})` }}>
                <div className="center__carousel">
                    <div className="heading_carousel_1">
                        <h2>{CarouselData[currentIndex + 1].heading}</h2>
                    </div>
                    <div className="heading_carousel_2">
                        <h2>{CarouselData[currentIndex + 1].StrongHeading}</h2>
                    </div>
                    <div className="button_carousel">
                        <button>{CarouselData[currentIndex].buttonName}</button>
                    </div>
                    <div className="carousel__dot">
                        {/* https://stackoverflow.com/questions/44325272/getting-the-id-of-a-clicked-element-from-rendered-list */}
                        {Array.from({length:3}).map((index, items) =>{
                             return (
                             <div className="MyDots__Class" onClick={() => moveDots(index+1)}>
                                 <GoPrimitiveDot className={currentIndex === index + 1 ? 'Dot active' : 'Dot' } size={28} />
                            </div>
                             )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
