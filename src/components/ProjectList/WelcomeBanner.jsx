import React from 'react';
import banner1 from "../images/14-days-left-to-ramadan.jpeg";
import banner2 from "../images/Nuzul-Al-Quran-1.jpg";

const WelcomeBanner = () => {

    return (
        <div className='wrapper container mt-2 px-5'>
            <h1 style={{fontWeight: 'bolder'}}>Welcome Iqbal</h1>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner1} class="d-block w-100" alt="14 days of Ramadan left" />
                    </div>
                    <div class="carousel-item">
                        <img src={banner2} class="d-block w-100" alt="Nuzul in-coming" />
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>
        </div>
    )
}
export default WelcomeBanner;