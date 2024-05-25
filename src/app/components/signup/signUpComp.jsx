

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
import { registerNavs } from './data';
import { combinedClasses } from '../../utilities/format';


export const InfoForm = () => {
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
        <section className={style.signUp}>
            <SignUpHeader />
            <main className={style.main}>
                <h3 className={style.heading}>Student Registration | Personal Information</h3>
                {/* {props[0].title} */}
                <RegisterNav />
                <div className={style.formBox}>
                    <div className={style.formInfo}>
                        <p>Please provide your full name, email address, contact number, gender and age. Ensure that the information is accurate and up-to-date.</p>
                    </div>
                    <form action="" className={style.form}>
                        <CustomInput onChange={handleInput} name='firstName' type="text" placeholder="First Name" label={"First Name:"} important={true} required />
                        <CustomInput onChange={handleInput} name='lastName' type="text" placeholder="Last Name" label={"Last Name:"} important={true} required />
                        <CustomInput onChange={handleInput} name='phone' type="number" placeholder="Enter your contact number" label={"Contact Number:"} important={true} required />
                        <CustomInput onChange={handleInput} name='email' type="email" placeholder="Enter your email address" label={"Username:"} required />
                        <CustomInput onChange={handleInput} name='gender' type="select" placeholder="Gender" label={"Gender:"}>
                            <option value="Gender">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </CustomInput>
                        <CustomInput onChange={handleInput} name='age' type="number" placeholder="Enter your age" label={"Age:"} />
                    </form>
                </div>
            </main>
            <Link to={routes.academics()}><SignUpFooter /></Link>
        </section>
    )
}



export const AcademicsForm = () => {
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
        <section className={style.signUp}>
            <SignUpHeader />
            <main className={style.main}>
                <h3 className={style.heading}>Student Registration | Academics Details</h3>
                {/* {props[0].title} */}
                <RegisterNav />
                <div className={style.formBox}>
                    <div className={style.formInfo}>
                        <p>Please enter the name of your school, college, or university, along with your grade or year of study.
                            Select the subjects you need tutoring for and share your current GPA or grades.</p>
                    </div>
                    <form action="" className={style.form}>
                        <CustomInput onChange={handleInput} name='username' type="select" placeholder="" label={"Grade/Year:"} >
                            <option value="Enter your grade">Enter your grade</option>
                            <option value="Grade 1">Grade 1</option>
                            <option value="Grade 2">Grade 2</option>
                            <option value="Grade 3">Grade 3</option>
                            <option value="Grade 4">Grade 4</option>
                            <option value="Grade 5">Grade 5</option>
                            <option value="Grade 6">Grade 6</option>
                            <option value="Grade 7">Grade 7</option>
                            <option value="Grade 8">Grade 8</option>
                        </CustomInput>
                        <CustomInput onChange={handleInput} name='username' type="select" placeholder="Multiselect tags" label={"Subjects Needing Tutoring:"}>
                            <option value="Multiselect tags">Multiselect tags</option>
                            <option value="Male">Online </option>
                            <option value="Female">In person</option>
                            <option value="Female">Hybrid</option>
                        </CustomInput>
                        <CustomInput onChange={handleInput} name='username' type="select" placeholder="" label={"Attendance Type:"}>
                            <option value=""></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </CustomInput>
                        <CustomInput onChange={handleInput} name='username' type="text" placeholder="Enter your current location, country, state " label={"Current Location:"} />

                    </form>
                </div>
            </main>
            <Link to={routes.preferences()}><SignUpFooter>
                <Link to={routes.personalInfo()}><button className={style.noBgButton}>Return to Previous Location</button></Link>
            </SignUpFooter></Link>
        </section>
    )
}

