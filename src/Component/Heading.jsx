import React from 'react';
import { CarouselData } from './../Data/CarouselData.js';

function Heading(props) {


    const displayContent = () => {
        return (
            `
            <div className="heading_carousel">
            <h2>{props.CarouselData[currentIndex].heading}</h2>
        </div>
        <div className="heading_carousel">
            <h2>{props.CarouselData[currentIndex].StrongHeading}</h2>
        </div>
        <div className="button_carousel">
            <button>{props.CarouselData[currentIndex].buttonName}</button>
        </div>
                
            `
        )
    }



    return (
        <>
            < div className="carousel__Content_text" >
                <div className="h">{props}</div>

                {CarouselData.map(displayContent)}

                {/* */}
            </div >
        </>
    )
}

export default Heading
