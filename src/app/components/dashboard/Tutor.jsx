import style from './style.module.css';
import { Dashboard } from '.';
import { tutors } from './data';
import { ReactComponent as TutorMore } from "../../assets/icon/tutorMore.svg";
import { combinedClasses } from '../../utilities/format';
import style2 from './style2.module.css';
import { createContext, useContext, useState, useMemo } from 'react';
import { TutorDetails } from './Add';
import React from 'react';
import { MyButton } from '../button';
import { Link } from 'react-router-dom';
import { routes } from '../../utilities/routes';
import { ReactComponent as TutorMore2 } from "../../assets/icon/more2.svg";


// const TutorContext = createContext(null)

export const TutorDashboard = () => {
    const [index, setIndex] = React.useState()
    const [info, setInfo] = React.useState()
    const handleMore = (tutor) => {
        // console.log(tutor)
        // setIndex(tutor.name)
        setInfo(tutor)
        // Navigate(routes.medicineDetail())
    }

    return (
        <Dashboard>
            {/* <TutorContext.Provider value={info}> */}
            <section className={style.main}>
                <h3>My Tutors</h3>
                <div className={style2.tutorDashboard}>
                    {info ?
                        <div className={style2.tutorDetails}>
                            <div className={style.tutorInfo}>
                                {info.icon}
                                <p className={style.name}>{info.name}</p>
                                <p className={style.course}>{info.course} Tutor</p>

                            </div>
                            <div className={style2.tutorDetailsDiv}>
                                <TutorDetails info={info} />
                                <div className={style2.buttons}>
                                    <MyButton type='primary'
                                    // onClick={feedbackShow}
                                    // onClick={handleSave}
                                    // disabled={isSubmitting}
                                    >Feedback
                                    </MyButton>
                                    <MyButton type='outline'
                                    // onClick={handleSave}
                                    // disabled={isSubmitting}
                                    >Review</MyButton>

                                </div>
                            </div>
                        </div> :
                        <ul className={combinedClasses(style.tutorUL)}>
                            {tutors.map((tutor) =>
                                <li className={style.border}>
                                    <div className={combinedClasses(style.row, style2.row)}>
                                        <input
                                            // onChange={handleInput} 
                                            id="status" name="checkbox" type="checkbox" />
                                        <div>
                                            <div>{tutor.icon}</div>
                                            <p className={style.tutor}>{tutor.name}</p>
                                        </div>
                                    </div>
                                    <button>Active</button>
                                    <TutorMore onClick={() => handleMore(tutor)} />
                                </li>

                            )}

                        </ul>}
                </div>
            </section>
            {/* </TutorContext.Provider> */}
        </Dashboard>
    )
}

export const ManageTutors = () => {
    const [index, setIndex] = React.useState()
    const [info, setInfo] = React.useState()
    const handleMore = (tutor) => {
        // console.log(tutor)
        // setIndex(tutor.name)
        setInfo(tutor)
        // Navigate(routes.medicineDetail())
    }

    return (
        <Dashboard>
            {/* <TutorContext.Provider value={info}> */}
            <section className={style.main}>
                <h3>Manage Tutors</h3>
                <div className={style2.tutorDashboard}>
                    {info ?
                        <div className={style2.tutorDetails}>
                            <div className={style.tutorInfo}>
                                {info.icon}
                                <p className={style.name}>{info.name}</p>
                                <p className={style.course}>{info.course} Tutor</p>

                            </div>
                            <div className={style2.tutorDetailsDiv}>
                                <TutorDetails info={info} />

                            </div>
                        </div> :
                        <div className={style2.manageTutors}>
                            <ul className={combinedClasses(style.tutorUL)}>
                                {tutors.map((tutor) =>
                                    <li className={style.border}>
                                        <div className={combinedClasses(style.row, style2.row)}>
                                            <input
                                                // onChange={handleInput} 
                                                id="status" name="checkbox" type="checkbox" />
                                            <div>
                                                <div>{tutor.icon}</div>
                                                <p className={style.tutor}>{tutor.name}</p>
                                            </div>
                                        </div>
                                        <button>Active</button>
                                        <TutorMore2 onClick={() => handleMore(tutor)} />
                                    </li>


                                )}

                            </ul>
                            <div className={style2.buttons}>
                                <MyButton type='primary'
                                // onClick={feedbackShow}
                                // onClick={handleSave}
                                // disabled={isSubmitting}
                                >Add new Session
                                </MyButton>
                                <MyButton type='outline'
                                // onClick={handleSave}
                                // disabled={isSubmitting}
                                >Cancel Session</MyButton>

                            </div>
                        </div>}

                </div>
            </section>
            {/* </TutorContext.Provider> */}
        </Dashboard>
    )
}