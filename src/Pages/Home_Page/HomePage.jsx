import React from 'react';
import './Style-Home/Stylehome.css';

function HomePage() {
    return (
        <div>
            <section className="myCarosule first_Section">
                {/* carosule section  */}
                {/* <Carousel /> */}
                home page is hear
            </section>
            <section className="myImg_Gridlyaout second_Section">
                    {/* Image gallary section resposive grid layout */}
            </section>
            <section className="trending_product">
                    {/* 4col2row + load more button which open same 4 row and 2 col */}
            </section>
            <section className="BestSeller_product">
                 {/* 4col2row + load more button which open same 4 row and 2 col */}
            </section>
            <section className="NewArival_product">
                 {/* 4col2row + load more button which open same 4 row and 2 col */}
            </section>
            <section className="Best_offers">

            </section>
            <section className="testimonials_UserReviews">
                
            </section>


        </div>
    )
}

export default HomePage
