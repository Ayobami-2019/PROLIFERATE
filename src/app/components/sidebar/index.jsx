
import React from "react"
import { SideBarDiv } from './SideBar'
import style from './style.module.css'


export const SideBar = () => {
    return (
        <aside className={style.sideBar}>
            <SideBarDiv/>
        </aside>
    )
}