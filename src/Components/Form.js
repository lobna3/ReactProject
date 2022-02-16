import React from  'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';


class Form extends React.Component {
constructor(props){
super(props);
this.state={
 firstname: "",
 password: "",
 email  : "" ,
 mobile : "",
}
this.validateform= this.validateform.bind(this);
}

validateform() {
    console.log('------------');
}
    render() {
        return (
            
                 <Router>
            <div className="container register">
            <div className="row">
                <div className="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                    <h3>Welcome To </h3>
                    <h5>React App</h5>
                    
                    <input type="submit" name="" value="Page"/> <Link to="/page">Page</Link><br/>
                </div>
                <div className="col-md-9 register-right">
                    
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 className="register-heading">Apply as a Employee</h3>
                            <div className="row register-form">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="firstname" placeholder="First Name *" value="" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input type="password" className="form-control" name="password" placeholder="Password *" value="" />
                                    </div>
                                    
                                   
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" placeholder="Your Email *" value="" />
                                    </div>
                                   
                                  
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="mobile" placeholder="Mobile *" value="" />
                                    </div>
                                    <input type="submit" className="btnRegister"  value="Register" onClick={this.validateform}/>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  class="register-heading">Apply as a Hirer</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Phone *" value="" />
                                        </div>


                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confirm Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control">
                                                <option class="hidden"  selected disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="`Answer *" value="" />
                                        </div>
                                        <input type="submit" class="btnRegister"  value="Register"/>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            </div>
         </Router>
        );

    }
    }


export default Form;