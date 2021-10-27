import React, { Component } from 'react';
import SeniorPhoto1 from '../img/senior/Seniors-1.jpg'
import SeniorPhoto2 from '../img/senior/Seniors-2.jpg'
import SeniorPhoto3 from '../img/senior/Seniors-3.jpg'
import SeniorPhoto4 from '../img/senior/Seniors-4.jpg'
import SeniorPhoto5 from '../img/senior/Seniors-5.jpg'
import SeniorPhoto6 from '../img/senior/Seniors-6.jpg'
import SeniorPhoto7 from '../img/senior/Seniors-7.jpg'
import SeniorPhoto8 from '../img/senior/Seniors-8.jpg'
import SeniorPhoto9 from '../img/senior/Seniors-9.jpg'
import SeniorPhoto10 from '../img/senior/Seniors-10.jpg'
import SeniorPhoto11 from '../img/senior/Seniors-11.jpg'
import SeniorPhoto12 from '../img/senior/Seniors-12.jpg'
import SeniorPhoto13 from '../img/senior/Seniors-13.jpg'
import SeniorPhoto14 from '../img/senior/Seniors-14.jpg'
import SeniorPhoto15 from '../img/senior/Seniors-15.jpg'
import SeniorPhoto16 from '../img/senior/Seniors-16.jpg'
import SeniorPhoto17 from '../img/senior/Seniors-17.jpg'
import SeniorPhoto18 from '../img/senior/Seniors-18.jpg'
import SeniorPhoto19 from '../img/senior/Seniors-19.jpg'

class SeniorsGallery extends Component {
    render() {
        return (
          <section>
                <h3 class="gallery-heading">Seniors Gallery</h3>
                <div class="p-3 slideshow-block">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={SeniorPhoto1} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto2} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto3} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto4} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto5} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto6} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto7} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto8} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto9} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto10} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto11} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto12} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto13} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto14} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto15} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto16} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto17} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto18} class="d-block w-100" alt="senior"/>
                        </div>
                        <div class="carousel-item">
                            <img src={SeniorPhoto19} class="d-block w-100" alt="senior"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default SeniorsGallery;