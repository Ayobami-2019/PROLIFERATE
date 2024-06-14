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
    },
    profileSettings(){
        return '/settings/profileSettings'
    },
    assignmentDashboard(){
        return '/assignments'
    },
    tutorDashboard(){
        return '/tutors'
    },
    messageDashboard(){
        return '/messages'
    },
    paymentDashboard(){
        return '/payments'
    }


}


export const sideBarNav = [
    //{icon: <GoHome/>, title: '', url: ''},
    {
        icon: <Home />, title: 'Dashboard', url: newRoutes.overview(),
        subtitle: [
            { title: 'Overview', url: newRoutes.overview() },
            { title: 'Progress Tracker', url: newRoutes.progress() },
            { title: 'Notifications', url: newRoutes.notification() }
        ]
    },
    {
        icon: <Studies />, title: 'Class', url: newRoutes.classes(),
        subtitle: [
            { title: 'My Classes', url: newRoutes.classes() },
            { title: 'Upcoming Clases', url: newRoutes.upcoming() },
            { title: 'Reschedule', url: newRoutes.reschedule() }
        ]
    },
    { icon: <Assignment />, title: 'Assignments', url: newRoutes.assignmentDashboard() },
    { icon: <Tutor />, title: 'Tutor', url: newRoutes.tutorDashboard() },
    { icon: <Message />, title: 'Messaging', url: newRoutes.messageDashboard },
    { icon: <Earnings />, title: 'Payment', url: newRoutes.paymentDashboard() },
    { icon: <Feedback />, title: 'Feedback', url: newRoutes.feedback() },
    { icon: < Settings />, title: 'Settings', url: newRoutes.profileSettings() },
    { icon: <LogoutIcon />, title: 'Logout', url: '' }
]