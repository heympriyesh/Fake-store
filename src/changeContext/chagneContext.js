import React, { useState ,createContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData} from '../actions';
import { saveProduct } from '../actions';
import {Redirect,useHistory} from 'react-router-dom';

export const changeContext =createContext();

export const StepContext = (props) => {
    const history=useHistory();
    // console.log("The value of history",history);
    const [theme,setTheme]=useState(false);

    const [curentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    const dispatch=useDispatch();

    function submitData(e) {
        setStep(1);
        e.preventDefault();
        setFinalData(userData);
        // console.log("The final Data is Clicked",finalData)
         dispatch(addData(userData))
        dispatch(saveProduct(userData))
        setUserData([]);
    }
    const style={
        background: 'yellow'
    }
    const toggleChecked = () => {
        setTheme((prev) => !prev);
        // console.log(theme);
    };
    return (
        <div>
            <changeContext.Provider 
            value={{theme,style,toggleChecked,curentStep,setStep,userData,setUserData,finalData,setFinalData,submitData}}>
                {props.children}
            </changeContext.Provider>
        </div>
    )
}