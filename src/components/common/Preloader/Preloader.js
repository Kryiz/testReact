import React from 'react';
import loader from '../../../assets/img/Preloader.gif';

const Preloader = (props) => {
    return (
        <div style={{textAlign: 'center', marginTop: '10vh', height: '100%'}}>
            <img src={loader} alt='preloader' style={{margin: 'auto'}} />
        </div>
    )
}
export default Preloader;