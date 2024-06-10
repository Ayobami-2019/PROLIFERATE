import { Dashboard } from '.'
import { upcomingClasses, progress } from './data'
import style from './style.module.css'
import { ReactComponent as Time } from "../../assets/icon/time.svg";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import { Progress } from '@chakra-ui/react'
import ProgressBar from "@ramonak/react-progress-bar";
import { TablePagination } from 'react-pagination-table';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { combinedClasses } from '../../utilities/format';
// --legacy-peer-deps

export const ProgressDashboard = () => {
    return (
        <Dashboard>
            <section className={style.main}>
                <h3>Progress Tracker</h3>
                <ProgressTable />
            </section>
        </Dashboard>

    )
}

export const ProgressTable = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const recordsPerPage = 7;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = progress.slice(firstIndex, lastIndex);
    const pagesNumber = Math.ceil(progress.length / recordsPerPage);
    const numbers = [...Array(pagesNumber + 1).keys()].slice(1)
    //console.log(numbers.lastIndex)
    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const nextPage = () => {
        if (currentPage !== pagesNumber) {
            setCurrentPage(currentPage + 1)
        }
    }
    const changePage = (id) => {
        setCurrentPage(id)
    }

    return (
        <section className={style.tableDiv}>
            <div className={style.tablePagination}>
                <h3>Quiz and Test Scores</h3>
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" ><MdOutlineKeyboardDoubleArrowLeft onClick={previousPage} /></a>
                    </li>
                    {numbers.map((number, index) =>
                        <li class="page-item" key={index}>
                            <a class="page-link" href="#" onClick={() => changePage(number)}>{number}</a>
                        </li>
                    )}
                    {/* <li class="page-item active">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">3</a>
                    </li> */}
                    {/* //remember active state */}
                    <li class="page-item">
                        <a class="page-link" href="#" ><MdOutlineKeyboardDoubleArrowRight onClick={nextPage} /></a>
                    </li>
                </ul>
            </div>
            <table className={style.progressTable}>
                <thead>
                    <th>Test</th>
                    <th>Marks</th>
                    <th>Questions attempted</th>
                    <th>Correct</th>
                    <th>Wrong</th>
                    <th className={style.center}>Result</th>
                </thead>
                <tbody>
                    {records.map((list, index) =>
                        <tr key={index} className={index === records.length - 1 ? style.noborder : style.border}>
                            <td>
                                <p className={style.test}>{list.course}</p>
                                <div className={style.dateTime}>
                                    <p>{list.date}</p>
                                    <p>{list.time}</p>
                                </div>
                            </td>
                            <td className={style.test}>{list.mark}</td>
                            <td className={style.test}>{list.attempted}</td>
                            <td className={style.test}>{list.correct}</td>
                            <td className={style.test}>{list.wrong}</td>
                            <td className={style.lastColumn}><div className={combinedClasses(style.test, list.upcoming && style.upcoming, list.pass && style.pass, list.fail && style.fail)}>{list.upcoming}{list.pass}{list.fail}</div></td>
                        </tr>
                    )}

                </tbody>
            </table>
        </section>
    )
}

