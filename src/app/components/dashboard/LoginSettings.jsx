import React from 'react';
import style from './style.module.css';
import { CustomInput } from '../input';
import { Dashboard } from '.';
import { combinedClasses } from '../../utilities/format';
import { settings } from './data';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ChatIcon } from "../../assets/icon/chatIcon.svg";
import { Switch, FormControl, FormLabel, ChakraProvider, useMediaQuery, useDisclosure, Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';
import { VerticallyCenter } from '../Popup';
import { MyButton } from '../button';
import { ReactComponent as EditBadgeIcon } from "../../assets/icon/editbadge.svg";
import { ReactComponent as LockIcon } from "../../assets/icon/lockIcon.svg";
import { DashboardHeader } from '../layout';
import style2 from './style2.module.css'


export const LoginSettings = () => {
    const mobileSideBar = useMediaQuery('(max-width: 560px)')
    const [passwordPage, setPasswordPage] = React.useState(false)

    const { isOpen: isPasswordOpen, onOpen: onPasswordOpen, onClose: onPasswordClose } = useDisclosure();
    return (
        <ChakraProvider>
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <DashboardHeader>Settings</DashboardHeader>
                    <MobileLoginSettings />
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
                            {passwordPage ?
                                <DoubleAuthentication /> :
                                <div className={style.loginSettings}>
                                    <div>
                                        <LockIcon />
                                    </div>
                                    <div>
                                        <p>Your privacy and security are top priority. We do all we can to keep your account secure, and we encourage you to do the same by following best practices: Update your password regularly, enable Two-Factor Authentication, and keep your Support PIN private.</p>
                                        <ul>
                                            <li>
                                                <h6>Password</h6>
                                                <p>Changed on Oct 31, 2022, 2:29 PM EDT<br></br>
                                                    * In order to remove captcha from login screen you need to change your password every 6 months.
                                                </p>
                                                <MyButton type='primary' className={style.ashbgbtn} onClick={onPasswordOpen}>EDIT</MyButton>
                                            </li>
                                            <li>
                                                <h6>Two-Factor Authentication</h6>
                                                <p>ON (SMS)</p>
                                                <MyButton type='primary' className={style.ashbgbtn} onClick={() => setPasswordPage(!passwordPage)}>MANAGE</MyButton>
                                            </li>
                                            <li>
                                                <h6>Support PIN</h6>
                                                <p>Valid till Jan 5, 2024, 9:40 AM EST</p>
                                                <MyButton type='primary' className={style.ashbgbtn}>REFRESH</MyButton>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <ChangePassword/> */}
                                </div>}
                        </div>
                        <ChakraProvider><VerticallyCenter>
                            <Modal onClose={onPasswordClose} isOpen={isPasswordOpen} isCentered>
                                <ModalOverlay />
                                <ModalContent >
                                    {/* <ModalHeader>Class Details</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <ul>
                                                <li>Class Title: {classData.title}</li>
                                                <li>Subject: {classData.subject}</li>
                                                <li>Tutor: {classData.tutor}</li>
                                                <li>Date/Time: {classData.schedule}</li>
                                            </ul>
                                        </ModalBody>
                                        <ModalFooter>
                                            <MyButton type='outline'
                                                onClick={onPasswordClose}>Cancel</MyButton>
                                            <MyButton type='primary'>
                                                <Link to={routes.class()}>Join Class</Link></MyButton>
                                        </ModalFooter> */}
                                    <div className={style.changePassword}>
                                        <p className={style.head}>Change Password</p>
                                        <p className={style.info}>You may update your password any time. We suggest you choose a strong password and update it regularly, e.g. every 6 months. All new passwords must contain at least 8 characters.We also suggest having at least one capital and one lower-case letter (Aa-Zz), one special symbol (#, &, % etc), and one number (0-9) in your password for the best strength.</p>
                                        <form action="" className={style.rowImput}>
                                            <CustomInput
                                                // onChange={handleInput} 
                                                name='new' type="password" placeholder="New Password" label={"New Password*"} required={true} />
                                            <CustomInput
                                                // onChange={handleInput} 
                                                name='confirm' type="password" placeholder="Confirm New Password" label={"Confirm New Password*"} required={true} />
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
                                </ModalContent>
                            </Modal>
                        </VerticallyCenter>
                        </ChakraProvider>
                    </section>
                </Dashboard>}
        </ChakraProvider>
    )
}

// export const ChangePassword = () => {
//     const [password, setPassword] = React.useState(true)
//     const handleCancel = (e) => {
//         e.preventDefault()
//         setPassword(false)
//     }
//     const handleSave = (e) => {
//         e.preventDefault()
//         setPassword(false)

//     }
//     return (
//         <>
//             {password ?
//  :
//                 <MainSettings />}
//         </>
//     )
// }

export const DoubleAuthentication = () => {
    return (
        <>
            <div className={style.doubleAuth}>
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
            <div className={style.doubleAuth2}>
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
        </>
    )
}

