import React from 'react';
import { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as StudentPic } from '../../assets/images/student.svg';
import { ReactComponent as ErrorIcon } from '../../assets/icon/icon.svg';
import style from './style.module.css'
import { CustomInput } from '../input';
import { RiArrowDownSFill } from "react-icons/ri";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { routes } from '../../utilities/routes';
import { MobileOnboardingLayout } from '../layout';
import { useMediaQuery } from '@chakra-ui/react'

export const LoginComp = () => {
    const mobileSideBar = useMediaQuery('(max-width: 530px)')
    return (
        <>
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <MobileOnboardingLayout>LOGIN YOUR ACCOUNT</MobileOnboardingLayout>
                    <LoginForm/>
                </section> :
                <section className={style.login}>
                    <div className={style.loginDiv1}>
                        <Logo className={style.logo} />
                        <StudentPic className={style.studentPic} />
                    </div>
                    <div className={style.loginDiv2}>
                        <h3>LOGIN YOUR ACCOUNT</h3>
                        <LoginForm/>
                    </div>
                </section>}
        </>
    )
}

export const LoginForm = () => {
    
    // mobileSideBar.includes(true) ? console.log('hello') : console.log ('hi')
    const [search, setSearch] = useState("")
    // const [rememberMe, setRemeberMe] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(false)
    const [user, setUser] = React.useState([])
    // const [cookies, setCookies] = React.useState(new Cookies)
    const [input, setInput] = React.useState({
        username: '',
        password: '',
        checkbox: false
    })
    // const signIn= useSignIn()
    // const handleRememberCheckbox = (event) => {
    //     setRemeberMe(event.target.checked)
    // }
    const handleInput = (e) => {
        // e.persist()
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // window.location.href = routes.dashboard()
        const user = {
            username: input.username,
            password: input.password
        }
        // username: 'kminchelle',
        // password: '0lelplR',
        // axios.post('/login', user)
        //     .then(result => {
        //         setUser(result.data)
        //         console.log(user)
        //     })
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
            //note that payload is defined already, the object details can be used directly here
        })

            .then(response => {
                if (response.status !== 200) {
                    throw response.json()
                }
                return response.json()
            })


            .then((response) => {
                console.log('Success', response)
                localStorage.setItem('user', JSON.stringify(response))
                window.location.href = routes.dashboard()
            })
            .catch((error) => {
                console.log("Failed")
                // toast('Error login in')
                setError('Error login in')
            })
            .finally(() => {
                setIsSubmitting(false)
            })
            .then(console.log);
    }
    // signIn({
    //     token: result.data.token,
    //     expiresIn: 3600,
    //     tokenType: "Bearer",
    //     authState: {username: input.username}
    // })
    // toast('Account Successfully created')
    // setSuccess('Account Successfully created')
    //         })
    // useEffect(() => {
    //     const user = isUserLogin()
    //     if (user) {
    //         window.location.href = routes.dashboard()
    //     }
    // }, [])
    return (
        <form action="" className={style.form}>
            <div className={style.forError}>
                {error ?
                    <div className={style.errorDiv}>
                        <CustomInput onChange={handleInput} name='username' type="email" placeholder="Enter your email address" label={"Username:"} />
                        <ErrorIcon className={style.errorIcon} />
                    </div> :
                    <CustomInput onChange={handleInput} name='username' type="email" placeholder="Enter your email address" label={"Username:"} />
                }
                {error && <p className={style.error}>wrong username</p>}
            </div>
            <div className={style.forError}>
                {error ?
                    <div className={style.errorDiv}>
                        <CustomInput onChange={handleInput} name='password' type="password" placeholder="Enter your password" label={"Password:"} />
                        <ErrorIcon className={style.errorIcon} />
                    </div> :

                    <CustomInput onChange={handleInput} name='password' type="password" placeholder="Enter your password" label={"Password:"} className={style.passwordDiv} />}
                {error && <p className={style.error}>wrong password</p>}
            </div>
            <div>
                <div className={style.buttons}>
                    <button type='submit' className={style.loginButton} onClick={handleLogin} disabled={isSubmitting}>Login</button>
                    <Link to={routes.personalInfo()}><button className={style.registerButton}>Register &nbsp; <RiArrowDownSFill /></button></Link>
                </div>
                <p className={style.forgetp}>Forgot your password?</p>
            </div>
            <div className={style.otherAuth}>
                <p>Sign in with</p>
                <div>
                    <Link ><FaFacebook className={style.facebook} /></Link>
                    <Link ><FcGoogle className={style.google} /></Link>
                    <Link ><FaLinkedin className={style.linkedin} /></Link>
                </div>
            </div>
        </form>
    )
}