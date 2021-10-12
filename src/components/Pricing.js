import React, { Component } from 'react';
import Header from './Header';

class Pricing extends Component {
    render() {
        return (
            <div>
                <Header />
            <section class="p-5">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-fluid pb-4">
                            <div class="card bg-dark text-light mb-5">
                                <div class="card-body text-left">
                                    <h3 class="card-title mb-3">
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
                            <div class="card bg-dark text-light mb-5">
                                <div class="card-body text-left">
                                    <h3 class="card-title mb-3">
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
                            <div class="card bg-dark text-light mb-5">
                                <div class="card-body text-left">
                                    <h3 class="card-title mb-3">
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
                            <div class="card bg-dark text-light mb-5">
                                <div class="card-body text-left">
                                    <h3 class="card-title mb-3">
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
            </section>
            </div>
        );
    }
}

export default Pricing;