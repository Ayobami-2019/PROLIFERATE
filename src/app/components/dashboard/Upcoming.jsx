import React from 'react';
import style from './style.module.css';
import { Dashboard } from '.';
import { classes } from './data';
import { combinedClasses } from '../../utilities/format';
import { routes } from '../../utilities/routes';
import { Link } from 'react-router-dom';


export const UpcomingDashboard = () => {
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
    return (
        <Dashboard>
            <section className={style.main}>
                <h3>Upcoming Classes</h3>
                <div className={style.classes}>
                    <div className={style.tableHead}>
                        <p>Classes to prepare for</p>
                        <button>
                            <Link to={routes.reschedule()}>Add New</Link>
                        </button>
                    </div>
                    <table className={style.classesTable}>
                        <thead>
                            <th>Subject</th>
                            <th>Tutor</th>
                            <th>Schedule</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            {classes.map((data, index) =>
                                <tr key={index}>
                                    <td>{data.subject}</td>
                                    <td>{data.tutor}</td>
                                    <td >{data.schedule}</td>
                                    <td className={style.blueColor} onClick={feedbackShow}>Reschedule</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
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
                    </div>}
            </section>
        </Dashboard>
    )
}