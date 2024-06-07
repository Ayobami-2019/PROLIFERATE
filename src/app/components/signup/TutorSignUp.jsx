

import React from 'react';
import { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as File } from '../../assets/icon/file.svg';
import style from './style.module.css'
import { CustomInput } from '../input';
import { RiAsterisk } from "react-icons/ri";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { routes } from '../../utilities/routes';
import { NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { registerNavs, tutorNavs, uploadList } from './data';
import { combinedClasses } from '../../utilities/format';
import { useMediaQuery } from '@chakra-ui/react';
import { MobileOnboardingLayout } from '../layout';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { UploadComponent } from '../upload';
import { useRef } from 'react';
import Button from '@material-ui/core/Button';
import { FaArrowUpFromBracket } from "react-icons/fa6";



export const Form1 = () => {
    return (
        <section className={style.section}>
            <InfoForm />
        </section>
    )
}

export const Form2 = () => {
    return (
        <section className={style.section}>
            <AcademicsForm />
        </section>
    )
}

export const Form6 = () => {
    return (
        <section className={style.section}>
            <TeachingStyleForm />
        </section>
    )
}
export const Form7 = () => {
    return (
        <section className={style.section}>
            <Upload />
        </section>
    )
}

export const Form3 = () => {
    return (
        <section className={style.section}>
            <PreferencesForm />
        </section>
    )
}

export const Form5 = () => {
    return (
        <section className={style.section}>
            <Terms />
        </section>
    )
}



export const InfoForm = () => {
    const mobileSideBar = useMediaQuery('(max-width: 530px)')
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
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <MobileOnboardingLayout>Tutor Registration</MobileOnboardingLayout>
                    <main className={style.main}>
                        <div className={style.formBox}>
                            <div className={style.formInfo}>
                                <p>Please provide your full name, email address, contact number, gender and age. Ensure that the information is accurate and up-to-date.</p>
                            </div>

                            <form action="" className={style.form}>
                                <CustomInput onChange={handleInput} name='firstName' type="text" placeholder="First Name" label={"First Name:"} important={true} required />
                                <CustomInput onChange={handleInput} name='contact' type="text" placeholder="contact" label={"Contact Number:"} important={true} />
                                <CustomInput onChange={handleInput} name='lastName' type="text" placeholder="Last Name" label={"Last Name:"} important={true} required />

                                <CustomInput onChange={handleInput} name='age' type="number" placeholder="Enter your age" label={"Age:"} />

                                <CustomInput onChange={handleInput} name='email' type="email" placeholder="Enter your email address" label={"Email:"} required />
                                <CustomInput onChange={handleInput} name='gender' type="select" placeholder="Gender" label={"Gender:"}>
                                    <option value="Gender">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </CustomInput>

                            </form>

                        </div>
                    </main>
                    <Link to={routes.tutorAcademics()}><SignUpFooter /></Link>
                </section> :
                <section className={style.signUp}>
                    <SignUpHeader />
                    <main className={style.main}>
                        <h3 className={style.heading}>Tutor Registration</h3>
                        {/* {props[0].title} */}
                        <RegisterNav />
                        <div className={style.formBox}>
                            <div className={style.formInfo}>
                                <p>Please provide your full name, email address, contact number, gender and age. Ensure that the information is accurate and up-to-date.</p>
                            </div>
                            <form action="" className={style.form}>
                                <CustomInput onChange={handleInput} name='firstName' type="text" placeholder="First Name" label={"First Name:"} important={true} required />
                                <CustomInput onChange={handleInput} name='contact' type="text" placeholder="contact" label={"Contact Number:"} important={true} required />
                                <CustomInput onChange={handleInput} name='lastName' type="text" placeholder="Last Name" label={"Last Name:"} important={true} required />

                                <CustomInput onChange={handleInput} name='age' type="number" placeholder="Enter your age" label={"Age:"} />

                                <CustomInput onChange={handleInput} name='email' type="email" placeholder="Enter your email address" label={"Email Address:"} required />
                                <CustomInput onChange={handleInput} name='gender' type="select" placeholder="Gender" label={"Gender:"}>
                                    <option value="Gender">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </CustomInput>
                            </form>
                        </div>
                    </main>
                    <Link to={routes.tutorAcademics()}><SignUpFooter /></Link>
                </section>}
        </>
    )
}



