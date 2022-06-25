import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Home from './component/Home/Home';
import Appointment from './component/Appointment/Appointment';
import About from './component/About/About';
import Gallery from './component/Gallery/Gallery';
import PatientLogin from './component/Login/PatientLogin';
import DoctorLogin from './component/Login/DoctorLogin';
import AdministratorLogin from './component/Login/AdministratorLogin';
import Contact from './component/Contact/Contact';
import PatHome from './component/Patient/PatHome';
import PatientAbout from './component/Patient/PatientAbout'

import Doctor from './component/Doctor/Doctor'


import Admin from './component/Admin/Admin'
import AdHome from './component/Admin/AdHome'
import AdminAbout from './component/Admin/AdminAbout'
import PatientReg from './component/PatientReg/PatientReg';

import DocHome from './component/Doctor/DocHome';
import DocAbout from './component/Doctor/DocAbout';
import Feedback from './component/Feedback/Feedback';
import { Bill } from './component/Bill/Bill';



function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/Feedback" component={Feedback} />
      <Route exact path="/Appointment" component={Appointment} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/regPatient" component = {PatientReg}/>
      <Route exact path="/patient/login" component={PatientLogin} />
      <Route exact path="/doctors/login" component={DoctorLogin} />
      <Route exact path="/administrator/login" component={AdministratorLogin} />
      <Route exact path="/bill" component={Bill} />

    
      <Route exact path="/patient/login/home" component = {PatHome} />
      <Route exact path="/patient/login/about" component = {PatientAbout} />
   
     

      
      <Route exact path="/doctors/login/doctor_home" component = {Doctor} />
      <Route exact path="/doctors/login/home" component = {DocHome} />
      <Route exact path="/doctors/login/about" component = {DocAbout}/>
      



      <Route exact path="/administrator/login/admin_home" component = {Admin} />
      <Route exact path="/administrator/login/home" component = {AdHome}/>
      <Route exact path="/administrator/login/about" component = {AdminAbout}/>

    </Router>
    </div>
  );
}

export default App;
