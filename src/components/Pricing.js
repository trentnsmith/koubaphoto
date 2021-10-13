import React, { Component } from 'react';
import Header from './Header';

class Pricing extends Component {
    render() {
        return (
            
            <section class="p-5">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-fluid pb-4">
                            <div class="card bg-dark text-light mb-5 pricecard1">
                                <div class="card-body text-left position-relative">
                                    <h3 class="card-title mb-3 position-absolute top-50 start-50 translate-middle">
                                        Weddings
                                    </h3>
                                </div>
                            </div>
                            <div class="price-amount">
                                <h4>Starting at $1600</h4>
                                <ul>
                                    <li>One photographer</li>
                                    <li>8 hours of wedding coverage</li>
                                    <li>Engagement session</li>
                                    <li>Online gallery with full-resolution edited images</li>
                                </ul>
                            </div>
                        </div>
                        {/* <div class="col-fluid pb-4">
                            <div class="card bg-dark text-light mb-5">
                                <div class="card-body text-left">
                                    <h3 class="card-title mb-3">
                                        Engagement Sessions
                                    </h3>
                                </div>
                            </div>
                            <div class="price-amount">
                                <h4>Starting at $350</h4>
                                <ul>
                                    <li>Two-hour session</li>
                                    <li>Up to three outfits</li>
                                    <li>Online gallery with full-resolution edited images</li>
                                </ul>
                            </div>
                        </div> */}
                        <div class="col-fluid pb-4">
                            <div class="card bg-dark text-light mb-5 pricecard2">
                                <div class="card-body text-left position-relative">
                                    <h3 class="card-title mb-3 position-absolute top-50 start-50 translate-middle">
                                        Families/Children
                                    </h3>
                                </div>
                            </div>
                            <div class="price-amount">
                                <h4>Starting at $250</h4>
                                <ul>
                                    <li>One-hour session</li>
                                    <li>Online gallery with full-resolution edited images</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-fluid pb-4">
                            <div class="card bg-dark text-light mb-5 pricecard3">
                                <div class="card-body text-left position-relative">
                                    <h3 class="card-title mb-3 position-absolute top-50 start-50 translate-middle">
                                        Lifestyle Newborn
                                    </h3>
                                </div>
                            </div>
                            <div class="price-amount">
                                <h4>Starting at $350</h4>
                                <ul>
                                    <li>90-minute session</li>
                                    <li>In the comfort of your own home</li>
                                    <li>Online gallery with full-resolution edited images</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-fluid pb-4">
                            <div class="card bg-dark text-light mb-5 pricecard4">
                                <div class="card-body text-left position-relative">
                                    <h3 class="card-title mb-3 position-absolute top-50 start-50 translate-middle">
                                        Seniors
                                    </h3>
                                </div>
                            </div>
                            <div class="price-amount">
                                <h4>Starting at $350</h4>
                                <ul>
                                    <li>Two-hour session</li>
                                    <li>Up to three outfits</li>
                                    <li>Online gallery with full-resolution edited images</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="button-wrap">
                    <button type="button" class="btn btn-outline-secondary btn-lg">
                        <a href="/contact">Contact Me</a>
                    </button>
                </div>
            </section>
        );
    }
}

export default Pricing;