import { Dashboard } from ".";
import { notification } from "./data";
import style from './style.module.css';
import {ReactComponent as DeleteIcon } from "../../assets/icon/delete.svg";

export const NotificationDashboard = () => {
    return (
        <Dashboard>
            <section className={style.main}>
                <h3>Notification</h3>
                <ul className={style.notificationList}>
                    {notification.map((list) =>
                        <li>
                            <input
                                // onChange={handleInput} 
                                id="status" name="checkbox" type="checkbox" />
                            {list.icon}
                            <div className={style.notifications}>
                                <p>{list.message}</p>
                                <p>{list.time}</p>
                            </div>
                            <DeleteIcon/>
                        </li>
                    )}
                </ul>
            </section>
        </Dashboard>
    )
}