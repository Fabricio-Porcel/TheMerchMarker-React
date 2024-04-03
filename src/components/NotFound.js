import React from 'react';
import imageNotFound from '../assets/images/NotFound-404.jpg';

function NotFound(){
    return(
        <div className="text-center">
            <h1>Lo sentimos, esta pagina no existe.</h1>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 60 +'rem'}} src={imageNotFound} alt=" 404 Not Found"/>
        </div>
        
    )
}


export default NotFound;