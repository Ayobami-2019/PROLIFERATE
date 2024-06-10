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



export const SideBarDiv = (props) => {
    const [show, setShow] = React.useState(false)
    const [dropDown, setDropDown] = React.useState(false)
    const handleDropDown = () => {
        setShow(!show)

        // !show ? arrow===<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>
    }
    const [notification, setNotification] = React.useState(false)
    const [data, setData] = React.useState([])
    const [badge, setBadge] = React.useState()
    useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {
                setData(result.all);
                // toast(result.all.message)

            })
            .catch(error => console.log(error))
        setBadge(data.length)
    }, [])
    const makeSubNavActive = () => {


    }
    const handleNotification = (e) => {
        // e.preventdefault()
        console.log(badge)
        setBadge(0)
        setNotification(!notification)
    }
    const navDropDown = (e) => {
        // e.preventDefault()
        setDropDown(!dropDown)
        // if (e.target.className === style.subData){
        //      setDropDown(!dropDown)
        // }
        // else{
        //     setDropDown(!dropDown)
        //     }
        // let subMenu= e.target.querySelector(style.subData)

        // if (e.target.className != style.subtitle) {
        //     setDropDown(!dropDown)
        //     style[subtitle].style.background="red"
        // }
        // if (e.target.className === style.subtitle) {
        //     setDropDown(dropDown)
        // }
    }
    // const navBarList = sideBarNavs1.map((nav, index) =>
    //     <li key={index}>
    //         <div>
    //             {nav.icon}
    //             <h6>{nav.title}</h6>
    //         </div>
    //         {/* {nav.subtitle ? 
    //     nav.dropDown
    //     } */}
    //     </li>
    // )
    // const subNavList = sideBarNavs1.subtitle.map((subNav, index) =>
    //     <li key={index}>{subNav.title}</li>
    // )

    return (
        <div className={combinedClasses(style.sidebar, props.className)}>
            <div className={style.navContainer}>
                {sideBarNav.map((nav, index) =>
                    <div className='sideNav'>
                        <NavLink to={nav.url} className={combinedClasses(style.navBar, 'bluebglink')} onClick={navDropDown}>
                            <div className={nav.icon ? style.navBardiv : combinedClasses(style.navText, style.navBardiv)} >
                                {nav.icon}
                                <div className={style.navTitle}>
                                    <h6 className={style.navTitle}>{nav.title}</h6>

                                </div>
                            </div>
                            {nav.icon && <RightArrow />}
                            <div onClick={() => navDropDown(index)}>
                                {/* {index == dropDown ? <RightArrow/> : nav.dropDown} */}
                            </div>

                        </NavLink>
                        {
                            nav.subtitle && dropDown &&
                            <div className={combinedClasses(style.navBardiv, style.subtitle, 'navDiv')}>
                                {nav.subtitle.map((subData) =>
                                
                                    <NavLink to={subData.url} className={combinedClasses(style.subdata, 'bluebglink')}>{subData.title}</NavLink>
                                )}
                            </div>
                        }
                    </div>)}
            </div>
            <div className={style.refer}>
                <SidePic />
                <button>Refer and Earn</button>
            </div>
        </div>
    )
}