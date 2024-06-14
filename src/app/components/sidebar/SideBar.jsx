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



export const SideBarDiv = (props) => {
    const [dropDown, setDropDown] = React.useState(false)
    const [notification, setNotification] = React.useState(false)
    const [data, setData] = React.useState([])
    const [badge, setBadge] = React.useState()
    const [newIndex, setNewIndex]=React.useState()
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
    const navDropDown = (id) => {
        //    
        setNewIndex(id)
        
        setDropDown(!dropDown[newIndex])
        //    if(index===id){
        //     setDropDown(!dropDown)
        //    }
    }
    console.log(newIndex);

    return (
        <div className={combinedClasses(style.sidebar, props.className)}>
            <div className={style.navContainer}>
                {sideBarNav.map((nav, index) =>

                    <div className='sideNav' key={index} >
                        <NavLink to={nav.url} className={combinedClasses(style.navBar, 'bluebglink')} key={index}>

                            <div className={nav.icon ? style.navBardiv : combinedClasses(style.navText, style.navBardiv)} >
                                {nav.icon}
                                <div className={style.navTitle}>
                                    <h6 className={style.navTitle}>{nav.title}</h6>
                                    {/* <NavLink to={nav.subtitle.url} className={combinedClasses(style.subdata, 'bluebglink')} key={index}>{nav.subtitle.title}</NavLink> */}
                                </div>
                            </div>
                            {nav.icon && <RightArrow />}

                        </NavLink>
                        {/* {nav.subtitle.map((subData) =>
                            <NavLink  to={subData[index].url} className={combinedClasses(style.subdata, 'bluebglink')}>{subData[index].title}</NavLink>
                            
                        )} */}

                        {/* index==true && nav.subtitle &&  */}
                        {dropDown && nav.subtitle &&
                            <div className={combinedClasses(style.navBardiv, style.subtitle, 'navDiv')} key={index}>

                                {nav.subtitle.map((subData, index) =>
                                    <NavLink to={subData.url} className={combinedClasses(style.subdata, 'bluebglink')} key={index}>{subData.title}</NavLink>
                                )}
                            </div>
                        }
                    </div>)}
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