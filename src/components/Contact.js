import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            
                <form action="https://formsubmit.co/de9495b9afe32b18f9c580ddb019c409" method="POST">
                <div class="row">
                    <div class="col-md-7 shadow rounded p-5" id="form-div">

                        <input type="text" name="_honey" style={{"display": "none"}} />
                        
                        <input type="hidden" name="_captcha" value="false"/>

                        <input type="hidden" name="_next" value="localhost:3000/success.html" />
                        
                        <div class="row">
                            <div class="col mb-3">
                                <label for ="firstName" class="form-label">First Name</label>
                                <input type="text" class="form-control" name="Name" placeholder="First Name" />
                            </div>
                            <div class="col mb-3">
                                <label for="lastName" class="form-label">Last  Name</label>
                                <input type="text" class="form-control" name="LastName" placeholder="Last Name" />
                            </div>
                        </div>
                        <div class="col mb-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="text" class="form-control" name="Email" placeholder="name@email.com" />
                            </div>
                        <div class="col mb-3">
                            <label for="sessionType" class="form-label">Type of session:</label>
                            <select name="SessionType" class="session-dropdown">
                                <option disabled selected hidden></option>
                                <option>Weddings</option>
                                <option>Families</option>
                                <option>Lifestyle Newborn</option>
                                <option>Seniors</option>
                              </select>
                            {/* <input type="text" class="form-control" name="SessionType" placeholder="Subject" /> */}
                        </div>
                        <div class="date-container">
                        <div class="date-input">
                                <label for ="month" class="form-label">Month</label>
                                <input type="text" class="form-control" name="Month" placeholder="MM" maxLength="2"/>
                        </div>
                          <div class="date-input">
                                  <label for ="day" class="form-label">Day</label>
                                  <input type="text" class="form-control" name="Day" placeholder="DD" maxLength="2"/>
                          </div>
                          <div class="date-input">
                                  <label for ="year" class="form-label">Year</label>
                                  <input type="text" class="form-control" name="Year" placeholder="YYYY" maxLength="4"/>
                          </div>
                          </div>
                          <div class="col mb-3">
                              <label for="message" class="form-label">Message:</label>
                              <textarea name="" class="form-control" name="Message" placeholder="Write Your Message Here" rows="3" />
                          </div>
                        
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-primary form-submit-btn">Submit</button>
                        </div>  
                    </div>                    
                </div>
                </form>
                
        );
    }
}

export default Contact;