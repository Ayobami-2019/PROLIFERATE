import { Dashboard } from '.'
import { upcomingClasses, progress } from './data'
import style from './style.module.css'
import { ReactComponent as Time } from "../../assets/icon/time.svg";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { ChakraProvider } from "@chakra-ui/react";
// import { Progress } from '@chakra-ui/react'
// import ProgressBar from "@ramonak/react-progress-bar";
// import { TablePagination } from 'react-pagination-table';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { combinedClasses } from '../../utilities/format';
import { useMediaQuery } from '@chakra-ui/react'
import { DashboardHeader } from '../layout';
import { sideBarNav } from '../sidebar/data';
// --legacy-peer-deps

export const ProgressDashboard = () => {
    const mobileSideBar = useMediaQuery('(max-width: 560px)')
    return (
        <>
            <ChakraProvider>
                {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <DashboardHeader>Dashboard</DashboardHeader>
                    <MobileProgress />
                </section> :
                <Dashboard>
                    <section className={style.main}>
                        <h3>Progress Tracker</h3>
                        <ProgressTable />
                    </section>
                </Dashboard>}
                </ChakraProvider>
        </>


    )
}

export const ProgressTable = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [newBg, setNewBg] = React.useState(false)
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
        // const getClass=document.querySelector('#bg')
        //     const newClass= getClass.classList.add('newClass')

    }
    // console.log(currentPage)
    // currentPage===true ? console.log(false) : console.log(true)
    return (
        <section className={style.tableDiv}>
            <div className={style.tablePagination}>
                <h3>Quiz and Test Scores</h3>
                <ul className={combinedClasses(style.pagination, "pagination")}>
                    <li class="page-item">
                        <a class="page-link" href="#" ><MdOutlineKeyboardDoubleArrowLeft onClick={previousPage} /></a>
                    </li>
                    {numbers.map((number, index) =>
                        <li class="page-item-num" key={index} id='bg'>
                            <NavLink className={currentPage ? 'active' : ''} href="#" onClick={() => changePage(number)}>{number}</NavLink>
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

export const MobileProgress = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [newBg, setNewBg] = React.useState(false)
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
        // const getClass=document.querySelector('#bg')
        //     const newClass= getClass.classList.add('newClass')

    }
    // console.log(currentPage)
    // currentPage===true ? console.log(false) : console.log(true)
    return (
        <section className={style.main}>
            <div className={style.subPages}>
                <ul className={combinedClasses(style.subList, 'subList')}>
                    {sideBarNav[0].subtitle.map(list =>
                        <NavLink className={style.active} to={list.url}>{list.title}</NavLink>
                    )}
                </ul>
            </div>
            {/* <section className={style.tableDiv}> */}
            <div className={style.tablePagination}>
                <h3>Quiz and Test Scores</h3>


                {/* <table className={style.progressTable}> */}

                <ul className={style.tableContent}>
                    {records.map((list, index) =>
                        <li key={index} className={combinedClasses(style.testList, 
                        // index === records.length - 1 ? style.noborder : style.border
                    )}>
                            <div className={style.testRow1}>
                                <div>
                                    <p className={style.title}>{list.course}</p>
                                    <div className={style.dateTime}>
                                        <p>{list.date}</p>
                                        <p>{list.time}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className={style.miniTitle}>Result</p>
                                    {/* className={style.lastColumn}> */}
                                    <div className={combinedClasses( list.upcoming && style.upcoming, list.pass && style.pass, list.fail && style.fail)}>{list.upcoming}{list.pass}{list.fail}
                                    </div>
                                </div>
                            </div>
                            {!list.upcoming && 
                            <div className={style.testRow2}>
                                <div>
                                    <p>Marks</p>
                                    <p>{list.mark}</p>
                                </div>
                                <div>
                                    <p>Questions attempted</p>
                                    <p>{list.attempted}</p>
                                </div>
                                <div>
                                    <p>Correct</p>
                                    <p>{list.correct}</p>
                                </div>
                                <div>
                                    <p>Wrong</p>
                                    <p>{list.wrong}</p>
                                </div>
                            </div>}
                        </li>
                    )}
                </ul>


                <ul className={combinedClasses("pagination", style.pagination)}>
                    <li class="page-item">
                        <a class="page-link" href="#" ><MdOutlineKeyboardDoubleArrowLeft onClick={previousPage} /></a>
                    </li>
                    {numbers.map((number, index) =>
                        <li class="page-item-num" key={index} id='bg'>
                            <NavLink className={currentPage ? 'active' : ''} href="#" onClick={() => changePage(number)}>{number}</NavLink>
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
            {/* </section> */}
        </section>
    )
}