import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core'
import { changeContext } from '../changeContext/chagneContext';

const SecondStep = () => {
    const { setStep, userData, setUserData ,submitData} = useContext(changeContext);
    return (
        <div>
            <div>
                <TextField label="Enter Id"
                    value={userData['id']}
                    onChange={(e) => setUserData({ ...userData, "id": e.target.value })}
                    margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Price"
                    value={userData['price']}
                    onChange={(e) => setUserData({ ...userData, "price": e.target.value })}
                    margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Category"
                    value={userData['category']}
                    onChange={(e) => setUserData({ ...userData, "category": e.target.value })}
                    margin="normal" variant="outlined" color="secondary" />
            </div>
            <Button variant="contained" onClick={() => setStep(1)} color="primary">Back</Button><span> </span>
            <Button variant="contained" onClick={()=>setStep(3)} color="primary">Add</Button>
        </div>
    )
}

export default SecondStep
