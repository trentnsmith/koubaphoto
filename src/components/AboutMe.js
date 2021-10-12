import React, { Component } from 'react';
import Header from './Header';

class AboutMe extends Component {
    render() {
        return (
            <div>
            <Header />
            <section>
                <div class="text-center aboutme-div">
                    <div class="aboutme-img">

                    </div>
                   {/* <img style={{'width': '40%'}} src="./img/paige2.jpeg" class="img-thumbnail rounded float-right mt-5" alt="Paige"/> */}
                </div>
                <div class="m-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Proin sed nunc tincidunt felis ultrices
                         pretium eget eget mauris. Integer diam mi, dictum
                          in sodales at, porttitor vitae urna. Integer 
                          pulvinar magna leo, eget dignissim mi ultrices 
                          vel. Pellentesque tincidunt ante egestas metus 
                          vestibulum laoreet. Nam nec libero ac arcu 
                          pharetra dictum. In imperdiet nisi et leo 
                          elementum mattis ac nec libero. Nunc sodales,
                           nisl ac rhoncus tristique, metus nunc 
                           consectetur nibh, ut sollicitudin tellus tortor
                        sed tortor.</p>
                    <p>CALL TO ACTION...</p>
                </div>
            </section>
            </div>
        );
    }
}

export default AboutMe;