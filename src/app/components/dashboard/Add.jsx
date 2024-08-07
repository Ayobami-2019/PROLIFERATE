import style from './style.module.css';
import { Dashboard } from '.';
import { MyButton } from '../button';
import { CustomInput } from '../input';
import { classes, courses, tutors } from './data';

import React from 'react';
import MyRating from '../rating';
import { Link } from 'react-router-dom';
import { routes } from '../../utilities/routes';
import { combinedClasses } from '../../utilities/format';
import { createContext, useContext, useState, useMemo } from 'react';
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react'
import { DashboardHeader } from '../layout';
import { VerticallyCenter } from '../Popup'
import { useDisclosure } from "@chakra-ui/react"
import {
    Button, Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalCloseButton, ModalBody, ModalFooter
} from "@chakra-ui/react";
import { MobilePayment } from './Payment';
// const [input] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   const even = useMemo(() => input.filter(isEven), [input]);
//   const odd = useMemo(() => input.filter(isOdd), [input]);
//   const prime = useMemo(() => input.filter(isPrime), [input]);

export const TutorContext = createContext(null)
// const PaymentContext=createContext(null)

// export const AddNewDashboard = () => {
//     const mobileSideBar = useMediaQuery('(max-width: 560px)')

//     return (

//         <>
//             {mobileSideBar.includes(true) ?
//                 <section className={style.login}>
//                     <DashboardHeader>Add Subject/Tutor</DashboardHeader>
//                     <MobileAdd />
//                 </section> :
//                 <MainAdd />
//             }
//         </>

