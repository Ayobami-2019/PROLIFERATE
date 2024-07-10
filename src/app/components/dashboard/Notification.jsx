import { Dashboard } from ".";
import { notification } from "./data";
import style from './style.module.css';
import { ReactComponent as DeleteIcon } from "../../assets/icon/delete.svg";
import { useMediaQuery } from '@chakra-ui/react'
import { DashboardHeader } from '../layout';
import { sideBarNav } from '../sidebar/data';
import { NavLink } from "react-router-dom";
import { combinedClasses } from "../../utilities/format";
import { ChakraProvider } from "@chakra-ui/react";


export const NotificationDashboard = () => {
    const mobileSideBar = useMediaQuery('(max-width: 560px)')
    const handleDelete = (id) => {
        id.removeItem('user')
    }
    return (
        <>
            <ChakraProvider>
                {mobileSideBar.includes(true) ?
                    <section className={style.login}>
                        <DashboardHeader>Dashboard</DashboardHeader>
                        <MobileNotification />
                    </section> :

                    <Dashboard>
                        <section className={style.main}>
                            <h3>Notification</h3>
                            <ul className={style.notificationList}>
                                {notification.map((list, index) =>
                                    <li key={index}>
                                        <input
                                            // onChange={handleInput} 
                                            id="status" name="checkbox" type="checkbox" />
                                        {list.icon}
                                        <div className={style.notifications}>
                                            <p>{list.message}</p>
                                            <p>{list.time}</p>
                                        </div>
                                        <DeleteIcon onClick={() => handleDelete(index)} />
                                    </li>
                                )}
                            </ul>
                        </section>
                    </Dashboard>}
            </ChakraProvider>
        </>
    )
}

export const MobileNotification = () => {
    const mobileSideBar = useMediaQuery('(max-width: 560px)')
    const handleDelete = (id) => {
        // id.removeItem('user')
    }
    return (
        <section className={style.main}>
            <div className={style.subPages}>
                <ul className={combinedClasses(style.subList, 'subList')}>
                    {sideBarNav[0].subtitle.map(list =>
                        <NavLink className={style.active} to={list.url}>{list.title}</NavLink>
                    )}
                </ul>
            </div>
            <section className={combinedClasses(style.main, style.mobileNotification)}>
                {/* <h3>Notification</h3> */}
                <p>Today</p>
                <ul className={style.notificationList}>
                    {notification.map((list, index) =>
                        <li key={index}>
                            <input
                                // onChange={handleInput} 
                                id="status" name="checkbox" type="checkbox" />
                            <div className={style.notificationIcon}>{list.icon}</div>
                            <div className={style.notifications}>
                                <p>{list.message}</p>
                                <p>{list.time}</p>
                            </div>
                            <div className={style.deleteIcon}><DeleteIcon onClick={() => handleDelete(index)} /></div>
                        </li>
                    )}
                </ul>
            </section>
        </section>
    )
}