export const PreferencesForm = () => {
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
        <section className={style.signUp}>
            <SignUpHeader />
            <main className={style.main}>
                <h3 className={style.heading}>Student Registration | Preferences</h3>
                {/* {props[0].title} */}
                <RegisterNav />
                <div className={style.formBox}>
                    <div className={style.formInfo}>
                        <p>Choose whether you prefer online or in-person tutoring and specify your availability for sessions.
                            You can also mention any additional preferences or requirements you have for the tutoring sessions.</p>
                    </div>
                    <form action="" className={style.form}>
                        <CustomInput onChange={handleInput} name='availabilty' type="select" placeholder="Weekdays, Weekends, Mornings, Afternoons, Evenings" label={"Availability:"}>
                            {/* <option value="Multiselect tags">Multiselect tags</option> */}
                            <option value="Weekdays">Weekdays</option>
                            <option value="Weekends">Weekends</option>
                            <option value="Mornings">Mornings</option>
                            <option value="Afternoons">Afternoons</option>
                            <option value="Evenings">Evenings</option>
                        </CustomInput>
                        <CustomInput onChange={handleInput} name='others' type="text" placeholder="Specify any additional preferences or requirements" label={"Additional Preferences/Requirements:"} />
                        <CustomInput onChange={handleInput} name='lang' type="select" placeholder="Enter your preferred language" label={"Communication Language:"}>
                            <option value="English">English</option>
                            <option value="Others">Others</option>
                        </CustomInput>
                    </form>
                </div>
            </main>
            <Link to={routes.goals()}><SignUpFooter>
                <Link to={routes.academics()}><button className={style.noBgButton}>Return to Previous Location</button></Link>
            </SignUpFooter></Link>
        </section>
    )
}

export const GoalsForm = () => {
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
        <section className={style.signUp}>
            <SignUpHeader />
            <main className={style.main}>
                <h3 className={style.heading}>Student Registration | Learning Goals</h3>
                {/* {props[0].title} */}
                <RegisterNav />
                <div className={style.formBox}>
                    <div className={style.formInfo}>
                        <p>Describe any challenges and short-term goals you want to achieve. Outline your long-term goals.
                            This information will help us tailor the tutoring experience to meet your needs.</p>
                    </div>
                    <form action="" className={combinedClasses(style.form, style.textareaForm)}>
                        <CustomInput onChange={handleInput} name='username' type="textarea" placeholder="Enter your short term goal" label={"Short-term Goals:"} className={style.textarea} />
                        <CustomInput onChange={handleInput} name='username' type="textarea" placeholder="Enter your long term goal" label={"Long-term Goals:"} className={style.textarea} />
                        {/* <textarea name="" id="">hello</textarea> */}

                    </form>
                </div>
            </main>
            <Link to={routes.terms()}><SignUpFooter>
                <Link to={routes.preferences()}><button className={style.noBgButton}>Return to Previous Location</button></Link>
            </SignUpFooter></Link>
        </section>
    )
}