//     )
// }
export const AddNewDashboard = () => {
    const mobileSideBar = useMediaQuery('(max-width: 560px)')

    const [index, setIndex] = React.useState()
    const [input, setInput] = React.useState('')
    const [info, setInfo] = React.useState()
    const [feedback, setFeedback] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const feedbackShow = (e) => {
        e.preventDefault()
        setFeedback(!feedback);
        setSubmitted(true)

    }
    const handleInput = (e) => {
        // e.persist()
        // setInput({ ...input, [e.target.name]: e.target.value })
        setInput(e.target.value)
    }
    const subjectTutors = tutors.filter(tutor => tutor.course === input);
    const handleMore = (tutor) => {
        // tutor.preventDefault()
        setIndex(tutor.name)
        setInfo(tutor)
        // Navigate(routes.medicineDetail())
    }
    const [paymentPage, setPaymentPage] = React.useState(false)
    const paymentButton = () => {
        setPaymentPage(!paymentPage)
    }
    const cancel = (e) => {
        // e.preventDefault()
        setFeedback(false);
        setSubmitted(false);
    }
    return (
        <>
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <DashboardHeader>{paymentPage ? 'Add Subject/Tutor' : 'Make Payment'}</DashboardHeader>
                    <MobileAdd />
                </section> :
                <Dashboard>
                    <TutorContext.Provider value={info}>
                        {paymentPage ?
                            <Payment />
                            :

                            <section className={style.main}>
                                <h3>Add Subject/Tutor:</h3>
                                <div className={style.addNewCourse}>
                                    {/* <p>Choose a new Subject/Tutor:</p> */}
                                    <form action="" className={style.rowImput}>
                                        <CustomInput type="select" label='Choose a new Subject/Tutor:' name='course'
                                            onChange={handleInput}
                                        >
                                            <option value="Autosuggestion">Autosuggestions</option>
                                            {courses.map((course) =>
                                                <option value={course}>{course}</option>
                                            )}
                                        </CustomInput>
                                        <MyButton type='primary'
                                        // onClick={handleSave}
                                        // disabled={isSubmitting}
                                        >Check Availability
                                        </MyButton>
                                    </form>
                                    {index ?
                                        <div className={style.moreTutorInfo}>
                                            <div className={style.tutorInfo}>
                                                <div>{info.icon}</div>
                                                <p className={style.name}>{info.name}</p>
                                                <p className={style.course}>{info.course} Tutor</p>
                                                <MyRating />
                                            </div>
                                            <div className={style.tutorInfoDiv}>
                                                <TutorDetails info={info} />
                                                <div>
                                                    <MyButton type='outline'
                                                    // onClick={handleSave}
                                                    // disabled={isSubmitting}
                                                    >
                                                        <Link to={routes.messageDashboard}>Chat</Link>
                                                    </MyButton>
                                                    <MyButton type='outline'
                                                    // onClick={handleSave}
                                                    // disabled={isSubmitting}
                                                    >Evaluation Call
                                                    </MyButton>
                                                    <MyButton type='primary' onClick={onOpen}
                                                    // onClick={feedbackShow}
                                                    // disabled={isSubmitting}
                                                    >Enrol in class
                                                    </MyButton>
                                                </div>
                                            </div>
                                            <ChakraProvider>
                                                <VerticallyCenter>
                                                    {/* <Button onClick={onOpen}>Send Invitation</Button> */}
                                                    <Modal onClose={onClose} isOpen={isOpen} isCentered>
                                                        <ModalOverlay />
                                                        <ModalContent >
                                                            <div className={combinedClasses(style.upcomingAlert)}>
                                                                <ModalHeader><h5>Confirm selection</h5></ModalHeader>
                                                                <ModalBody>
                                                                    <p>Take a Moment to review the <span>tutor</span> you selected</p>
                                                                    <div className={style.tutorDetails}>
                                                                        {info.icon}
                                                                        <div>
                                                                            <div>
                                                                                <p>Name:</p>
                                                                                <p>Subject:</p>
                                                                                <p>Availability:</p>
                                                                            </div>
                                                                            <div>
                                                                                <p> {info.name}</p>
                                                                                <p>{info.course} </p>
                                                                                <p>{info.availabilty}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </ModalBody>
                                                                <ModalFooter>
                                                                    <MyButton type='outline'
                                                                        // onClick={cancel} 
                                                                        onClick={onClose}>Change Tutor</MyButton>
                                                                    <MyButton type='primary' onClick={paymentButton}>Confirm
                                                                        {/* <Link to={routes.reschedule()}>Proceed</Link> */}
                                                                    </MyButton>

                                                                </ModalFooter>
                                                            </div>

                                                        </ModalContent>
                                                    </Modal>
                                                </VerticallyCenter>
                                            </ChakraProvider>
                                            {/* {feedback &&
                                        <div className={combinedClasses(style.referFeedback, style.upcomingAlert)}>
                                            <h5>Confirm selection</h5>
                                            <p>Take a Moment to review the <span>tutor</span> you selected</p>
                                            <div className={style.tutorDetails}>
                                                {info.icon}
                                                <div>
                                                    <p>Name: <span>{info.name}</span></p>
                                                    <p>Subject: <span>{info.course}</span></p>
                                                    <p>Availability: {info.availabilty}</p>
                                                </div>
                                            </div>
                                            <div className={style.buttons}>
                                                <button onClick={cancel} className={style.button1}>Change Tutor</button>
                                                <button className={style.button2}
                                                    onClick={paymentButton}
                                                >
                                                    Confirm</button>
                                            </div>
                                        </div>
                                    } */}


                                        </div>
                                        :
                                        <ul className={style.tutorRow}>
                                            {subjectTutors.map((tutor) =>
                                                <li >
                                                    <div>{tutor.icon}</div>
                                                    <div className={style.tutorInfo}>
                                                        <p className={style.name}>{tutor.name}</p>
                                                        <p className={style.course}>{tutor.course} Tutor</p>
                                                        <MyRating />
                                                        <button className={style.tutorProfile} onClick={() => handleMore(tutor)}>View Profile</button>
                                                    </div>

                                                </li>

                                            )}
                                        </ul>}
                                </div>
                                {/* </div> */}

                            </section>
                        }
                    </TutorContext.Provider>
                </Dashboard>
            }
        </>
    )
}

export const TutorDetails = (props) => {
    const info = useContext(TutorContext);
    const tutorInfo = props.info
    // console.log(tutorInfo)
    return (
        <ul className={style.listStyle}>
            <li>Subject Expertise:
                <span>{tutorInfo.course}</span>
            </li>
            <li>Qualifications:
                <span>{tutorInfo.qualification}</span>
            </li>
            <li>Teaching Style:
                <span>{tutorInfo.style}</span>
            </li>
            <li>Availability:
                <span>{tutorInfo.availabilty}</span>
            </li>
            <li>Rating:
                <span>{tutorInfo.rating}(based on student feedback)</span>
            </li>
            <li>Bio:
                <span>{tutorInfo.bio}</span>
            </li>
        </ul>

    )
}
// export const PaymentFeedback=()=>{
//     return()
// }

