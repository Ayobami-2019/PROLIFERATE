import style from './style.module.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { combinedClasses } from '../../utilities/format';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
// import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { sideBarNav } from "./data";
import { ReactComponent as RightArrow } from "../../assets/icon/rightArrow.svg";
import { ReactComponent as SidePic } from "../../assets/images/sidePic.svg";
import { routes } from '../../utilities/routes';
import { keys } from '@material-ui/core/styles/createBreakpoints';



export const SideBarDiv = (props) => {
    
    const [notification, setNotification] = React.useState(false)
    const [data, setData] = React.useState([])
    const [badge, setBadge] = React.useState()
    const [newIndex, setNewIndex] = React.useState()
    // useEffect(() => {
    //     axios.get('http://localhost:3001/stock')
    //         .then(result => {
    //             setData(result.all);
    //             // toast(result.all.message)

    //         })
    //     // .catch(error => console.log(error))
    //     setBadge(data.length)
    // }, [])
    const makeSubNavActive = () => {


    }
    const handleNotification = (e) => {
        // e.preventdefault()
        // console.log(badge)
        setBadge(0)
        setNotification(!notification)
    }
    // const navDropDown = () => {
    //     setDropDown(!dropDown)
    // }

    return (
        <div className={combinedClasses(style.sidebar, props.className)}>
            <div className={style.navContainer}>
                {sideBarNav.map(list =>
                    <ListData {...list} key={list.id} />
                )}

            </div>
            <div className={style.refer}>
                <SidePic />
                <button>
                    <Link to={routes.refer()}>Refer and Earn</Link>
                </button>
            </div>
        </div>
    )
}

export const ListData = ({ ...props }) => {
    
    const [dropDown, setDropDown] = React.useState(false)
    const navDropDown = (subtitle) => {
        subtitle && setDropDown(!dropDown)
    }
    return (
        <div>
            <NavLink to={props.url} className={combinedClasses(style.navBar, 'bluebglink')} onClick={()=> navDropDown(props.subtitle)}>

                <div className= {props.icon ? style.navBardiv : combinedClasses(style.navText, style.navBardiv)} >
                    {props.icon}
                    <div className={style.navTitle}>
                        <h6 className={style.navTitle}>{props.title}</h6>
                        {/* <NavLink to={nav.subtitle.url} className={combinedClasses(style.subdata, 'bluebglink')} key={index}>{nav.subtitle.title}</NavLink> */}
                    </div>
                </div>
                {props.icon && <RightArrow />}
            </NavLink>
            {/* <ul>
                {ingredients.map(ingredient =>
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                )} */}
            {dropDown && props.subtitle &&
                <div className={combinedClasses(style.navBardiv, style.subtitle, 'navDiv')}>

                    {props.subtitle.map((subData) =>
                        <NavLink to={subData.url} className={combinedClasses(style.subdata, 'bluebglink')} key={subData.id} onClick={()=> setDropDown(!dropDown)}>{subData.title}</NavLink>
                    )}
                </div>}
            {/* </ul> */}
        </div>
    );
}

export const SideList = () => {
    return (
        <div>
            {sideBarNav.map(list =>
                <ListData {...list} key={list.id} />
            )}
        </div>
    );
}