export const AcademicsForm = () => {
    const mobileSideBar = useMediaQuery('(max-width: 530px)')
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
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <MobileOnboardingLayout>Tutor Registration</MobileOnboardingLayout>
                    <main className={style.main}>
                        <div className={style.formBox}>
                            <div className={style.formInfo}>
                                <p>Please enter the name of your school, college, or university.
                                    Select the subjects you will be tutoring for and enter the grade(s) you currently teach.   </p>
                            </div>
                            <form action="" className={style.form}>
                                <CustomInput onChange={handleInput} name='username' type="select" placeholder="" label={"Highest Education Level Attained:"} >
                                    <option value="Select Educational Level">Select Educational Level</option>
                                    <option value="High School Diploma">High School Diploma</option>
                                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                                    <option value="Master's Degree">Master's Degree</option>
                                    <option value="Ph.D.">Ph.D.</option>
                                </CustomInput>
                                <CustomInput onChange={handleInput} name='username' type="select" placeholder="Multiselect tags" label={"Years of Teaching Experience:"}>
                                    <option value="Multiselect tags">Multiselect tags</option>
                                    <option value="Male">Online </option>
                                    <option value="Female">In person</option>
                                    <option value="Female">Hybrid</option>
                                </CustomInput>
                                <CustomInput onChange={handleInput} name='username' type="text" placeholder="How many years of experience " label={"Major/Field of Study:"} />
                                <CustomInput onChange={handleInput} name='username' type="text" placeholder="Enter your current grade " label={"Subjects Expertise:"} />
                                <CustomInput onChange={handleInput} name='username' type="text" placeholder="Name of School you currently teach in " label={"Current School:"} />
                                <CustomInput onChange={handleInput} name='username' type="text" placeholder="Select your current location " label={"Location:"} />

                            </form>
                        </div>
                    </main>
                    <Link to={routes.tutorAcademics()}><SignUpFooter>
                        <Link to={routes.tutorPersonalInfo()}><button className={style.noBgButton}>Back</button></Link>
                    </SignUpFooter></Link>
                </section> :
                <section className={style.signUp}>
                    <SignUpHeader />
                    <main className={style.main}>
                        <h3 className={style.heading}>Tutor Registration</h3>
                        {/* {props[0].title} */}
                        <RegisterNav />
                        <div className={style.formBox}>
                            <div className={style.formInfo}>
                                <p>Please enter the name of your school, college, or university, along with your grade or year of study.
                                    Select the subjects you need tutoring for and share your current GPA or grades.</p>
                            </div>
                            <form action="" className={style.form}>
                                <CustomInput onChange={handleInput} name='username' type="select" placeholder="" label={"Highest Education Level Attained:"} >
                                    <option value="High School Diploma/Bachelor's Degree/Master's Degree/Ph.D.">High School Diploma/Bachelor's Degree/Master's Degree/Ph.D.</option>
                                    <option value="High School Diploma">High School Diploma</option>
                                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                                    <option value="Master's Degree">Master's Degree</option>
                                    <option value="Ph.D.">Ph.D.</option>
                                </CustomInput>
                                <CustomInput onChange={handleInput} name='username' type="select" placeholder="Multiselect tags" label={"Years of Teaching Experience:"}>
                                    <option value="Multiselect tags">Multiselect tags</option>
                                    <option value="Male">Online </option>
                                    <option value="Female">In person</option>
                                    <option value="Female">Hybrid</option>
                                </CustomInput>
                                <CustomInput onChange={handleInput} name='username' type="text" placeholder="How many years of experience " label={"Major/Field of Study:"} />
                                <CustomInput onChange={handleInput} name='username' type="text" placeholder="Enter your current grade " label={"Subjects Expertise:"} />
                                <CustomInput onChange={handleInput} name='username' type="text" placeholder="Name of School you currently teach in " label={"Current School:"} />
                                <CustomInput onChange={handleInput} name='username' type="text" placeholder="Select your current location " label={"Location:"} />

                            </form>
                        </div>
                    </main>
                    <Link to={routes.style()}><SignUpFooter>
                        <Link to={routes.tutorPersonalInfo()}><button className={style.noBgButton}>Return to Previous Location</button></Link>
                    </SignUpFooter></Link>
                </section>}
        </>
    )
}

