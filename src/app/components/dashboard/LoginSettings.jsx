import React from 'react';
import style from './style.module.css';
import { CustomInput } from '../input';
import { Dashboard } from '.';
import { combinedClasses } from '../../utilities/format';
import { settings } from './data';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ChatIcon } from "../../assets/icon/chatIcon.svg";
import { Switch, FormControl, FormLabel } from '@chakra-ui/react'
import { MyButton } from '../button';

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
                        {/* <ChangePassword/> */}
                    </div>
                </div>
            </section>
        </Dashboard>
    )
}

export const ChangePassword = () => {
    return (
        <div className={style.changePassword}>
            <p className={style.head}>Change Password</p>
            <p className={style.info}>You may update your password any time. We suggest you choose a strong password and update it regularly, e.g. every 6 months. All new passwords must contain at least 8 characters.We also suggest having at least one capital and one lower-case letter (Aa-Zz), one special symbol (#, &, % etc), and one number (0-9) in your password for the best strength.</p>
            <form action="" className={style.rowImput}>
                <CustomInput
                    // onChange={handleInput} 
                    name='new' type="password" placeholder="New Password" label={"New Password*"} required={true} />
                <CustomInput
                    // onChange={handleInput} 
                    name='confirm' type="password" placeholder="Confrim New Password" label={"Confrim New Password*"} required={true} />
                <CustomInput
                    // onChange={handleInput} 
                    name='password' type="password" placeholder="Proliferate Password" label={"Proliferate Password*"} required={true} />
                <div className={style.buttons}>
                    <MyButton type='primary'
                    // onClick={handleSave}
                    // disabled={isSubmitting}
                    >Save Changes
                    </MyButton>
                    <button className={style.cancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}