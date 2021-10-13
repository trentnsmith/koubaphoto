import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-md-7 shadow rounded p-5">
                        <div class="row">
                            <div class="col mb-3">
                                <label class="form-label">First Name</label>
                                <input type="text" class="form-control" placeholder="First Name" />
                            </div>
                            <div class="col mb-3">
                                <label class="form-label">Last  Name</label>
                                <input type="text" class="form-control" placeholder="Last Name" />
                            </div>
                        </div>
                        <div class="col mb-3">
                                <label class="form-label">Email:</label>
                                <input type="text" class="form-control" placeholder="name@email.com" />
                            </div>
                        <div class="col mb-3">
                            <label class="form-label">Type of session</label>
                            <input type="text" class="form-control" placeholder="Subject" />
                        </div>
                        <div class="col mb-3">
                            <label class="form-label">Message:</label>
                            <textarea name="" class="form-control" placeholder="Write Your Message Here" rows="3" />
                        </div>    

                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
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
                </div>

                    </div>
                    
                </div>
                
                </div>
        );
    }
}

export default Contact;