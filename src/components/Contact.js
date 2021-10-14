import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <form action="https://formsubmit.co/de9495b9afe32b18f9c580ddb019c409" method="POST">
                <div class="row">
                    <div class="col-md-7 shadow rounded p-5">

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
                            <label for="sessionType" class="form-label">Type of session</label>
                            <input type="text" class="form-control" name="SessionType" placeholder="Subject" />
                        </div>
                        <div class="col mb-3">
                            <label for="message" class="form-label">Message:</label>
                            <textarea name="" class="form-control" name="Message" placeholder="Write Your Message Here" rows="3" />
                        </div>
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-primary form-submit-btn">Submit</button>
                            </div>  

                        {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Launch demo modal
                </button>
                
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div> */}

                    </div>
                    
                </div>
                </form>
                
                </div>
        );
    }
}

export default Contact;