export const Terms = () => {

    return (
        <section className={style.signUp}>
            <SignUpHeader />
            <main className={style.main}>
                <h3 className={style.heading}>Student Registration</h3>
                {/* {props[0].title} */}
                <RegisterNav />
                <div className={style.formBox}>
                    <div className={style.formInfo}>
                        <h3 className={style.termTitle}>Terms and Conditions</h3>
                        <div className={style.term}>
                            <p>Welcome to Proliferate Learning Management System (LMS). Before you proceed with using our platform, please carefully read and understand the following terms and conditions:</p>
                            <ol>
                                <li>Acceptance of Terms: By accessing or using the Proliferate LMS platform, you agree to be bound by these terms and conditions, our privacy policy, and all applicable laws and regulations. If you do not agree with any part of these terms, you may not access or use the platform.</li>
                                <li>User Registration: You must register an account with accurate and complete information to access certain features of the platform. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
                                <li> Use of Platform: Proliferate LMS provides a platform for educational purposes, including access to learning materials, tutoring services, and communication tools. You agree to use the platform only for lawful purposes and in accordance with these terms and conditions.</li>
                                <li>User Content: You retain ownership of any content you submit, upload, or post on the platform. By providing content, you grant Proliferate LMS a worldwide, non-exclusive, royalty-free license to use, modify, reproduce, and distribute your content for the purpose of operating and improving the platform.</li>
                                <li> Tutoring Services: Proliferate LMS connects students with tutors for educational purposes. We do not guarantee the availability, quality, or effectiveness of tutoring services, and we are not responsible for any interactions or disputes between users.</li>
                                <li>Payment and Billing: Certain features or services on the platform may require payment. By using these features or services, you agree to pay any applicable fees and charges. All payments are non-refundable unless otherwise stated. If a student is unable to attend a class, they may have the option to reschedule the class subject to the tutor's availability. However, if no early notification of class rescheduling is provided, the missed class will not be refunded. In the event of a missed class due to the tutor's unavailability or technical issues, the tutor will offer an alternative class schedule.</li>
                                <li>Platform Content and Intellectual Property: All content available on the platform, including courses, materials, and resources, are the intellectual property of Proliferate and its tutors. Any unauthorized use, reproduction, or distribution of the content is strictly prohibited. Online tutors retain the rights to their course content. Learners may not share, reproduce, or distribute course materials without the tutor's permission.</li>
                                <li>Code of Conduct: Users must conduct themselves respectfully and professionally while interacting on the platform. Any form of harassment, discrimination, or inappropriate behavior will not be tolerated and may result in account termination.</li>
                                <li> Privacy and Security: Your privacy and security are important to us. Please review our privacy policy to understand how we collect, use, and protect your personal information.</li>
                                <li>Modifications to Terms: Proliferate LMS reserves the right to update or modify these terms and conditions at any time without prior notice. Your continued use of the platform after any such changes constitutes your acceptance of the revised terms.</li>
                                <li>Termination of Account: Proliferate LMS reserves the right to suspend or terminate your account and access to the platform at any time for any reason, including but not limited to violation of these terms and conditions.</li>
                                <li>Contact Us: If you have any questions or concerns about these terms and conditions, please contact us at contact@proliferate.ai</li>

                            </ol>
                            <p>By clicking "I agree" or by accessing and using the Proliferate LMS platform, you acknowledge that you have read, understood, and agreed to these terms and conditions.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Link to={routes.confirmEmail()}><SignUpFooter>
                <Link to={routes.goals()}><button className={style.noBgButton}>Return to Previous Location</button></Link>
            </SignUpFooter></Link>
        </section>


    )
}

export const ConfirmEmail = () => {

    return (
        <section className={style.signUp}>
            <SignUpHeader />
            <main className={style.main}>
                <h3 className={style.heading}>Check Your Email to Confirm Your Account</h3>
                <div className={style.formBox}>
                    <div className={style.formInfo}>
                        <h3 className={style.termTitle}>Instructions</h3>
                        <p>An email has been sent to your email address.</p>
                        <p>Please check your inbox and follow the instructions to confirm your account</p>
                    </div>
                </div>
            </main>
            <Link to={routes.emailConfirmed()}><SignUpFooter>
                <Link to={routes.terms()}><button className={style.noBgButton}>Return to Previous Location</button></Link>
            </SignUpFooter></Link>
        </section>


    )
}


export const EmailComfirmed = () => {
    return (
        <section className={style.signUp}>
            <SignUpHeader />
            <main className={style.main}>
                <h3 className={style.heading}>Student Registration</h3>
                <div className={style.formBox}>
                    <div className={style.formInfo}>
                        <h3 className={style.termTitle}>Congratulations!</h3>
                        <p>Your email has been successfully confirmed. You can now access your account.</p>
                    </div>
                </div>
            </main>
            <SignUpFooter className={style.FaFacebook}>
                <Link to={routes.confirmEmail()}><button className={style.noBgButton}>Return to Previous Location</button></Link>
            </SignUpFooter>
        </section>


    )
}


export const SignUpHeader = () => {
    return (

        <header className={style.header}><Logo /></header>
    )
}
export const RegisterNav = () => {
    return <ul>
        {registerNavs.map((nav, index) =>
            <li>
                <NavLink to={nav.url} className={style.list}>{nav.title}</NavLink>
                {/* {index && <hr className={style.line}/>} */}
                <hr />
            </li>

        )}
    </ul>
}
export const SignUpFooter = (props) => {
    return <footer className={props.children ? combinedClasses(style.footer, style.proppedFooter) : style.footer}>
        {props.children}
        {props.className ? <button>hello </button> :<button>Next &nbsp; <MdOutlineKeyboardArrowRight /></button>}
    </footer>
}