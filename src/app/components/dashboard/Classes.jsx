import style from './style.module.css';
import { Dashboard } from '.';
import { classes } from './data';
import MyRating from '../rating';
import { combinedClasses } from '../../utilities/format';
import { useMediaQuery } from '@chakra-ui/react'
import { DashboardHeader } from '../layout';

export const Classes = () => {
    const mobileSideBar = useMediaQuery('(max-width: 560px)')
    return (
        <>
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <DashboardHeader>My Schedules</DashboardHeader>
                    <MobileClasses />
                </section> :
                <Dashboard>
                    <section className={style.main}>
                        <h3>My Classes</h3>
                        <div className={style.classes}>
                            <p>My Class Schedules</p>
                            <table className={style.classesTable}>
                                <thead>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Schedule</th>
                                    <th>Ratings</th>
                                </thead>
                                <tbody>
                                    {classes.map((data, index) =>
                                        <tr key={index}>
                                            <td>{data.subject}</td>
                                            <td>{data.tutor}</td>
                                            <td >{data.schedule}</td>
                                            <td><div className={style.rating}>
                                                <MyRating />
                                            </div></td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </section>
                </Dashboard>
            }</>
    )

}

export const MobileClasses = () => {

    return (
        <section className={style.main}>

            <div className={combinedClasses(style.classes, style.mobileClass)}>
                <div className={style.mobilePageTitle}>
                    <h3>My Classes</h3>
                    <p>My Class Schedules</p>
                </div>
                {/* <div className={style.classes}> */}
                {/* <div className={style.tableHead}>
                    <p>Classes to prepare for</p>

                </div> */}
                <ul >
                    {classes.map((data, index) =>
                        <li key={index} className={combinedClasses(style.testList,
                            // index === records.length - 1 ? style.noborder : style.border
                        )}>
                            <div className={style.testRow1}>
                                <div>
                                    <p>Subject: {data.subject}</p>
                                    <p>Tutor: {data.tutor}</p>
                                </div>
                                <div>
                                    <p>Ratings</p>
                                    <MyRating />

                                </div>
                            </div>
                            <div className={style.testRow2}>
                                <p>Schedules: {data.schedule}</p>
                            </div>

                        </li>
                    )}
                </ul>
            </div >
        </section >
    )
}