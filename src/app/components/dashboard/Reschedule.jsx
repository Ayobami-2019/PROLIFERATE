import style from './style.module.css';
import { Dashboard } from '.';
import { combinedClasses } from '../../utilities/format';
import { routes } from '../../utilities/routes';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import {CustomCalendar} from '../DatePicker'
import { MyEventCalendar } from '../eventCalendar/EventCalendar'
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";


export const Reschedule = () => {
    const [feedback, setFeedback] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)
    const feedbackShow = (e) => {
        e.preventDefault()
        setFeedback(!feedback);
        setSubmitted(true)

    }
    const cancel = (e) => {
        // e.preventDefault()
        setFeedback(false);
        setSubmitted(false);
    }
    // console.log(startOfMonth(new Date()))

    return (
        <Dashboard>
            <section className={combinedClasses(style.main, style.reschedule)}>
                <h3>Classes Schedules | Reschedule</h3>
                <div className={style.rescheduleCalendar}>
                    <p>Classes to reschedule</p>
                    {/* <div className={style.calendarHead}>
                    <LiaAngleLeftSolid/><p> JANUARY 2024</p><LiaAngleRightSolid/>
                    </div> */}
                    <MyEventCalendar />
                    <div className={style.buttons}>
                        <button>Save</button>
                    </div>
                </div>


                {feedback &&
                    <div className={combinedClasses(style.referFeedback, style.upcomingAlert)}>
                        <h5>Reschedule Class</h5>
                        <p>You can reshedule up to 3 sessions at once.
                            To Proceed,
                            Simply select the date(s) in the calendar.</p>
                        <div className={style.buttons}>
                            <button onClick={cancel} className={style.button1}>Cancel</button>
                            <button className={style.button2}>
                                <Link to={routes.reschedule()}>Proceed</Link></button>
                        </div>
                    </div>
                }
            </section>
        </Dashboard>
    )
}

