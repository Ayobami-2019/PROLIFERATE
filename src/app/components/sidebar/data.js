//import {ReactComponent as GoHome } from "react-icons/home.svg";
import {ReactComponent as Tutor } from "../../assets/icon/tutor.svg";
// import { Manage } from "react-icons/Vector (1).svg";
import {ReactComponent as Studies } from "../../assets/icon/class.svg";
import {ReactComponent as Assignment } from "../../assets/icon/assignment.svg";
import {ReactComponent as Progress } from "../../assets/icon/progress.svg";
import {ReactComponent as Message } from "../../assets/icon/sidemessage.svg";
import {ReactComponent as Earnings } from "../../assets/icon/payment.svg";
import {ReactComponent as Feedback } from "../../assets/icon/feedback.svg";
import {ReactComponent as Settings } from "../../assets/icon/sidesettings.svg";
import {ReactComponent as LogoutIcon } from "../../assets/icon/logout.svg";
import {ReactComponent as Home } from "../../assets/icon/homeIcon.svg";
import {routes} from '../../utilities/routes'

export const sideBarNav=[
    //{icon: <GoHome/>, title: '', url: ''},
    {icon: <Home/>, title: 'Dashboard', url: '',
    subtitle: [
        {title: 'Overview', url: routes.overview()}, 
        {title: 'Progress Tracker', url: routes.progress()},
        {title: 'Notifications', url: routes.notification()}
    ]
},
    // {title: 'Overview', url: ''},
    // {title: 'Progress Tracker', url: ''},
    // {title: 'Notifications', url: ''},
    {icon: <Studies/>, title: 'Class', url: ''},
    {icon: <Assignment/>, title: 'Assignments', url: ''},
    {icon: <Tutor/>, title: 'Tutor', url: ''},
    {icon: <Message/>, title: 'Messaging', url: ''},
    {icon: <Earnings/>, title: 'Payment', url: ''},
    {icon: <Feedback/>, title: 'Feedback', url: ''},
    {icon: < Settings/>, title: 'Settings', url: ''},
    {icon: <LogoutIcon/>, title: 'Logout', url: ''}
]