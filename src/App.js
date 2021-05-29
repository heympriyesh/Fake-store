import './App.css';
import ShowData from './components/ShowData';
import Welcome from './components/Welcome';

import Form from './components/Form';
import { changeContext } from './changeContext/chagneContext'
import { useDispatch } from 'react-redux';
import React, { useContext,useEffect,useState } from 'react';
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom';
import axios from 'axios';
import { fetchData } from './actions';
import ShowProducts from './components/ShowProducts';

function App() {
  const [isLoading,setIsLoading]=useState(true)
  const data = useContext(changeContext);
  const dispatch = useDispatch();
  
  useEffect(async () => {
    setIsLoading(true)
    const res = await axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setIsLoading(false)
        return response
      }).catch(err => {
        return err
      })
     dispatch(fetchData(res.data))
  }, [])


  return (
    <BrowserRouter>
      <div className={data.theme ? "App colour" : "App"}>
        <Switch>
         <Route exact path="/" component={Welcome}></Route>
         <Route exact path="/form" ><Form/></Route>
          <Route exact path='/showproducts'><ShowProducts/></Route>
         <Route exact path="/api"><ShowData value={isLoading}/></Route>
      </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
