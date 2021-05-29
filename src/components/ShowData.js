import React from 'react'
import { useSelector } from 'react-redux';
import Header from './Header'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
// import { changeContext } from '../changeContext/chagneContext'



const ShowData = ({ value }) => {


    const state = useSelector(state => state.fetchDataReducer.data);
   

    const card = (state) => {
        return (
            <div className="container">
                {
                    state.map((valuehae,index) => (
                        <div key={valuehae.id}>
                            <Card className="row mb-4" >
                                <CardActionArea>
                                    <CardMedia   
                                        className="img"
                                        image={valuehae.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <span className="font-weight-bold">&#36;{valuehae.price}</span>
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="p"
                                        >
                                            {valuehae.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {valuehae.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <div>
            <Header />
            {value ? <h1 className="container text-primary">Loading...!!</h1> : card(state)}
        </div>
    )
}

export default ShowData;
