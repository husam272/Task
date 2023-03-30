import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Savesegment = () => {
  return (
    <>
        <div className='save'>
            <div className='header'>
                <div className='icon'><ArrowBackIosIcon/></div>
                <div className='title1'>View Audience</div>
            </div>
            <div>
                <a href="/segmentpage"><div className='btn'>
                    Save Segment
                </div>
                </a>
            </div>
        </div>
    </>
  )
}

export default Savesegment
