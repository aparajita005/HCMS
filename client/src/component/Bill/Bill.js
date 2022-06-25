import React from 'react';
import Footer from '../Footer';
import Navber from '../Navber/Navber';
import './Bill.css';

export const Bill = () => {
    const [fee, setFee] = React.useState();
    const [extraTime, SetExtraTime] = React.useState();
    const [consultancyFee, setConsultancyFee] = React.useState();
    const [convenienceFee, setConvenienceFee] = React.useState();
    const [cgst, setCgst] = React.useState();
    const [Sgst, SetSgst] = React.useState();
    const subtotal = (parseInt(fee) + 10*parseInt(extraTime) + parseInt(consultancyFee) + parseInt(convenienceFee)).toFixed(2)
    const total = subtotal* (1+(parseInt(cgst) + parseInt(Sgst))/100).toFixed(2)

    return(
        <>
        <Navber />
        <div className='container mt-5 mb-5'>
            <h2 className='text-center bill-head'>Bill</h2>
            <div className='container mt-5'>
                <div className='row mt-3'>
                    <div className='col-6'>
                        <p><b>Appointment Booking Fees:     500/- </b></p>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-7'>
                        <p>Total free amount of time for visit = 30 minutes</p>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-6'>
                        <p><b>Charge for Additional Time Taken </b></p>
                    </div>
                    <div className='col-6'>
                        <input  type="number" className='form-control' placeholder='Extra tiome*10 per minute' onChange={(e)=>SetExtraTime(e.target.value)}></input>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-6'>
                        <p><b>Doctor's Consultancy/referral fee: </b></p>
                    </div>
                    <div className='col-6'>
                        <input  type="number" className='form-control' onChange={(e)=>setConsultancyFee(e.target.value)}></input>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-6'>
                        <p><b>Convenience Fees </b></p>
                    </div>
                    <div className='col-6'>
                        <input  type="number" className='form-control'  onChange={(e)=>setConvenienceFee(e.target.value)}></input>
                    </div>
                </div>
                <div className='thick-border mt-5'></div>
                <div className='row mt-3'>
                    <div className='col-6'>
                        <p><b>Sub-Total </b></p>
                    </div>
                    <div className='col-6'>
                        <input  type="number" className='form-control' value={
                            subtotal
                        } disabled></input>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-6'>
                        <p><b>CGST </b></p>
                    </div>
                    <div className='col-6'>
                        <input  type="number" className='form-control'  onChange={(e)=>setCgst(e.target.value)}></input>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-6'>
                        <p><b>SGST </b></p>
                    </div>
                    <div className='col-6'>
                        <input  type="number" className='form-control'  onChange={(e)=>SetSgst(e.target.value)}></input>
                    </div>
                </div>

                <div className='thick-border mt-4'></div>


                <div className='row mt-3'>
                    <div className='col-6'>
                        <p><b>Total </b></p>
                    </div>
                    <div className='col-6'>
                        <input  type="number" className='form-control bg-success text-white' value={
                                        total
                        } disabled></input>
                    </div>
                </div>

                <div className='text-center mt-5'>
                        <button className='btn btn-primary btn-lg'>Pay {total ? total : ""}</button>
                </div>

            </div>
        </div>
        <Footer />       
         </>
    );
}