import React, { Component } from 'react';

class Footer extends Component {
    
    render() { 
        return (   
          
          <footer className="page-footer font-small   pt-4 default-color">

  
        <div className="container-fluid text-center text-md-left">
      
          
          <div className="row">
      
            
            <div className="col-md-6 mt-md-0 mt-3">
      
              
              <h5 className="text-uppercase font-weight-bold">Contact us:</h5>
              <p>E-MAIL: HealthcareMgmt@gmail.com</p>
              <p>Phone no: 9998887776</p>
      
            </div>
            
      
            <hr className="clearfix w-100 d-md-none pb-3"/>
      
            
            <div className="col-md-6 mb-md-0 mb-3">
      
             
              <h5 className="text-uppercase font-weight-bold">Address:</h5>
              <p> At,Post,Dist,India</p>
      
            </div>
      
            </div>
         
      
         </div>
        
            </footer> );
    }
}
 
export default Footer;