export const TeachingStyleForm = () => {
    const mobileSideBar = useMediaQuery('(max-width: 530px)')
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
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <MobileOnboardingLayout>Tutor Registration</MobileOnboardingLayout>
                    <main className={style.main}>
                        <div className={style.formBox}>
                            <div className={style.formInfo}>
                                <p>Choose whether you prefer online or in-person tutoring and specify your availability for sessions.
                                    You can also mention any additional preferences or requirements you have for the tutoring sessions.   </p>
                            </div>
                            <form action="" className={style.form}>
                                <CustomInput onChange={handleInput} name='username' type="select" placeholder="" label={"Teaching Style:"} >
                                    <option value="Interactive/Lecture-based/Hands-on/Customized">Interactive/Lecture-based/Hands-on/Customized</option>
                                    <option value="Interactive">Interactive</option>
                                    <option value="Lecture-based">Lecture-based</option>
                                    <option value="Hands-on">Hands-on</option>
                                    <option value="Customized">Customized</option>
                                </CustomInput>
                                <CustomInput onChange={handleInput} name='username' type="textarea" placeholder="Describe your approach to tutoring and how you engage with students" label={"Approach to Tutoring:"} className={style.textarea2} />
                                <CustomInput onChange={handleInput} name='attendance' type="select" placeholder="Multiselect tags" label={"Attendance Type:"}>
                                    <option value="onsite, hybrid, online">onsite, hybrid, online</option>
                                    <option value="Male">Onsite </option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Online">Online</option>
                                </CustomInput>

                            </form>
                        </div>
                    </main>
                    <Link to={routes.tutorPreferences()}><SignUpFooter>
                        <Link to={routes.tutorAcademics()}><button className={style.noBgButton}>Back</button></Link>
                    </SignUpFooter></Link>
                </section> :
                <section className={style.signUp}>
                    <SignUpHeader />
                    <main className={style.main}>
                        <h3 className={style.heading}>Tutor Registration</h3>
                        {/* {props[0].title} */}
                        <RegisterNav />
                        <div className={style.formBox}>
                            <div className={style.formInfo}>
                                <p>Please enter the name of your school, college, or university, along with your grade or year of study.
                                    Select the subjects you need tutoring for and share your current GPA or grades.</p>
                            </div>
                            <form action="" className={style.form}>
                                <CustomInput onChange={handleInput} name='username' type="select" placeholder="" label={"Teaching Style:"} >
                                    <option value="Interactive/Lecture-based/Hands-on/Customized">Interactive/Lecture-based/Hands-on/Customized</option>
                                    <option value="Interactive">Interactive</option>
                                    <option value="Lecture-based">Lecture-based</option>
                                    <option value="Hands-on">Hands-on</option>
                                    <option value="Customized">Customized</option>
                                </CustomInput>
                                <CustomInput onChange={handleInput} name='username' type="textarea" placeholder="Describe your approach to tutoring and how you engage with students" label={"Approach to Tutoring:"} className={style.textarea} />
                                <CustomInput onChange={handleInput} name='attendance' type="select" placeholder="Multiselect tags" label={"Attendance Type:"}>
                                    <option value="onsite, hybrid, online">onsite, hybrid, online</option>
                                    <option value="Male">Onsite </option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="Online">Online</option>
                                </CustomInput>

                            </form>
                        </div>
                    </main>
                    <Link to={routes.tutorPreferences()}><SignUpFooter>
                        <Link to={routes.tutorAcademics()}><button className={style.noBgButton}>Return to Previous Location</button></Link>
                    </SignUpFooter></Link>
                </section>}
        </>
    )
}