export const MobileLoginSettings = () => {
    const [passwordPage, setPasswordPage] = React.useState(false)
    const [mobilePassword, setMobilePassword] = React.useState(false)
    // const [mainLogin, setMainLogin] = React.useState(true)
    // const handleUpdate = () => {
    //     setForm(!form)
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }


    return (
        <section className={combinedClasses(style.main, style.mobileSettings)}>
            <div className={style.subPages}>
                <ul className={combinedClasses(style.subList, 'subList')}>
                    {settings.map(list =>
                        <NavLink className={style.active} to={list.url}>{list.title}</NavLink>
                    )}
                </ul>
            </div>
            <MainSettings />
        </section>
    )
}
export const MainSettings = () => {
    const [passwordPage, setPasswordPage] = React.useState(false)
    const [mobilePassword, setMobilePassword] = React.useState(false)
    return (
        <section className={combinedClasses(style.main, style.mobileSettings)}>
            <div className={style.settingsDashboard}>
                {passwordPage ?
                    <div>
                        <div className={style.doubleAuth}>
                            <div className={style.twoFactor}>
                                <h5>Two-Factor Authentication</h5>
                                <FormControl display='flex' alignItems='center' className={style.switch}>
                                    <FormLabel htmlFor='email-alerts' mb='0'>
                                        Enable email alerts?
                                    </FormLabel>
                                    <Switch id='email-alerts' />
                                </FormControl>
                            </div>
                            <p>Two-factor authentication, also known as 2FA or multi-factor, adds an extra layer of security to your account beyond your username and password. When you login with 2FA enabled, you will be prompted to use a security key, enter a verification code or approve the login from your mobile device, depending on which method you choose below.</p>
                        </div>
                        <div className={style.doubleAuth2}>
                            <div className={style.row2heading}>
                                <h6>Text Message Authentication</h6>
                                <CustomInput
                                    // onChange={handleInput} 
                                    name='confirm' type="password" label={"Confirm New Password"} />
                                <div className={style.message}>
                                    <h6>Text Message</h6>
                                    <p>xxxxxx</p>
                                </div>
                            </div>
                            <MyButton type='primary'
                                        onClick={() => setPasswordPage(false)}
                                    // disabled={isSubmitting}
                                    >ADD CONTACT NUMBER
                                    </MyButton>
                            {/* <button>ADD CONTACT NUMBER</button> */}
                        </div>
                    </div>
                    :
                    mobilePassword ?
                        <div className={style.mobilePassword}>

                            <form action="" className={style.rowImput}>
                                <CustomInput
                                    // onChange={handleInput} 
                                    name='new' type="password" placeholder="New Password" label={"New Password"} />
                                <CustomInput
                                    // onChange={handleInput} 
                                    name='confirm' type="password" placeholder="Confirm New Password" label={"Confirm New Password"} />
                                <CustomInput
                                    // onChange={handleInput} 
                                    name='password' type="password" placeholder="Proliferate Password" label={"Proliferate Password"} />
                                <p className={style.info}>You may update your password any time. We suggest you choose a strong password and update it regularly, e.g. every 6 months. All new passwords must contain at least 8 characters.We also suggest having at least one capital and one lower-case letter (Aa-Zz), one special symbol (#, &, % etc), and one number (0-9) in your password for the best strength.</p>

                                <div className={style.buttons}>
                                    <MyButton type='outline' onClick={() => setMobilePassword(false)}>Cancel
                                        {/* onClick={()=>props===true} */}
                                    </MyButton>
                                    <MyButton type='primary'
                                        onClick={() => setMobilePassword(false)}
                                    // disabled={isSubmitting}
                                    >Save Changes
                                    </MyButton>
                                    {/* <button className={style.cancel}>Cancel</button> */}
                                </div>
                            </form>
                        </div> :
                        <div className={style.loginSettings}>
                            <div>
                                <div><LockIcon /></div>
                                <p>Your privacy and security are top priority. We do all we can to keep your account secure, and we encourage you to do the same by following best practices: Update your password regularly, enable Two-Factor Authentication, and keep your Support PIN private.</p>
                            </div>
                            <ul>
                                <li>
                                    <div>
                                        <h6>Password</h6>
                                        <MyButton type='primary' className={style.ashbgbtn} onClick={() => setMobilePassword(!mobilePassword)}><EditBadgeIcon /> EDIT</MyButton>

                                    </div>
                                    <p>Changed on Oct 31, 2022, 2:29 PM EDT<br></br>
                                        * In order to remove captcha from login screen you need to change your password every 6 months.
                                    </p>
                                </li>

                                <li>
                                    <div>
                                        <h6>Two-Factor Authentication</h6>
                                        <MyButton type='primary' className={style.ashbgbtn} onClick={() => setPasswordPage(!passwordPage)}>MANAGE</MyButton>
                                    </div>
                                    <p>ON (SMS)</p>
                                </li>
                                <li>
                                    <div>
                                        <h6>Support PIN</h6>
                                        <MyButton type='primary' className={style.ashbgbtn}>REFRESH</MyButton>
                                    </div>
                                    <p>Valid till Jan 5, 2024, 9:40 AM EST</p>
                                </li>
                            </ul>
                        </div>
                }
            </div>
        </section>
    )
}

