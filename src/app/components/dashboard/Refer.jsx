import React from 'react';
import style from './style.module.css';
import { CustomInput } from '../input';
import { Dashboard } from '.';
import { combinedClasses } from '../../utilities/format';

export const ReferDashboard = () => {
    const [feedback, setFeedback]=React.useState(false)
    const [submitted, setSubmitted]=React.useState(false)
    const id=document.getElementById('main')
    const feedbackShow=(e)=>{
        e.preventDefault()
        setFeedback(!feedback);
        setSubmitted(true)
        id.classList.toggle('blur')
        
    }
    const cancel=(e)=>{
        // e.preventDefault()
        setFeedback(false);
        setSubmitted(false);
    }
    return (
        <Dashboard>
            <section className={combinedClasses(style.main, style.referMain)} >
                {/* <div> */}
                <h3 id='main'>Refer a Friend</h3>
                <div className={style.refer} disabled={submitted} id='main'>
                    <p>Fill out your friend's email address, to invite them.</p>
                    <form action="">
                        <CustomInput
                            // onChange={handleInput} 
                            name='username' type="email" placeholder="Enter your email address" label='Email Address:' />
                        <button onClick={feedbackShow}>Send Invitation</button>
                    </form>
                    <div>
                        <h6>Notes</h6>
                        <p>By clicking "Send Invitation," you agree to our terms and conditions and acknowledge that you have permission to share your friend's contact information.</p>
                    </div>
                    {/* </div> */}
                </div>
                {feedback &&
                <div className={style.referFeedback}>
                    <h5>Invitation Link Sent</h5>
                    <p>An invitation link has been successfully sent to the email address provided. Please ask the recipient to check their email inbox, including spam or junk folders, for further instructions.</p>
                    <button onClick={cancel}>OK</button>
                </div>}
            </section>
        </Dashboard>
    )
}