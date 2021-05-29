import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core'
import { changeContext } from '../changeContext/chagneContext'
import { Link } from 'react-router-dom';

const ThirdStep = () => {
    const { setStep, submitData, userData } = useContext(changeContext)
    // console.log("User Data value", userData)
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 text-capitalize">Title</div>
                <div className="col-6 text-capitalize">{userData.title}</div>
            </div>
            <hr />
            <div className="row">
                <div className="col-6 text-capitalize">Description</div>
                <div className="col-6 text-capitalize">{userData.description}</div>
            </div>
            <hr />
            <div className="row">
                <div className="col-6 text-capitalize">Product Id</div>
                <div className="col-6 text-capitalize">{userData.id}</div>
            </div>
            <hr />
            <div className="row">
                <div className="col-6 text-capitalize">Price</div>
                <div className="col-6 text-capitalize">&#36;{userData.price}</div>
            </div>
            <hr />
            <div className="row">
                <div className="col-6 text-capitalize">Image Link</div>
                <div className="col-6"><a href={userData.image} target="_blank">{userData.image}</a></div>
                
            </div>
            <hr />
            <Button variant="contained" onClick={() => setStep(2)} color="primary">Back</Button><span> </span>
           
            <Button variant="contained" onClick={submitData} color="primary" ><Link to="/showproducts" className="text-white text-decoration-none"> Submitted</Link></Button>
        </div>
    )
}

export default ThirdStep
