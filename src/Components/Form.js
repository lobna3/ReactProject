import React from  'react';
import axios from 'axios';
import Swal from 'sweetalert2';

class Form extends React.Component {
constructor(props){
super(props);
this.state={
 firstname: "",
 password: "",
 email  : "" ,
 mobile : "",
 firstnameError : false,
 passwordError : false,
 emailError : false,
 mobileError : false,
 message : "",
}
this.validateform= this.validateform.bind(this);
this.onChangeInput = this.onChangeInput.bind(this);
}

validateform() {
    const firstname = this.state.firstname;
    const password = this.state.password;
    const email = this.state.email;
    const mobile = this.state.mobile;

   if(firstname){
       this.setState({firstnameError: false})
   } else {
    this.setState({firstnameError: true})
   }

   if(password){
    this.setState({passwordError: false})
    } else {
      this.setState({passwordError: true})
   }

   if(email){
    this.setState({emailError: false})
      } else {
       this.setState({emailError: true})
      }
  if(mobile){
    this.setState({mobileError: false})
     } else {
   this.setState({mobileError: true})
   }

   //Construction From Data
   var loginFromData = {
         firstname : firstname,
         password  : password,
         email     : email,
         mobile    : mobile
   }
     console.log('------loginFromData--------',loginFromData);
   //Post Data To server 
   axios.post('http://localhost:3001/login',loginFromData )
    .then(function (response) {
        Swal.fire('Wow','Success!','success')
    })
    .catch(function (error) {
    console.log(error);
    });
}
onChangeInput(event){
    
    const name= event.target.name;
    const value= event.target.value;
    this.setState({[name]: value})
}
    render() {
        return (
            
              
            <div className="container register">
            <div className="row">
                <div className="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                    <h3>Welcome To </h3>
                    <h5>React App</h5>
                    <h5> {this.state.message}</h5> 
                    <input type="submit" name="" value="Page"/> <br/>
                </div>
                <div className="col-md-9 register-right">
                    
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                            <h3 className="register-heading">Apply as a Employee</h3>
                            <div className="row register-form">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control"  style={{border:(this.state.firstnameError) ?"1px sloid red" :""}} name="firstname" value={this.state.firstname} placeholder="First Name *"  onChange={(e)=>this.onChangeInput(e)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" style={{border:(this.state.passwordError) ?"1px sloid red" :""}} name="password" value={this.state.password}  placeholder="Password *"  onChange={(e)=>this.onChangeInput(e)} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control"  style={{border:(this.state.emailError) ?"1px sloid red" :""}} name="email" value={this.state.email}  placeholder="Your Email *"   onChange={(e)=>this.onChangeInput(e)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control"  style={{border:(this.state.mobileError) ?"1px sloid red" :""}} name="mobile" value={this.state.mobile}   placeholder="Mobile *"  onChange={(e)=>this.onChangeInput(e)} />
                                    </div>
                                    <input type="submit" className="btnRegister"  value="Register" onClick={this.validateform}/>
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


export default Form;