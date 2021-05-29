import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import '../App.css'
import { Stepper, StepLabel, Step } from '@material-ui/core'
import { useContext } from 'react';
import { changeContext } from '../changeContext/chagneContext';
import Header from './Header';
import {useHistory} from 'react-router-dom'

function Form() {
  const data = useContext(changeContext);
 
  const { curentStep } = useContext(changeContext);
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
     
    }
  }
  return (
    <div className="App">
      <Header/>
      <header className={data.theme ? "App-header" :'form-colour'}>
        <div>
          <Stepper style={data.theme ? { width: '18%', background: 'white' } : { width: '18%', background: 'beige'}} activeStep={curentStep - 1} orientation="horizontal">
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(curentStep)}
      </header>
    </div>
  );
}

export default Form;