export const PreferencesForm = () => {
    const mobileSideBar = useMediaQuery('(max-width: 530px)')
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
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <MobileOnboardingLayout>Tutor Registration</MobileOnboardingLayout>
                    <main className={style.main}>
                        <div className={combinedClasses(style.formBox, style.formBox2)}>
                            <div className={style.formInfo}>
                                <p>Describe any short-term goals or challenges you're facing and outline your long-term goals or career aspirations.
                                    This information will help us tailor the tutoring experience to meet your needs.</p>
                            </div>
                            <div className={style.formDate}>
                                <form action="" className={style.form}>
                                    <CustomInput onChange={handleInput} name='availabilty' type="select" placeholder="Weekdays, Weekends, Mornings, Afternoons, Evenings" label={"Preferred Subjects:"}>
                                        <option value="Select specific subjects within your expertise that you will be tutoring">Select specific subjects within your expertise that you will be tutoring</option>
                                        <option value="Weekdays">Weekdays</option>
                                        <option value="Weekends">Weekends</option>
                                        <option value="Mornings">Mornings</option>
                                        <option value="Afternoons">Afternoons</option>
                                        <option value="Evenings">Evenings</option>
                                    </CustomInput>

                                    <CustomInput onChange={handleInput} name='lang' type="select" placeholder="" label={"Student Assessment Approach:"}>
                                        <option value="quizzes, tests, projects, or other methods.">quizzes, tests, projects, or other methods.</option>
                                        <option value="quizzes">quizzes</option>
                                        <option value="tests">tests</option>
                                        <option value="projects">projectss</option>
                                        <option value="other methods">other methods</option>
                                    </CustomInput>
                                    <CustomInput onChange={handleInput} name='others' type="text" placeholder="Specify if you are available for additional support outside of scheduled tutoring sessions" label={"Availability for Additional Support:"} />
                                </form>
                                <div>
                                    hello
                                </div>
                            </div>
                        </div>
                    </main>
                    <Link to={routes.upload()}><SignUpFooter>
                        <Link to={routes.style()}><button className={style.noBgButton}>Back</button></Link>
                    </SignUpFooter></Link>
                </section> :
                <section className={style.signUp}>
                    <SignUpHeader />
                    <main className={style.main}>
                        <h3 className={style.heading}>Tutor Registration</h3>
                        {/* {props[0].title} */}
                        <RegisterNav />
                        <div className={combinedClasses(style.formBox, style.formBox2)}>
                            <div className={style.formInfo}>
                                <p>Choose whether you prefer online or in-person tutoring and specify your availability for sessions.
                                    You can also mention any additional preferences or requirements you have for the tutoring sessions.</p>
                            </div>
                            <div className={style.formDate}>
                                <form action="" className={style.form}>
                                    <CustomInput onChange={handleInput} name='availabilty' type="select" placeholder="Weekdays, Weekends, Mornings, Afternoons, Evenings" label={"Preferred Subjects:"}>
                                        <option value="Select specific subjects within your expertise that you will be tutoring">Select specific subjects within your expertise that you will be tutoring</option>
                                        <option value="Weekdays">Weekdays</option>
                                        <option value="Weekends">Weekends</option>
                                        <option value="Mornings">Mornings</option>
                                        <option value="Afternoons">Afternoons</option>
                                        <option value="Evenings">Evenings</option>
                                    </CustomInput>

                                    <CustomInput onChange={handleInput} name='lang' type="select" placeholder="" label={"Student Assessment Approach:"}>
                                        <option value="quizzes, tests, projects, or other methods.">quizzes, tests, projects, or other methods.</option>
                                        <option value="quizzes">quizzes</option>
                                        <option value="tests">tests</option>
                                        <option value="projects">projectss</option>
                                        <option value="other methods">other methods</option>
                                    </CustomInput>
                                    <CustomInput onChange={handleInput} name='others' type="text" placeholder="Specify if you are available for additional support outside of scheduled tutoring sessions" label={"Availability for Additional Support:"} />
                                </form>
                                <div>
                                    hello
                                </div>
                            </div>
                        </div>
                    </main>
                    <Link to={routes.upload()}><SignUpFooter>
                        <Link to={routes.style()}><button className={style.noBgButton}>Return to Previous Location</button></Link>
                    </SignUpFooter></Link>
                </section>}
        </>
    )
}

