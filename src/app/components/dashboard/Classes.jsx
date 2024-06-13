import style from './style.module.css';
import { Dashboard } from '.';
import { classes } from './data';
import {ReactComponent as Star } from "../../assets/icon/star.svg";

export const Classes = () => {

    return (
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
                                        <Star/> <Star/><Star/><Star/><Star/>
                                        </div></td>
                                    </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </section>
        </Dashboard>
    )
}