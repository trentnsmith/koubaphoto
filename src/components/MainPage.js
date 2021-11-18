import React, { Component } from 'react';
import MainHero from './MainHero';
import { Link } from 'react-router-dom';

class MainPage extends Component {
    render() {
        return (
            <div>
               
                <div class="head-hero">
                    
                    <MainHero />
                </div>
            <section class="p-5">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md">
                            <div class="card bg-dark text-light mb-5 maincard1">
                                <div class="card-body text-left position-relative">
                                    <h3 class="card-title mb-3 position-absolute top-50 start-50 translate-middle" >
                                        <Link href="/wedding-gallery" style={{'text-decoration': 'none', 'color': 'white'}}>Weddings </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="card bg-dark text-light mb-5 maincard2">
                                <div class="card-body text-left position-relative">
                                    <h3 class="card-title mb-3 position-absolute top-50 start-50 translate-middle">
                                        <Link href="/family-gallery" style={{'text-decoration': 'none', 'color': 'white'}}> Families</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="card bg-dark text-light mb-5 maincard3">
                                <div class="card-body text-left position-relative">
                                    <h3 class="card-title mb-3 position-absolute top-50 start-50 translate-middle">
                                        <Link href="/newborn-gallery" style={{'text-decoration': 'none', 'color': 'white'}}>Newborn</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="card bg-dark text-light mb-5 maincard4">
                                <div class="card-body text-left position-relative">
                                    <h3 class="card-title mb-3 position-absolute top-50 start-50 translate-middle">
                                        <Link href="/seniors-gallery" style={{'text-decoration': 'none', 'color': 'white'}}>Seniors</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default MainPage;