import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Img1 from '../photos/facilities1.jpg';
import Img2 from '../photos/facilities5.jpg';
import Img3 from '../photos/facilities3.jpg';
import Img4 from '../photos/facilities4.jpg';
import Img5 from '../photos/facilities5.jpg';
import Img6 from '../photos/facilities6.jpg';
import Footer from './Footer';


class GalleryCarousel extends Component {
    
    render() { 
        return (
         <div>
         <h2 className="head text-white" align="center">Our Facilities</h2>
         <br>
         </br>
         <Carousel  style={{paddingLeft:50 ,paddingRight:50}}>
         <Carousel.Item  >
         <Card className="text-danger">
         <Card.Img src={Img1} alt="Card image" height="600" />
         <Card.ImgOverlay>
             <Card.Title ><h3>Ward Rooms</h3></Card.Title>
             
             
         </Card.ImgOverlay>
         </Card>
         </Carousel.Item>
         
         <Carousel.Item>
             <Card className="text-danger">
             <Card.Img src={Img2} alt="Card image" height="500" />
             <Card.ImgOverlay>
                 <Card.Title><h3>Operation Theater</h3></Card.Title>
                 
                 
             </Card.ImgOverlay>
             </Card>
         </Carousel.Item>

         <Carousel.Item>
             <Card className="text-danger">
             <Card.Img src={Img3} alt="Card image" height="500" />
             <Card.ImgOverlay>
                 <Card.Title><h3>CT Scan/ CAT Scan Center</h3></Card.Title>  
             </Card.ImgOverlay>
             </Card>
             </Carousel.Item>
             
         <Carousel.Item>

             <Card className="text-danger">
             <Card.Img src={Img4} alt="Card image" height="500" />
             <Card.ImgOverlay>
                 <Card.Title><h3>PET Scan Center </h3></Card.Title>  
             </Card.ImgOverlay>
             </Card>
             </Carousel.Item>    
         <Carousel.Item>
             <Card className="text-danger">
             <Card.Img src={Img5} alt="Card image" height="500"/>
             <Card.ImgOverlay>
                 <Card.Title><h3>ICU / CCU</h3></Card.Title>  
             </Card.ImgOverlay>
             </Card>
         </Carousel.Item>
         <Carousel.Item>
             <Card className="text-danger">
             <Card.Img src={Img6} alt="Card image" height="500"/>
             <Card.ImgOverlay>
                 <Card.Title className="text-danger"><h3>OT Specialized for Heart Surgery</h3></Card.Title>  
             </Card.ImgOverlay>
             </Card>
         </Carousel.Item>

         
         </Carousel>    
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <Footer/>

        </div> );
    }
}
 
export default GalleryCarousel;