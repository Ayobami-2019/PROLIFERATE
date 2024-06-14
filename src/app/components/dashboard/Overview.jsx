import { Dashboard } from '.'
import { assignments, attendance, messages, tutors2, upcomingClasses } from './data'
import style from './style.module.css'
import { ReactComponent as Time } from "../../assets/icon/time.svg";
import { ReactComponent as DashboardAss } from "../../assets/icon/dashboardass.svg";
import { combinedClasses } from '../../utilities/format';
import { Progress } from '@chakra-ui/react'
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';
import { routes } from '../../utilities/routes';


export const Overview = () => {
    return (
        <Dashboard>
            <section className={style.main}>
                <h3>Overview</h3>
                <div className={style.overviewRow1}>
                    <div className={style.upcomingClasses}>
                        <div className={style.overviewHeading}>
                            <h6>Upcoming Classes</h6>
                            <button>
                                <Link to={routes.upcoming()}> See all</Link>
                                </button>
                        </div>
                        <ul>
                            {upcomingClasses.map((upcoming, index) =>
                                <li key={index} className={index === 1 && style.border}>
                                    {upcoming.icon}
                                    <div>
                                        <p className={style.course}>{upcoming.course}</p>
                                        <p className={style.date}>{upcoming.date}</p>
                                    </div>
                                    <p>{upcoming.time}</p>
                                    <button>{upcoming.daysLeft} &nbsp; <Time /> </button>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={style.assignment}>
                        <div className={style.overviewHeading}>
                            <h6>Assignments</h6>
                            <button>
                            <Link to={routes.assignmentDashboard()}> See all</Link>
                                </button>
                        </div>
                        <ul>
                            {assignments.map((assignment, index) =>
                                <li key={index} className={index === 1 && style.border}>
                                    <DashboardAss />
                                    <div>
                                        <p className={style.course}>{assignment.course}</p>
                                        <p className={style.date}>{assignment.date}</p>
                                    </div>
                                </li>
                            )}

                        </ul>
                    </div>

                </div>
                <div className={style.overviewRow2}>
                    <div className={style.tutors}>
                        <div className={style.overviewHeading}>
                            <h6>My Tutors</h6>
                            <button>
                            <Link to={routes.tutorDashboard()}> See all</Link>
                                </button>
                        </div>
                        <ul>
                            {tutors2.map((tutor) =>
                                <li className={style.border}>
                                    <div className={style.row}>
                                        <input
                                            // onChange={handleInput} 
                                            id="status" name="checkbox" type="checkbox" />
                                        <div>
                                            {tutor.icon}
                                            <p className={style.tutor}>{tutor.name}</p>
                                        </div>
                                    </div>
                                    <button>{tutor.status}</button>
                                </li>

                            )}

                        </ul>
                    </div>
                    <div className={style.messages}>
                        <div className={style.overviewHeading}>
                            <h6>Messages</h6>
                            <button>
                            <Link to={routes.messageDashboard()}> See all</Link>
                                </button>
                        </div>
                        <ul>
                            {messages.map((message) =>
                                <li className={style.border}>
                                    <div className={style.row}>
                                        <div className={style.initial}>{message.name[0]}</div>
                                        <div>
                                            <p className={style.name}>{message.name}</p>
                                            <p className={style.message}>{message.message}</p>
                                        </div>
                                    </div>
                                    <p>{message.time}</p>
                                </li>

                            )}

                        </ul>
                    </div>
                    <div className={combinedClasses(style.attendance)}>
                        <div className={style.overviewHeading}>
                            <h6>Monthly Class Attendance</h6>
                        </div>
                        <ul>
                            {attendance.map((subject) =>
                                <li>
                                    <div>
                                        <h4 className={style.course}>{subject.course}</h4>
                                        <h4 className={style.mark}>{subject.mark}</h4>
                                    </div>
                                    <div className={style.progress}>
                                        <ProgressBar
                                            completed={subject.mark}
                                            className={style.wrapper}
                                            barContainerClassName={style.container}
                                            completedClassName={style.barCompleted}
                                            labelClassName={style.label}
                                            isLabelVisible={false}
                                        />
                                        {/* <ProgressBar completed={subject.mark} isLabelVisible={false}/> */}
                                    </div>
                                </li>
                            )}

                        </ul>
                    </div>
                </div>
            </section>
        </Dashboard>

    )
}

