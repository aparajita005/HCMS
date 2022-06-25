import React, { Component } from "react";    
import Navber from '../Navber/Navber';
import './Appointment.css'    
    
class Appointment extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            patName: '', 
            docName: '',
            disease:'',   
            dob: '',    
            gender: 'select',    
            phoneNumber: '',    
            city: 'select',
            ftm:'',
            ttm:'',
            addInfo:'',

            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { patName,docName,disease, dob, gender, phoneNumber, city,ftm,ttm,addInfo } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!patName) {    
            formIsValid = false;    
            formErrors["patErr"] = "Name is required.";    
        }   
        if (!docName) {    
            formIsValid = false;    
            formErrors["docErr"] = "doc Name is required.";    
        } 
        if (!disease) {    
            formIsValid = false;    
            formErrors["diseaseErr"] = "Describe your disese.";    
        }  
        if (!patName) {    
            formIsValid = false;    
            formErrors["patErr"] = "Name is required.";    
        }  
    
    
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid date of birth";    
            }    
        }    
    
        //Gender    
        if (gender === '' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select gender.";    
        }    
    
        //Phone number    
        if (!phoneNumber) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phoneNumber)) {    
                formIsValid = false;    
                formErrors["phoneNumberErr"] = "Invalid phone number.";    
            }    
        }    
    
        //City    
        if (city === '' || city === "select") {    
            formIsValid = false;    
            formErrors["cityErr"] = "Select city.";    
        }    
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {  
    
        const { studNameErr, dobErr, genderErr, phoneNumberErr, cityErr,docName,disease } = this.state.formErrors;    
    
        return (
            
            <div className="formDiv">    
            <Navber/>


            <br/>
            <br/>
                <h3 style={{ textAlign: "center" }} ><b>Appointment Boking</b> </ h3>    
                <div className='container mt-5 mb-5'>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="patName">Name</label>    
                            <input type="text" name="patName"    
                                value={this.state.patName}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                            }    
    
                        </div>
                        <div>    
                            <label htmlFor="studName">Doctor's Name</label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}    
                                placeholder="Doc name.."    
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                            }    
    
                        </div>
                        <div>    
                            <label htmlFor="studName">Enter Disease/Symptoms </label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}    
                                placeholder="Describe the condition"    
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                            }    
    
                        </div>            
                        <div>    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="text" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="gender">Gender</label>    
                            <select name="gender" onChange={this.handleChange}    
                                className={genderErr ? ' showError' : ''}    
                                value={this.state.gender} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="female">Other</option>    
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="phoneNumber">Phone Number</label>    
                            <input type="text" name="phoneNumber"    
                                onChange={this.handleChange}    
                                value={this.state.phoneNumber}    
                                placeholder="Your phone number.."    
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="city">City</label>    
                            <select name="city"    
                                value={this.state.city}    
                                onChange={this.handleChange}    
                                className={cityErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="Pune">Pune</option>    
                                <option value="Mumbai">Mumbai</option>    
                                <option value="Hyderabad">Hyderabad</option>    
                            </select>    
                            {cityErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{cityErr}</div>    
                            }    
                        </div> 
                        <div className="col-4">  
                          
                            <label htmlFor="studName">From Timing</label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}        
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div> 
                            }


                            <label htmlFor="studName">To Timing</label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}       
                                className={studNameErr ? ' showError' : ''} />  
   
                              
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                            }        
    
                        </div>
                        <div>    
                            <label htmlFor="row md-5">Additional Information</label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}    
                                placeholder="Details"    
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                            }    
    
                        </div>   
                        <input type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default Appointment;