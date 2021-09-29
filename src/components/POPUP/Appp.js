import React from 'react'
import Popup from './popup'
import { useState } from 'react'
const Appp = () => {
    const [triggerPopUp,setTriggerPopup]=useState(false)
    return (
        <div>
            <main className='containerr' > 
                <div className='default-text'>
                    Popup heare
                    <button className='open-btn' onClick={()=>setTriggerPopup(!triggerPopUp)}>
                        Open PopUp
                    </button>
                </div>
            </main>
                    <Popup trigger={triggerPopUp} setClose={setTriggerPopup}>
                        hello world
                    </Popup>
        </div>
    )
}

export default Appp
