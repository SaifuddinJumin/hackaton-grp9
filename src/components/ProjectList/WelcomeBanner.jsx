import React from 'react';
import bannerNuzul from "../images/Nuzul-Al-Quran-1.jpg";
import bannerRamadan14 from "../images/14-days-left-to-ramadan.jpeg";
import bannerRamadan10 from "../images/10-days-left-to-ramadan.png";
import bannerRamadan9 from "../images/9-days-left-to-ramadan.png";
import "./ProjectList.css";

const WelcomeBanner = () => {

    return (
        <div className='wrapper container px-5 py-0 my-0'>
            <h1 className='top-gap-welcome' style={{fontWeight: 'bolder'}}>Welcome Iqbal</h1>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>

                <div class="carousel-inner">

                    {/* <div class="carousel-item active">
                        <img src={bannerRamadan14} class="d-block w-100 banner" alt="14 days of Ramadan left" />
                    </div> */}
                    {/* <div class="carousel-item active">
                        <img src={bannerRamadan10} class="d-block w-100 banner" alt="14 days of Ramadan left" />
                    </div> */}
                    <div class="carousel-item active">
                        <img src={bannerRamadan9} class="d-block w-100 banner" alt="14 days of Ramadan left" />
                    </div>
                    
                    <div class="carousel-item">
                        <img src={bannerNuzul} class="d-block w-100 banner" alt="Nuzul in-coming" />
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