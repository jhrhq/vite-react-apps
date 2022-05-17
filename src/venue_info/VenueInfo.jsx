import { Facebook } from '@mui/icons-material';
import React from 'react';
import { Zoom } from 'react-reveal';

const VenueInfo = () => {
    return (
        <div className='bck_black'>
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon" style={{display:'flex', alignItem: 'center', justifyContent:'center'}}>
                                        <Facebook />
                                    </div>
                                    <div className="vn-title">Event Date and time</div>
                                    <div className="vn_desc">7 aug 2023 10pm</div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon" style={{display:'flex', alignItem: 'center', justifyContent:'center'}}>
                                        <Facebook />
                                    </div>
                                    <div className="vn-title">Event Date and time</div>
                                    <div className="vn_desc">7 aug 2023 10pm</div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default VenueInfo;