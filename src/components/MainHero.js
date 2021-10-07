import React, { Component } from 'react';
import Background from '../img/wedding/Wedding-Couples-9.jpg';

class MainHero extends Component {
    render() {
        return (
            <section class="hero hero-main bg-dark text-light p-5 text-center" style={{'backgroundImage': `url(${Background})`, 'backgroundSize': 'cover'}}>
                <div class="hero-content" style={{'height': '35vh'}}>
                    <h1>Paige Kouba Photography</h1>
                </div>
            </section>
        );
    }
}

export default MainHero;