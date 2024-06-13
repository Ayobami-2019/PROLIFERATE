//import {ReactComponent as GoHome } from "react-icons/home.svg";
import React from "react";
import { ReactComponent as Tutor } from "../../assets/icon/tutor.svg";
// import { Manage } from "react-icons/Vector (1).svg";
import { ReactComponent as Studies } from "../../assets/icon/class.svg";
import { ReactComponent as Assignment } from "../../assets/icon/assignment.svg";
//import { ReactComponent as Progress } from "../../assets/icon/progress.svg";
import { ReactComponent as Message } from "../../assets/icon/sidemessage.svg";
import { ReactComponent as Earnings } from "../../assets/icon/payment.svg";
import { ReactComponent as Feedback } from "../../assets/icon/feedback.svg";
import { ReactComponent as Settings } from "../../assets/icon/sidesettings.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icon/logout.svg";
import { ReactComponent as Home } from "../../assets/icon/homeIcon.svg";
import { routes } from '../../utilities/routes'
import { classes } from "../dashboard/data";

const newRoutes = {
    overview() {
        return '/dashboard/overview'
    },
    progress() {
        return '/dashboard/progress'
    },
    notification() {
        return '/dashboard/notification'
    },
    classes() {
        return '/classes/schedule'
    },
    upcoming() {
        return '/classes/upcomingClasses'
    },
    reschedule() {
        return '/classes/reschedule'
    },
    feedback(){
        return '/feedback'
    }


}


export const sideBarNav = [
    //{icon: <GoHome/>, title: '', url: ''},
    {
        icon: <Home />, title: 'Dashboard', url: '',
        subtitle: [
            { title: 'Overview', url: newRoutes.overview() },
            { title: 'Progress Tracker', url: newRoutes.progress() },
            { title: 'Notifications', url: newRoutes.notification() }
        ]
    },
    {
        icon: <Studies />, title: 'Class', url: '',
        subtitle: [
            { title: 'My Classes', url: newRoutes.classes() },
            { title: 'Upcoming Clases', url: newRoutes.upcoming() },
            { title: 'Reschedule', url: newRoutes.reschedule() }
        ]
    },
    { icon: <Assignment />, title: 'Assignments', url: '' },
    { icon: <Tutor />, title: 'Tutor', url: '' },
    { icon: <Message />, title: 'Messaging', url: '' },
    { icon: <Earnings />, title: 'Payment', url: '' },
    { icon: <Feedback />, title: 'Feedback', url: newRoutes.feedback() },
    { icon: < Settings />, title: 'Settings', url: routes.profileSettings() },
    { icon: <LogoutIcon />, title: 'Logout', url: '' }
]