export const Payment = () => {
    const info = useContext(TutorContext);
    const mobileSideBar = useMediaQuery('(max-width: 560px)')
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <section className={style.main}>
            {mobileSideBar.includes(false) && <h3>Make Payment</h3>}
            <div className={style.paymentDiv}>
                <div className={style.tutorInfo}>
                    {info.icon}
                    <div>
                        <p className={style.name}>{info.name}</p>
                        <p className={style.course}>{info.course} Tutor</p>
                        <MyRating />
                    </div>
                </div>
                <form action="" className={style.rowImput}>
                    <CustomInput type="select" label='Select Month:' name='month'
                    // onChange={handleInput}
                    >
                        <option value="Month">Month</option>
                        <option value="Month">Jan</option>
                    </CustomInput>
                    <div className={style.radioInputs}>
                        <p>Payment Method</p>
                        {/* <div> */}
                        <input type="radio" id='credit' name='credit' value='credit' />
                        <label htmlFor="credit">Credit Card</label>
                        <input type="radio" id='debit' name='debit' value='debit' />
                        <label htmlFor="debit">Debit Card</label>
                        <input type="radio" id='paypal' name='paypal' value='paypal' />
                        <label htmlFor="paypal">Paypal</label>
                        <input type="radio" id='transfer' name='transfer' value='transfer' />
                        <label htmlFor="credit">Bank Transfer</label>
                        {/* </div> */}
                    </div>
                    <CustomInput
                        // onChange={handleInput} 
                        name='name' type="text" label={"Name on Card:"} />
                    <CustomInput
                        // onChange={handleInput} 
                        name='number' type="number" label={"Card Number"} />
                    <CustomInput
                        // onChange={handleInput} 
                        name='name' type="number" label={"Expiration"} />
                    <CustomInput
                        // onChange={handleInput} 
                        name='name' type="number" label={"CVV/CVC"} />


                </form>
                <MyButton type='primary'
                    onClick={onOpen}
                // disabled={isSubmitting}
                >Confirm Payment
                </MyButton>
            </div>
            <ChakraProvider>
                <VerticallyCenter>
                    {/* <Button onClick={onOpen}>Send Invitation</Button> */}
                    <Modal onClose={onClose} isOpen={isOpen} isCentered>
                        <ModalOverlay />
                        <ModalContent >
                            <div className={combinedClasses(style.upcomingAlert, style.paymentFeedback)}>
                                <ModalHeader><h5>Invitation Link Sent</h5></ModalHeader>
                                <ModalBody>
                                    <p>Congratulations! You've successfully selected Henry Arsene as your tutor for Mathematics .</p>
                                    <p>Your tutor will be notified of your selection, and they'll reach out to you shortly to discuss your learning goals and schedule your first session.
                                        Happy learning!</p>
                                </ModalBody>
                                <ModalFooter>
                                    <MyButton type='primary' onClick={onClose}>OK</MyButton>

                                </ModalFooter>
                            </div>

                        </ModalContent>
                    </Modal>
                </VerticallyCenter>
            </ChakraProvider>
        </section>
    )
}

export const PayMethods = () => {
    const [feedback, setFeedback] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)
    const feedbackShow = (e) => {
        e.preventDefault()
        setFeedback(!feedback);
        setSubmitted(true)

    }
    const handleInput = (e) => {
        // e.persist()
        // setInput({ ...input, [e.target.name]: e.target.value })
        // setInput(e.target.value)
    }
    const cancel = (e) => {
        // e.preventDefault()
        setFeedback(false);
        setSubmitted(false);
    }
    return (
        <div className={style.bankTransfer}>
            <h6>Bank Transfer Information</h6>
            <ul>
                <li>Bank Name: <span>Wema Bank</span></li>
                <li>Account Name: <span>Proliferate Ai</span></li>
                <li>Account Number<span>0918273625</span></li>
                <li>Routing Number(if applicable): <span>SWG2B3645</span></li>
            </ul>

            <div>
                <CustomInput
                    // onChange={handleInput} 
                    name='name' type="email" label={"PayPal Email:"} />

            </div>




        </div>


    )
}

