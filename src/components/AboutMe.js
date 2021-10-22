import React, { Component } from 'react';
import Header from './Header';

class AboutMe extends Component {
    render() {
        return (
            <section>
                    <div class="aboutme-img">
                    </div>
                <div class="m-5">
                    <p>Hey there! I’m so glad you are here and hope to meet you soon! 
                        My name is Paige and I’m the woman constantly behind a camera… 
                        my DSLR or an iPhone. I married the love of my life, Stephen 
                        on New Years Eve in 2018 and we have a one year old son, Camden.
                         I graduated from the University of Nebraska - Lincoln and 
                         became a teacher in 2015. I taught full time as a special 
                         education high school teacher for a few years and now spend 
                         most of my time with our son and subbing part-time in elementary 
                         schools. 
                         <br/>
                         <br/>
                         When I graduated in 2015, my parents gifted me a camera. 
                         I had always loved taking pictures and had “nice” cameras growing
                          up. My favorite being a blue Sony Cyber-shot circa 2008. When 
                          I got my Canon DSLR for my graduation gift, my sister asked 
                          me to take pictures of her and her now-husband for fun and 
                          that’s where my journey began. As I’ve gotten older and 
                          become a mother, I’ve learned that pictures become a treasure
                           as our memories of life begin to fade away. The best thing 
                        about life is making memories and the next best thing is seeing them.</p>
                           
                    <h3>
                        “A photograph is the pause button on life.” - Ty Holland. 
                    </h3>
                    {/* <h3>Follow me on Instagram!</h3> */}

                </div>
            </section>
        );
    }
}

export default AboutMe;