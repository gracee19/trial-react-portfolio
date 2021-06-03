import React from 'react';

const Contact= () => {
    return(
    <div class="container z-depth-1 my-5 px-0">
        <section class="my-md-5">
            <div class="rgba-black-strong rounded p-5">
                <h3 class="text-center font-weight-bold text-white mt-3 mb-5">Contact</h3>
                <div class="row">
                    <div class="col-12 mb-4 mr-md-5">
                        <form class="mx-auto contact-form">
                            <div class="card">
                                <div class="card-body px-4">
                                    <div class="md-form md-outline mt-0">
                                        <label for="name">Name</label>
                                        <input type="text" id="name" class="form-control" placeholder="Name" required/>
                                    </div>
                            
                                    <div class="md-form md-outline">
                                        <label for="email">Email Address</label>
                                        <input type="text" id="email" class="form-control" placeholder="Email" required/>
                                    </div>

                                    <div class="md-form md-outline">
                                        <label for="message">Message</label>
                                        <textarea id="message" class="md-textarea form-control" rows="4"
                                        placeholder="Message" required/>
                                    </div>

                                    <button type="submit"
                                        class="btn btn-primary btn-md btn-block ml-0 mb-0">Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default Contact;