export const MobileAdd = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [index, setIndex] = React.useState()
    const [input, setInput] = React.useState('')
    const [info, setInfo] = React.useState()
    const [feedback, setFeedback] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)
    const feedbackShow = (e) => {
        e.preventDefault()
        setFeedback(!feedback);
        setSubmitted(true)

    }
    const handleInput = (e) => {
        // e.persist()
        // setInput({ ...input, [e.target.name]: e.target.value })
        setInput(e.target.value)
    }
    const subjectTutors = tutors.filter(tutor => tutor.course === input);
    const handleMore = (tutor) => {
        setIndex(tutor.name)
        setInfo(tutor)
        // Navigate(routes.medicineDetail())
    }
    const [paymentPage, setPaymentPage] = React.useState(false)
    const paymentButton = () => {
        setPaymentPage(!paymentPage)
    }
    const cancel = (e) => {
        // e.preventDefault()
        setFeedback(false);
        setSubmitted(false);
    }
    return (
        <>
            <TutorContext.Provider value={info}>
                {paymentPage ?
                    <Payment />
                    :

                    <section className={style.main}>
                        <div className={style.addNewCourse}>
                            {/* <p>Choose a new Subject/Tutor:</p> */}
                            <form action="" className={style.rowImput}>
                                <CustomInput type="select" label='Choose a new Subject/Tutor:' name='course'
                                    onChange={handleInput}
                                >
                                    <option value="Autosuggestion">Autosuggestions</option>
                                    {courses.map((course) =>
                                        <option value={course}>{course}</option>
                                    )}
                                </CustomInput>
                                <MyButton type='primary'
                                // onClick={handleSave}
                                // disabled={isSubmitting}
                                >Check Availability
                                </MyButton>
                            </form>
                            {index ?
                                <div className={style.moreTutorInfo}>
                                    <div className={style.tutorInfo}>
                                        {info.icon}
                                        <p className={style.name}>{info.name}</p>
                                        <p className={style.course}>{info.course} Tutor</p>
                                        <MyRating />
                                        <MyButton type='primary' onClick={onOpen}
                                        // onClick={feedbackShow}
                                        // disabled={isSubmitting}
                                        >Enrol in class
                                        </MyButton>
                                    </div>
                                    <div className={style.tutorInfoDiv}>
                                        <h4>Details</h4>
                                        <TutorDetails info={info} />
                                        <div className={style.buttons}>
                                            <MyButton type='outline'
                                            // onClick={handleSave}
                                            // disabled={isSubmitting}
                                            >
                                                <Link to={routes.messageDashboard}>Chat</Link>
                                            </MyButton>
                                            <MyButton type='outline'
                                            // onClick={handleSave}
                                            // disabled={isSubmitting}
                                            >Evaluation Call
                                            </MyButton>

                                        </div>
                                    </div>
                                    <ChakraProvider>
                                        <VerticallyCenter>
                                            {/* <Button onClick={onOpen}>Send Invitation</Button> */}
                                            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                                                <ModalOverlay />
                                                <ModalContent >
                                                    <div className={combinedClasses(style.upcomingAlert)}>
                                                        <ModalHeader><h5>Confirm selection</h5></ModalHeader>
                                                        <ModalBody>
                                                            <p>Take a Moment to review the <span>tutor</span> you selected</p>
                                                            <div className={style.tutorDetails}>
                                                                <div>{info.icon}</div>
                                                                <div>
                                                                    <div>
                                                                        <p>Name:</p>
                                                                        <p>Subject:</p>
                                                                        <p>Availability:</p>
                                                                    </div>
                                                                    <div>
                                                                        <p> {info.name}</p>
                                                                        <p>{info.course} </p>
                                                                        <p>{info.availabilty}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </ModalBody>
                                                        <ModalFooter>
                                                            <MyButton type='outline'
                                                                // onClick={cancel} 
                                                                onClick={onClose}>Change Tutor</MyButton>
                                                            <MyButton type='primary' onClick={paymentButton}>Confirm
                                                                {/* <Link to={routes.reschedule()}>Proceed</Link> */}
                                                            </MyButton>

                                                        </ModalFooter>
                                                    </div>

                                                </ModalContent>
                                            </Modal>
                                        </VerticallyCenter>
                                    </ChakraProvider>


                                </div>
                                :
                                <ul className={style.tutorRow}>
                                    {subjectTutors.map((tutor) =>
                                        <li >
                                            {tutor.icon}
                                            <div className={style.tutorInfo}>
                                                <p className={style.name}>{tutor.name}</p>
                                                <p className={style.course}>{tutor.course} Tutor</p>
                                                <MyRating />
                                                <button className={style.tutorProfile}
                                                    onClick={() => handleMore(tutor)}>View Profile</button>
                                            </div>

                                        </li>

                                    )}
                                </ul>}
                        </div>
                        {/* </div> */}

                    </section>
                }
            </TutorContext.Provider>
        </>
    )
}