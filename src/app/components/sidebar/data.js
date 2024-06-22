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

export const newRoutes = {
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
    submitAssignment(){
        return '/assignments/submit'
    },
    tutorDashboard(){
        return '/tutors'
    },
    manageTutor(){
        return '/tutors/manageTutors'
    },
    messageDashboard(){
        return '/messages'
    },
    paymentDashboard(){
        return '/payments'
    },
    addDashboard(){
        return '/classes/add'
    }


}


export const sideBarNav = [
    //{icon: <GoHome/>, title: '', url: ''},
    {
        id: 0,
        icon: <Home />, title: 'Dashboard', 
        // url: newRoutes.overview(),
        subtitle: [
            {id: 0, title: 'Overview', url: newRoutes.overview() },
            {id: 1, title: 'Progress Tracker', url: newRoutes.progress() },
            {id: 2, title: 'Notifications', url: newRoutes.notification() }
        ]
    },
    {
        id: 1,
        icon: <Studies />, title: 'Class', 
        // url: newRoutes.classes(),
        subtitle: [
            {id: 0, title: 'My Classes', url: newRoutes.classes() },
            {id: 1, title: 'Upcoming Clases', url: newRoutes.upcoming() },
            {id: 2, title: 'Add New', url: newRoutes.addDashboard() }
        ]
    },
    {id: 2, icon: <Assignment />, title: 'Assignments',
    subtitle: [
        {id: 0, title: 'View Assignment', url: newRoutes.assignmentDashboard() },
        {id: 1, title: 'Submit Assignment', url: newRoutes.submitAssignment() }
    ]},
    {id: 3, icon: <Tutor />, title: 'Tutor',
    subtitle: [
        {id: 0, title: 'My Tutors', url: newRoutes.tutorDashboard() },
        {id: 1, title: 'Manage Tutors', url: newRoutes.manageTutor() }
    ]},
    {id: 4, icon: <Message />, title: 'Messaging', url: newRoutes.messageDashboard },
    {id: 5, icon: <Earnings />, title: 'Payment', url: newRoutes.paymentDashboard() },
    {id: 6, icon: <Feedback />, title: 'Feedback', url: newRoutes.feedback() },
    {id: 7, icon: < Settings />, title: 'Settings', url: newRoutes.profileSettings() },
    {id: 8, icon: <LogoutIcon />, title: 'Logout', url: '' }
]