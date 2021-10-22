import React, { Component } from 'react';
import FamilyPhoto1 from '../img/family/Family-1.jpg'
import FamilyPhoto2 from '../img/family/Family-2.jpg'
import FamilyPhoto3 from '../img/family/Family-3.jpg'
import FamilyPhoto4 from '../img/family/Family-4.jpg'
import FamilyPhoto5 from '../img/family/Family-5.jpg'
import FamilyPhoto6 from '../img/family/Family-6.jpg'
import FamilyPhoto7 from '../img/family/Family-7.jpg'
import FamilyPhoto8 from '../img/family/Family-8.jpg'
import FamilyPhoto9 from '../img/family/Family-9.jpg'
import FamilyPhoto10 from '../img/family/Family-10.jpg'
import FamilyPhoto11 from '../img/family/Family-11.jpg'
import FamilyPhoto12 from '../img/family/Family-12.jpg'
import FamilyPhoto13 from '../img/family/Family-13.jpg'
import FamilyPhoto14 from '../img/family/Family-14.jpg'
import FamilyPhoto15 from '../img/family/Family-15.jpg'
import FamilyPhoto16 from '../img/family/Family-16.jpg'
import FamilyPhoto17 from '../img/family/Family-17.jpg'
import FamilyPhoto18 from '../img/family/Family-18.jpg'
import FamilyPhoto19 from '../img/family/Family-19.jpg'
import FamilyPhoto20 from '../img/family/Family-20.jpg'
import FamilyPhoto21 from '../img/family/Family-21.jpg'
import FamilyPhoto22 from '../img/family/Family-22.jpg'
import FamilyPhoto23 from '../img/family/Family-23.jpg'
import FamilyPhoto24 from '../img/family/Family-24.jpg'
import FamilyPhoto25 from '../img/family/Family-25.jpg'


class FamilyGallery extends Component {
    render() {


        return (
            <section>
                <h3 class="gallery-heading">Family and Children Gallery</h3>
                <div class="p-3 slideshow-block">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={FamilyPhoto1} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto2} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto3} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto4} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto5} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto6} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto7} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto8} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto9} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto10} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto11} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto12} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto13} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto14} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto15} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto16} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto17} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto18} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto19} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto20} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto21} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto22} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto23} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto24} class="d-block w-100" alt="family photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={FamilyPhoto25} class="d-block w-100" alt="family photo"/>
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

export default FamilyGallery;