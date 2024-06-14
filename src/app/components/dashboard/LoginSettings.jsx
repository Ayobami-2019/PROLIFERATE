import React from 'react';
import style from './style.module.css';
import { CustomInput } from '../input';
import { Dashboard } from '.';
import { combinedClasses } from '../../utilities/format';
import { settings } from './data';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ChatIcon } from "../../assets/icon/chatIcon.svg";
import { Switch,FormControl,FormLabel } from '@chakra-ui/react'

export const LoginSettings = () => {

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
                    <div className={style.loginSettings}>
                        <div>
                            <h5>Two-Factor Authentication</h5>
                            <div className={style.twoFactor}>
                                <p>Two-factor authentication, also known as 2FA or multi-factor, adds an extra layer of security to your account beyond your username and password. When you login with 2FA enabled, you will be prompted to use a security key, enter a verification code or approve the login from your mobile device, depending on which method you choose below.</p>
                                <FormControl display='flex' alignItems='center' className={style.switch}>
                                    <FormLabel htmlFor='email-alerts' mb='0'>
                                        Enable email alerts?
                                    </FormLabel>
                                    <Switch id='email-alerts' />
                                    <p className={style.switchP}>ON</p>
                                </FormControl>
                               

                            </div>
                        </div>
                        <div className={style.row2}>
                            <div className={style.row2heading}>
                                <h6>Text Message Authentication</h6>
                                <button>ADD CONTACT NUMBER</button>
                            </div>
                            <div className={style.separate}>
                                <div>
                                    <ChatIcon />
                                    <div>
                                        <h6>Phone Number</h6>
                                        <p>+xxxxxxxxxxxx</p>
                                    </div>
                                </div>
                                <div className={style.message}>
                                    <h6>Text Message</h6>
                                    <p>xxxxxx</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Dashboard>
    )
}