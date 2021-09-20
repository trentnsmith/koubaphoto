import React, { Component } from 'react';

class MainPage extends Component {
    render() {
        return (
            // <section>
            //     <div class="card bg-dark text-white">
            //     <img src="..." class="card-img" alt="..." />
            //         <div class="card-img-overlay">
            //             <h5 class="card-title">Card title</h5>
            //             <p class="card-text">This is a wider </p>
            //             <p class="card-text">Last updated 3 mins ago</p>
            //         </div>
            //     </div>
            // </section>
            <section class="p-5">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md">
                            <div class="card bg-dark text-light mb-5">
                                <div class="card-body text-left">
                                    <h3 class="card-title mb-3">
                                        Weddings/Engagements
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="card bg-dark text-light mb-5">
                                <div class="card-body text-left">
                                    <h3 class="card-title mb-3">
                                        Families/Children
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="card bg-dark text-light mb-5">
                                <div class="card-body text-left">
                                    <h3 class="card-title mb-3">
                                        Lifestyle Newborn
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="card bg-dark text-light mb-5">
                                <div class="card-body text-left">
                                    <h3 class="card-title mb-3">
                                        Seniors
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainPage;