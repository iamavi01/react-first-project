import React from 'react'
import './popup.css'
const popup = (props) => {
    return (props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
                <button className='close-btn' onClick={()=>props.setClose(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ):"";
}

export default popup
