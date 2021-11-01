import React from 'react';
import './HomeImgGallary.css';
// import { PhotosGallary } from './../../Data/PhotosGallary.js';

function HomeImgGallary(props) {


    let Data = [

        {
            id: 1,
            url: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/files/young-beautiful-woman-looking-trendy-girl-casual-summer-clothes-positive-funny-model-winking_720x.jpg?v=1606209527',
            text: 'Women'
        },
        {
            id: 2,
            url: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/files/bag2_360x.jpg?v=1581730050',
            text: 'Acessories'
        },
        {
            id: 3,
            url: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/files/lemai3020112688_m4_2-0_360x.jpg?v=1606229788',
            text: 'Footware'
        },
        {
            id: 4,
            url: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/files/p24-21_360x.jpg?v=1581731327',
            text: 'Watches'
        },
        {
            id: 5,
            url: 'https://cdn.shopify.com/s/files/1/0332/6420/5963/files/lemai3020112688_m4_2-0_360x.jpg?v=1606229788',
            text: 'Footware'
        },
    ];


    return (
        <>
            <div className="container my__container_div ">
                <div className="Img_gallary">

                    {Data.map((items, index) => {
                        return (
                            <>
                                <div className="img__img_" key={index} >
                                    <img src={items.url} alt='Img-0' style={{ width: '100%' }} />
                                </div>
                                {/* <div className="img_text">
                                 {items.text}
                                </div> */}
                            </>
                        )
                    })}
                </div>

            </div>
        </>
    )
}


export default HomeImgGallary
