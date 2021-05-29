import React,{useContext,useState} from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { changeContext } from '../changeContext/chagneContext'
import { AppBar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Route,Link } from 'react-router-dom';
// import Form from './Form';
// import ShowData from './ShowData';
// import {useHistory} from 'react-router-dom'


const Header = () => {
  const data=useContext(changeContext);
    return (
        <div className="d-flex justify-content-around nav-colour mb-3">
            
                <div>
                <Typography variant="h6" className="mr-4">
                    <Link to='/api' className={data.theme ? 'text-white text-bolder' : 'text-dark'}>Home</Link>

                </Typography>
                </div>

                    <div className="d-flex justify-content-around">
                <Typography variant="h6" className="mr-4">
                    <Link to="/form" className={data.theme?'text-white':'text-dark'}>Add Products</Link>
                </Typography>
                <Typography variant="h6" className="mr-4">
                    <Link to="/showproducts" className={data.theme ? 'text-white' : 'text-dark'}>Show My Products</Link>
                </Typography>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={data.theme}
                            color={data.theme?"primary":"secondary"}
                            onChange={data.toggleChecked} />}
                        label="Change Theme"
                    />
                </FormGroup>
                    </div>
                

            
        </div>
    )
}
export default Header;



