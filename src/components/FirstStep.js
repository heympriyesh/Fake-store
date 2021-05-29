import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core'
import { changeContext } from '../changeContext/chagneContext';

const FirstStep = () => {
    const { setStep, userData, setUserData } = useContext(changeContext);
    return (
        <div>
            <div>
                <TextField label="Title"
                    value={userData['title']}
                    onChange={(e) => setUserData({ ...userData, "title": e.target.value })}
                    margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Description"
                    value={userData['description']}
                    onChange={(e) => setUserData({ ...userData, "description": e.target.value })}
                    margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Image Link"
                    value={userData['image']}
                    onChange={(e) => setUserData({ ...userData, "image": e.target.value })}
                    margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Choose Color"
                    value={userData['choosecolor']}
                    type="color"
                    className="w-75"
                    onChange={(e) => setUserData({ ...userData, "choosecolor": e.target.value })}
                    margin="normal" variant="outlined" color="secondary" />
            </div>
            <Button variant="contained" onClick={() => setStep(2)} color="primary">
                Next
      </Button>
        </div>
    )
}

export default FirstStep