export const Upload = () => {
    const [files, setFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [error, setError] = useState();
    const inputRef = useRef();

    const [selectedFile, setSelectedFile] = React.useState([false])

    const mobileSideBar = useMediaQuery('(max-width: 530px)')

    function handleMultipleChange(event) {
        event.preventDefault()
        setFiles([...event.target.files]);
        setSelectedFile([files])
    }

    function handleMultipleSubmit(event) {
        event.preventDefault()
        inputRef.current.click([])
        files.forEach((file, index) => {
            
            document.getElementById('uploadedDocuments').append(`file${index}`, file);
                // document.append(formData)
            });
        // event.preventDefault();
    }


    // if (files) return (
    //     <div>
    //         <ul>
    //             {Array.from(files).map((file, index) =>
    //                 <li key={index}>{file.name}</li>
    //             )}
    //         </ul>
    //         <div>
    //             <button onClick={setSelectedFile(null)}>Cancel</button>
    //             <button onClick={handleUpload}>Upload</button>
    //         </div>
    //     </div>
    // )
    return (
        <>
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <MobileOnboardingLayout>Tutor Registration</MobileOnboardingLayout>
                    <main className={style.main}>
                        <div className={style.formBox}>
                            <div className={style.formInfo}>
                                <p>Describe any short-term goals or challenges you're facing and outline your long-term goals or career aspirations.
                                    This information will help us tailor the tutoring experience to meet your needs.</p>
                            </div>
                            <div>
                                <ul className={style.uploadList}>
                                    {uploadList.map((nav) =>
                                        <li>{nav.title}</li>
                                    )}

                                </ul>
                                <form action="" className={style.form}>
                                    <div className={style.formDocuments}>
                                        <div className={style.uploaded}>
                                            <File />
                                            <p>Educational Supporting Documents</p>
                                        </div>
                                        <div className={style.container}>
                                            <input type="file" accept=".pdf" id="contained-button-file" className={style.input} onChange={handleMultipleChange} ref={inputRef} multiple/>
                                            <label htmlFor="contained-button-file">
                                                <Button variant="contained" color="primary" component="span" type='submit' className={style.para} onClick={handleMultipleSubmit} multiple>
                                                    <FaArrowUpFromBracket /> Upload Document
                                                </Button>
                                                {/* {uploadedFileURL && <img src={uploadedFileURL} alt="Uploaded content" />} */}
                                            </label>
                                        </div>
                                    </div>

                                    <div id='uploadedDocuments'>
                                        {/* {selectedFile && */}
                                        {files &&
                                            <ul>
                                                {Array.from(files).map((file, index) =>
                                                    <li key={index}>{file.name}</li>
                                                )}
                                            </ul>
                                        }
                                    </div>
                                </form>
                                {/* {selectedFile && 
                                <div>{uploadedFile}
                                
                                </div>} */}


                            </div>
                        </div>
                    </main>
                    <Link to={routes.tutorTerms()}><SignUpFooter>
                        <Link to={routes.tutorPreferences()}><button className={style.noBgButton}>Back</button></Link>
                    </SignUpFooter></Link>
                </section> :
                <section className={style.signUp}>
                    <SignUpHeader />
                    <main className={style.main}>
                        <h3 className={style.heading}>Tutor Registration</h3>
                        {/* {props[0].title} */}
                        <RegisterNav />
                        <div className={style.formBox}>
                            <div className={style.formInfo}>
                                <p>Choose whether you prefer online or in-person tutoring and specify your availability for sessions.
                                    You can also mention any additional preferences or requirements you have for the tutoring sessions.</p>
                            </div>
                            <div className={style.document}>
                                <h6>List of Documents to upload</h6>
                                <ul className={style.uploadList}>
                                    {uploadList.map((nav) =>
                                        <li>{nav.title}</li>
                                    )}

                                </ul>
                                <form action="" className={style.form}>
                                    <div className={style.formDocuments}>
                                        <div className={style.uploaded}>
                                            <File />
                                            <p>Educational Supporting Documents</p>
                                        </div>
                                        <div className={style.container}>
                                            <input type="file" accept=".pdf" id="contained-button-file" className={style.input} onChange={handleMultipleChange} ref={inputRef}  multiple/>
                                            <label htmlFor="contained-button-file">
                                                <Button variant="contained" color="primary" component="span" type='submit' className={style.para} onClick={handleMultipleSubmit}>
                                                    <FaArrowUpFromBracket /> Upload Document
                                                </Button>
                                                {/* {uploadedFileURL && <img src={uploadedFileURL} alt="Uploaded content" />} */}
                                            </label>
                                        </div>
                                    </div>

                                    <div id='uploadedDocuments'>
                                        {files &&
                                            <ul>
                                                {Array.from(files).map((file, index) =>
                                                    <li key={index}>{file.name}</li>
                                                )}
                                            </ul>
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </main>
                    <Link to={routes.tutorTerms()}><SignUpFooter>
                        <Link to={routes.tutorPreferences()}><button className={style.noBgButton}>Return to Previous Location</button></Link>
                    </SignUpFooter></Link>
                </section>}
        </>
    )
}


export const Terms = () => {
    const mobileSideBar = useMediaQuery('(max-width: 530px)')
    return (
        <>
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <MobileOnboardingLayout>Tutor Registration</MobileOnboardingLayout>
                    <main className={style.main}>
                        <div className={style.formBox}>
                            <div className={combinedClasses(style.formInfo, style.termsInfo)}>
                                <p>Welcome to Proliferate Learning Management System (LMS). Before you proceed with using our platform, please carefully read and understand the following terms and conditions:</p>

                                {/* <h3 className={style.termTitle}>Terms and Conditions</h3> */}
                                <div className={style.term}>
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
                                <p>Welcome to Proliferate Learning Management System (LMS). Before you proceed with using our platform, please carefully read and understand the following terms and conditions:</p>

                            </div>
                        </div>
                    </main>
                    <Link to={routes.confirmEmail()}><SignUpFooter title='I agree'>
                        <Link to={routes.goals()}><button className={style.noBgButton}>Back</button></Link>
                    </SignUpFooter></Link>
                </section> :
                <section className={style.signUp}>
                    <SignUpHeader />
                    <main className={style.main}>
                        <h3 className={style.heading}>Tutor Registration</h3>
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
                    <Link to={routes.confirmEmail()}><SignUpFooter title='I agree' >
                        <Link to={routes.goals()}><button className={style.noBgButton}>Resend Confirmation Email</button></Link>
                    </SignUpFooter></Link>
                </section>}
        </>


    )
}

