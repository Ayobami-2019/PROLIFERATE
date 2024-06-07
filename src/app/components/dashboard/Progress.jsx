import { Dashboard } from '.'
import { upcomingClasses } from './data'
import style from './style.module.css'
import { ReactComponent as Time } from "../../assets/icon/time.svg";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import { Progress } from '@chakra-ui/react'
import ProgressBar from "@ramonak/react-progress-bar";


export const ProgressDashboard = () => {
    return (
        <Dashboard>
            <section className={style.main}>
                <h3>Progress Tracker</h3>
                <div className={style.overviewRow1}>
                    <div className={style.upcomingClasses}>
                        <div className={style.overviewHeading}>
                            <h6>Quiz and Test Scores:</h6>
                            <div>
                                <MdOutlineKeyboardDoubleArrowLeft/>
                                <MdOutlineKeyboardDoubleArrowRight/>
                                <button>page</button>
                            </div>
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
                    </div>
            </section>
        </Dashboard>

    )
}

