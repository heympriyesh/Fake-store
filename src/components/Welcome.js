import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
            <>
            <div className="jumbotron">
                <h1 className="display-4">Welcome!</h1>
                <hr className="my-4"/>
                    <p>Click the Below Button to Start</p>
                    <Link className="btn btn-primary btn-lg" to="/api" role="button">Go To Store</Link>
                    </div>
            </>
    )
}
 export default Welcome;