export const ConfirmEmail = () => {
    const mobileSideBar = useMediaQuery('(max-width: 530px)')
    return (
        <>
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <MobileOnboardingLayout>EMAIL VERIFICATION</MobileOnboardingLayout>
                    <main className={style.main}>
                        {mobileSideBar.includes(false) ? <h3 className={style.heading}>Check Your Email to Confirm Your Account</h3> : ''}
                        <div className={mobileSideBar.includes(true) ? combinedClasses(style.mobileformbox, style.formBox) : style.formBox}>
                            <div className={style.formInfo}>
                                <h3 className={style.termTitle}>Instructions</h3>
                                <p>An email has been sent to your email address.</p>
                                <p>Please check your inbox and follow the instructions to confirm your account</p>
                            </div>
                        </div>
                    </main>
                    <Link to={routes.emailConfirmed()}><SignUpFooter>
                        <Link to={routes.terms()}><button className={style.noBgButton}>Back</button></Link>
                    </SignUpFooter></Link>
                </section> :
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
                </section>}
        </>


    )
}


export const EmailComfirmed = () => {

    const mobileSideBar = useMediaQuery('(max-width: 530px)')
    return (
        <>
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <MobileOnboardingLayout>STUDENT REGISTRATION</MobileOnboardingLayout>
                    <main className={style.main}>
                        {mobileSideBar.includes(false) ? <h3 className={style.heading}>Student Registration</h3> : ''}
                        <div className={mobileSideBar.includes(true) ? combinedClasses(style.mobileformbox, style.formBox) : style.formBox}>
                            <div className={style.formInfo}>
                                <h3 className={style.termTitle}>Congratulations!</h3>
                                <p>Your email has been successfully confirmed. You can now access your account.</p>
                            </div>
                        </div>
                    </main>
                    <SignUpFooter className={style.FaFacebook}>
                        <Link to={routes.confirmEmail()}><button className={style.noBgButton}>Back</button></Link>
                    </SignUpFooter>
                </section> :
                <section className={style.signUp}>
                    <SignUpHeader />
                    <main className={style.main}>
                        <h3 className={style.heading}>Student Registration</h3>
                        <div className={style.formBox}>
                            <div className={style.formInfo}>
                                <h3 className={style.termTitle}>Congratulations!</h3>
                                <p>Your email has been successfully confirmed. You can</p>
                                <p>now access your account.</p>
                            </div>
                        </div>
                    </main>
                    <SignUpFooter title='Continue to Login' className={style.FaFacebook}>
                        <Link to={routes.confirmEmail()}><button className={style.noBgButton}>Resend Confirmation Email</button></Link>
                    </SignUpFooter>
                </section>}
        </>

    )
}


export const SignUpHeader = () => {
    return (

        <header className={style.header}><Logo /></header>
    )
}
export const RegisterNav = () => {
    return <ul>
        {tutorNavs.map((nav, index) =>
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
        {props.title ? <button>{props.title} </button> : <button>Next &nbsp; <MdOutlineKeyboardArrowRight /></button>}
    </footer>
}