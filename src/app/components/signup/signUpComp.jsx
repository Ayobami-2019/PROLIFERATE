

import React from 'react';
import { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as StudentPic } from '../../assets/images/student.svg';
import style from './style.module.css'
import { CustomInput } from '../input';
import { RiAsterisk } from "react-icons/ri";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { routes } from '../../utilities/routes';
import { NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export const SignUpComp = () => {
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
    // const handleLogin = (e) => {
    //     e.preventDefault()
    //     setIsSubmitting(true)
    //     window.location.href = routes.dashboard()
    //     const user = {
    //         username: input.username,
    //         password: input.password
    //     }
    //     // username: 'kminchelle',
    //     // password: '0lelplR',
    //     // axios.post('/login', user)
    //     //     .then(result => {
    //     //         setUser(result.data)
    //     //         console.log(user)
    //     //     })
    //     fetch('https://dummyjson.com/auth/login', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(user)
    //         //note that payload is defined already, the object details can be used directly here
    //     })

    //         .then(response => {
    //             if (response.status !== 200) {
    //                 throw response.json()
    //             }
    //             return response.json()
    //         })


    //         .then((response) => {
    //             console.log('Success', response)
    //             localStorage.setItem('user', JSON.stringify(response))
    //             window.location.href = routes.dashboard()
    //         })
    //         .catch((error) => {
    //             console.log("Failed")
    //             // toast('Error login in')
    //             setError('Error login in')
    //         })
    //         .finally(() => {
    //             setIsSubmitting(false)
    //         })
    //         .then(console.log);
    // }
    // // signIn({
    // //     token: result.data.token,
    // //     expiresIn: 3600,
    // //     tokenType: "Bearer",
    // //     authState: {username: input.username}
    // // })
    // // toast('Account Successfully created')
    // // setSuccess('Account Successfully created')
    // //         })
    // useEffect(() => {
    //     const user = isUserLogin()
    //     if (user) {
    //         window.location.href = routes.dashboard()
    //     }
    // }, [])
    return (
        <section className={style.signUp}>
            <header className={style.header}><Logo /></header>
            <main className={style.main}><SignUp1 /></main>
            <footer className={style.footer}>
                <button>Next &nbsp; <MdOutlineKeyboardArrowRight/></button>
            </footer>
        </section>
    )
}

const SignUp1 = () => {
    const [input, setInput] = React.useState({
        username: '',
        password: '',
        checkbox: false
    })
    const handleInput = (e) => {
        // e.persist()
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h3 className={style.heading}>Student Registration | Personal Information</h3>
            <ul>
            <li>
                    <NavLink className={style.list}>Personal Information</NavLink>
                </li>
                <li>
                    <NavLink className={style.list}>Academic Details</NavLink>
                </li>
                <li>
                    <NavLink className={style.list}>Preferences</NavLink>
                </li>
                <li>
                    <NavLink className={style.list}>Learning Goals</NavLink>
                </li>
                <li>
                    <NavLink className={style.list}>Terms & Conditions</NavLink>
                </li>
                {/* <li>
                    <Link className={style.list}>Personal Information</Link>
                </li>
                <li>
                    <Link className={style.list}>Academic Details</Link>
                </li>
                <li>
                    <Link className={style.list}>Preferences</Link>
                </li>
                <li>
                    <Link className={style.list}>Learning Goals</Link>
                </li>
                <li>
                    <Link className={style.list}>Terms & Conditions</Link>
                </li> */}
            </ul>
            <div className={style.formBox}>
                <div className={style.formInfo}>
                    <p>Please provide your full name, email address, contact number, gender and age. Ensure that the information is accurate and up-to-date.</p>
                </div>
                <form action="" className={style.form}>
                    <CustomInput onChange={handleInput} name='username' type="email" placeholder="First Name" label={"First Name:"} important={true} />
                    <CustomInput onChange={handleInput} name='username' type="email" placeholder="Last Name" label={"Last Name:"} important={true} />
                    <CustomInput onChange={handleInput} name='username' type="email" placeholder="Enter your contact number" label={"Contact Number:"} important={true}/>
                    <CustomInput onChange={handleInput} name='username' type="email" placeholder="Enter your email address" label={"Username:"} important={true}/>
                    <CustomInput onChange={handleInput} name='username' type="email" placeholder="Gender" label={"Select"}/>
                    <CustomInput onChange={handleInput} name='username' type="email" placeholder="Age" label={"Enter your age"}/>
                </form>
            </div>
        </>
    )
}