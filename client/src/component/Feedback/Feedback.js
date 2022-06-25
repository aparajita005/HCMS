import React, {useState} from "react";
import Navber from '../Navber/Navber';
import './Home.css';


export const Feedback = () => {
  const [ setFee] = React.useState();
  const [SetExtraTime] = React.useState();
  const [Setrev] = React.useState();
  const [rating, setRating] = useState(0)
  const handleRating = (rate) => {
    setRating(rate)
  }


  return(
      <>
      <Navber />
      <div className='container mt-5 mb-5'>
          <h2 className='text-center Feed-head'>Feedback</h2>
          <div className='container mt-5'>
              <div className='row mt-3'>
                  <div className='col-6'>
                      <p><b>Rating on your Appointment </b></p>
                  </div>
                  <div className='col-6'>
                      <input  type="number" className='form-control'placeholder='/5' onChange={(e)=>setFee(e.target.value)}></input>
                  </div>
              </div>

              <div className='row mt-3'>
                  <div className='col-6'>
                      <p><b>Rating for Doctor </b></p>
                  </div>
                  <div className='col-6'>
                      <input  type="number" className='form-control' placeholder='Doctor rating' onChange={(e)=>SetExtraTime(e.target.value)}></input>
                  </div>
              </div>  
              <div className='col-12 row  mt-4'>  
                      <label htmlFor="studName"><b>Write your review </b></label>
                      <input  type="text" className='form-control' placeholder='review' onChange={(e)=>Setrev(e.target.value)}></input>   
              </div>
              <div className="container mt-5 mb-5 col-3">
              <h5 style={{ textAlign: "center" }} >
                    <input type="submit" value="Submit" /></h5>
              </div>

          </div>

      </div>     
       </>
  );
}
export default Feedback;