import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { MDBContainer } from 'mdbreact';
import Img from '../photos/hospital.jpg'

class Homeimage extends Component {
   
    render() { 
        return (
        <div>
        <Card className="text-white">
        <Card.Img src={Img} alt="Card image" height="600" style={{opacity:"1.6"}}/>
                <Card.ImgOverlay>
                    <Card.Title>
                    <MDBContainer>
                        <h1 className="font-weight-bold text-danger">Health Care Management</h1>
                        <br>
                        
                        
                        
                        </br>
                        <p className="font-weight-bold text-danger">Healing Hands. Caring Hearts</p>
                    </MDBContainer>
                    </Card.Title>
                    
                    
                </Card.ImgOverlay>
        </Card>
        <br />
        <br/>
        
        </div> );
    }
}
 
export default Homeimage;