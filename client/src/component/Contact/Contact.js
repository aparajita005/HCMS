import React, { Component } from "react";
import "./Contact.css";
import Navber from '../Navber/Navber';


class Contact extends Component {
  

  render() {
    return (
      <div>
        <Navber />
        <h1>no contact here</h1>
        <div className="form-group">
                <label htmlFor="name">Disease</label>
              </div>
      </div>
              
    );
  }
}

export default Contact;