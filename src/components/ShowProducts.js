import React, { useContext } from 'react';
import {useSelector} from 'react-redux';
import Header from './Header';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { changeContext } from '../changeContext/chagneContext';


const ShowProducts = () => {
    const data=useContext(changeContext)
    const state = useSelector(state => state.addDataReducer.value);

    const card = (state) => {
        return (
            <div className="container heih">
                {
                    state.map((valuehae,index) => (
                        <div key={index}>
                            <Card className="row mb-4" >
                                <CardActionArea>
                                    <CardMedia
                                        className="img"
                                        image={valuehae.image}
                                        component="img"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <span className="font-weight-bold" >&#36;  {valuehae.price}</span>
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="p"
                                            style={{ background: valuehae.choosecolor }}>
                                            {valuehae.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" style={{ background: valuehae.choosecolor }}>
                                            {valuehae.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    ))
                }</div>
        )
    }


    
    return (
        <div>
            <Header/>
            {state.length == 0 ? <h1 className={data.theme ? "container text-danger heih" : "container text-dark heih"}>No Data Available. Add Products</h1>:card(state)}
        </div>
    )
}

export default ShowProducts
