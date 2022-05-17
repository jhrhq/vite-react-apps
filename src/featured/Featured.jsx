import React from 'react';
import Carrousel from './Carrousel';

const Featured = () => {
    
    return (
        <div style={{display: 'grid',gridTemplateColumns: '1fr'}}>
            <Carrousel  />
            <div className='center grid_column_start' style={{zIndex: 1}}>
            <div className='artist_name'>
                <div className="wrapper">
                    Johir Haque
                </div>
            </div>
           
        </div>
        </div>
    );
};

export default Featured;