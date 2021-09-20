import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <section>
                <div>
                   <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/93032081_10158375528196468_1329102016571506688_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=IzGeYScqF_kAX80AvZ5&tn=oVCkDNk-Ei-Blm0L&_nc_ht=scontent-dfw5-2.xx&oh=2088b6bd48d93648501ebcdf3985235b&oe=616FDF63" className="img-fluid" alt="Paige"/>
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
        );
    }
}

export default AboutMe;