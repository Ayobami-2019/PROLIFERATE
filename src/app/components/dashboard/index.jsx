import React from "react"
import { SideBar } from "../sidebar"
import style from './style.module.css'
// import { Layout } from "../layout"
import { Header} from "../header"

export const Dashboard = (props) => {
    // className={style.dashboard}
    return (
        <section className={style.dashboard}>
            <header><Header/></header>
            <main className={style.dashboardMain}>
                <SideBar/>
                {props.children}
            </main>
        </section>
    )
}