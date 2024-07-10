import { Dashboard } from '.'
import { assignments, attendance, messages, tutors2, upcomingClasses } from './data'
import style from './style.module.css'
import { ReactComponent as Time } from "../../assets/icon/time.svg";
import { ReactComponent as DashboardAss } from "../../assets/icon/dashboardass.svg";
import { combinedClasses } from '../../utilities/format';
import { Progress } from '@chakra-ui/react'
import ProgressBar from "@ramonak/react-progress-bar";
import { Link, NavLink } from 'react-router-dom';
import { routes } from '../../utilities/routes';
import { useMediaQuery } from '@chakra-ui/react'
import { DashboardHeader } from '../layout';
import style2 from './style2.module.css'
import { sideBarNav } from '../sidebar/data';
import { ChakraProvider } from "@chakra-ui/react";

export const Overview = () => {
    const mobileSideBar = useMediaQuery('(max-width: 560px)')
    return (
        <>
            <ChakraProvider>
                {mobileSideBar.includes(true) ?
                    <section className={style.login}>
                        <DashboardHeader>Dashboard</DashboardHeader>
                        <MobileDashboardMain />
                    </section> :
                    <Dashboard>
                        <DashboardMain />
                    </Dashboard>}
            </ChakraProvider>
        </>
    )
}

export const DashboardMain = () => {
    return (
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
                                <div className={style.daysTime}>
                                    <p>{upcoming.time}</p>
                                    <button>{upcoming.daysLeft} left &nbsp; <Time /> </button>
                                </div>
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
                    <ul className={style.tutorUL}>
                        {tutors2.map((tutor) =>
                            <li className={style.border}>
                                <div className={style.row}>
                                    <input
                                        // onChange={handleInput} 
                                        id="status" name="checkbox" type="checkbox" />
                                    <div>
                                        <div>{tutor.icon}</div>
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
    )
}


export const MobileDashboardMain = () => {
    return (
        <section className={style.main}>
            <div className={style.subPages}>
                <ul className={combinedClasses(style.subList, 'subList')}>
                    {sideBarNav[0].subtitle.map(list =>
                        <NavLink className={style.active} to={list.url}>{list.title}</NavLink>
                    )}
                </ul>
            </div>
            <div className={combinedClasses(style.overviewRow1, style.mobileRow1)}>
                <div className={style.upcomingClasses}>
                    <div className={style.overviewHeading}>
                        <h6>Upcoming Classes</h6>
                        <button className={style.seeAll}>
                            <Link to={routes.upcoming()}> See all</Link>
                        </button>
                    </div>
                    <ul>
                        {upcomingClasses.map((upcoming, index) =>
                            <li key={index} className={index === 1 && style.border}>
                                <div className={style.classIcon}>
                                    {upcoming.icon}
                                    <div className={style.mobileUpcomingClasses}>
                                        <p className={combinedClasses(style.course, style.course)}>{upcoming.course}</p>
                                        <p className={combinedClasses(style.date, style.date)}>{upcoming.date}</p>
                                    </div>
                                </div>
                                <div className={style.daysTime}>
                                    <p>{upcoming.time}</p>
                                    <button>{upcoming.daysLeft} left &nbsp; <Time /> </button>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={style.assignment}>
                    <div className={style.overviewHeading}>
                        <h6>Assignments</h6>
                        <button className={style.seeAll}>
                            <Link to={routes.assignmentDashboard()}> See all</Link>
                        </button>
                    </div>
                    <ul>
                        {assignments.map((assignment, index) =>
                            <li key={index} className={index === 1 && style.border}>
                                <DashboardAss />
                                <div className={style.mobileUpcomingClasses}>
                                    <p className={style.course}>{assignment.course}</p>
                                    <p className={style.date2}>{assignment.date}</p>
                                </div>
                            </li>
                        )}

                    </ul>
                </div>

            </div>
            <div className={combinedClasses(style.overviewRow2, style.mobileRow2)}>
                <div className={style.tutors}>
                    <div className={style.overviewHeading}>
                        <h6>My Tutors</h6>
                        <button className={style.seeAll}>
                            <Link to={routes.tutorDashboard()}> See all</Link>
                        </button>
                    </div>
                    <ul className={style.tutorUL}>
                        {tutors2.map((tutor) =>
                            <li className={style.border}>
                                <div className={style.row}>
                                    <input
                                        // onChange={handleInput} 
                                        id="status" name="checkbox" type="checkbox" />
                                    <div>
                                        <div>{tutor.icon}</div>
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
                        <button className={style.seeAll}>
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
    )
}