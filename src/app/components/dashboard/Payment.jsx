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