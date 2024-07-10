import React from 'react';
import style from './style.module.css';
import { CustomInput } from '../input';
import { Dashboard } from '.';
import { combinedClasses } from '../../utilities/format';
import { settings } from './data';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ImageIcon } from "../../assets/icon/imageIcon.svg";
import { ReactComponent as EditBadgeIcon } from "../../assets/icon/editbadge.svg";
import { Badge, ChakraProvider, useMediaQuery } from '@chakra-ui/react'
import { DashboardHeader } from '../layout';
import { sideBarNav } from '../sidebar/data';
import style2 from './style2.module.css'
import { MyButton } from '../button';
import { ReactComponent as ProfileDP } from "../../assets/images/profilePicture.svg";
// import { Badge } from '@mui/material';

export const SettingsDashboard = () => {
    const mobileSideBar = useMediaQuery('(max-width: 560px)')
    return (
        <>
            <ChakraProvider>
                {mobileSideBar.includes(true) ?
                    <section className={style.login}>
                        <DashboardHeader>Settings</DashboardHeader>
                        <MobileSettings />
                    </section> :
                    <Dashboard>
                        <section className={combinedClasses(style.main, 'settings')} >
                            {/* <div> */}
                            <h3>Settings</h3>
                            <div className={style.settingsDashboard}>
                                <ul>
                                    {settings.map((list, index) =>
                                        <li key={index}>
                                            <NavLink to={list.url}>{list.title} </NavLink>
                                        </li>
                                    )}
                                </ul>
                                <div className={style.imageUpload}>
                                    <ImageIcon />
                                    <p>Upload your photo</p>
                                </div>
                                <form action="">
                                    <div className={style.inputsDiv}>
                                        <CustomInput
                                            // onChange={handleInput} 
                                            name='username' type="text" placeholder="Please enter your first name" label={"Full name"} />
                                        <CustomInput
                                            // onChange={handleInput} 
                                            name='email' type="email" placeholder="Enter your email address" label={"Email Address"} />
                                        <CustomInput
                                            // onChange={handleInput} 
                                            name='lastName' type="text" placeholder="Please enter your last name " label={"Last Name"} />
                                        <CustomInput
                                            // onChange={handleInput} 
                                            name='number' type="number" placeholder="+1 Please enter your phone number" label={"Phone number"} />

                                    </div>
                                    <CustomInput
                                        // onChange={handleInput} 
                                        name='username' type="textarea" placeholder="Write your Bio here e.g your hobbies, interests etc." label={"Bio"} className={style.textarea2} />
                                </form>
                            </div>
                        </section>
                    </Dashboard>}
            </ChakraProvider>
        </>
    )
}


export const MobileSettings = () => {
    const [form, setForm] = React.useState(false)
    const [uploaded, setUploaded] = React.useState()
    const handleUpdate = () => {
        setForm(!form)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    }


    return (
        <section className={combinedClasses(style.main, style.mobileSettings)}>
            <div className={style.subPages}>
                <ul className={combinedClasses(style.subList, 'subList')}>
                    {settings.map(list =>
                        <NavLink className={style.active} to={list.url}>{list.title}</NavLink>
                    )}
                </ul>
            </div>
            <section className={combinedClasses(style.main, 'settings')} >

                <div className={style.settingsDashboard}>
                    {uploaded ?
                        <div className={style.imageUpload}>
                            <ImageIcon />
                            <p>Upload your photo</p>
                        </div> :
                        <div className={combinedClasses('imageUpload')}>
                            <div className={style.profileDPdiv}>
                                {/* <img src={} alt="My Picture" /> */}
                                <ProfileDP />
                            </div>
                            <Badge variant='solid' colorScheme='green'>
                                <EditBadgeIcon />
                            </Badge>
                            {/* <Badge color="success"
                                key={props.day.toString()}
                                overlap="circular"
                                badgeContent={<EditBadgeIcon />}
                            >
                                <img src="" alt="My Picture" />
                            </Badge> */}

                        </div>
                    }


                    {form ? <form action="">
                        <div className={style.inputsDiv}>
                            <CustomInput
                                // onChange={handleInput} 
                                name='username' type="text" placeholder="Please enter your first name" label={"Full name"} />
                            <CustomInput
                                // onChange={handleInput} 
                                name='email' type="email" placeholder="Enter your email address" label={"Email Address"} />
                            <CustomInput
                                // onChange={handleInput} 
                                name='lastName' type="text" placeholder="Please enter your last name " label={"Last Name"} />
                            <CustomInput
                                // onChange={handleInput} 
                                name='number' type="number" placeholder="+1 Please enter your phone number" label={"Phone number"} />

                        </div>
                        <CustomInput
                            // onChange={handleInput} 
                            name='username' type="textarea" placeholder="Write your Bio here e.g your hobbies, interests etc." label={"Bio"} className={style.textarea2} />

                        <div className={combinedClasses(style.buttons, style2.buttons)}>

                            <MyButton type='primary'
                                onClick={handleSubmit}
                            // disabled={isSubmitting}
                            > Update
                            </MyButton>
                        </div>
                    </form>
                        :
                        <div>
                            <div className={style.profileInfo}>
                                <h5>Basic Info</h5>
                                <ul>
                                    <li>
                                        <p>First Name</p>
                                        <p>Ademajo</p>
                                    </li>
                                    <li>
                                        <p>Last Name</p>
                                        <p>John</p>
                                    </li>
                                    <li>
                                        <p>Phone Number</p>
                                        <p>+234-8123-2465-9971</p>
                                    </li>
                                    <li>
                                        <p>Email Address</p>
                                        <p>yelenapan123@gmail.com</p>
                                    </li>
                                    <li>
                                        <p>Bio</p>
                                        <p>Lorem Ipsum is simply dummy text...</p>
                                    </li>
                                </ul>
                            </div>
                            <div className={combinedClasses(style.buttons, style2.buttons)}>

                                <MyButton type='primary'
                                    onClick={handleUpdate}
                                // disabled={isSubmitting}
                                > Update
                                </MyButton>
                            </div>
                        </div>

                    }
                </div>
            </section>
        </section>
    )


}


export const ProfileView = () => {
    return (
        <>
            {/* <div className={style.imageUpload}>
                <ImageIcon />
                <p>Upload your photo</p>
            </div> */}
            <div>
                <h5>Basic Info</h5>
                <ul>
                    <li>
                        <p>First Name</p>
                        <p>Ademajo</p>
                    </li>
                    <li>
                        <p>Last Name</p>
                        <p>John</p>
                    </li>
                    <li>
                        <p>Phone Number</p>
                        <p>+234-8123-2465-9971</p>
                    </li>
                    <li>
                        <p>Email Address</p>
                        <p>yelenapan123@gmail.com</p>
                    </li>
                    <li>
                        <p>Bio</p>
                        <p>Lorem Ipsum is simply dummy text...</p>
                    </li>
                </ul>
            </div>
            <div className={combinedClasses(style.buttons, style2.buttons)}>
                <button className={style2.button1}>Reset</button>
                <MyButton type='primary'
                // onClick={handleSave}
                // disabled={isSubmitting}
                > Update
                </MyButton>
            </div>
        </>
    )
}