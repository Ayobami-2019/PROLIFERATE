import React from 'react';
import style from './style.module.css';
import { CustomInput } from '../input';
import { Dashboard } from '.';
import { combinedClasses } from '../../utilities/format';
import { settings } from './data';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ImageIcon } from "../../assets/icon/imageIcon.svg";

export const SettingsDashboard = () => {

    return (
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
        </Dashboard>
    )
}