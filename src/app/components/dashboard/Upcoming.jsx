import React from 'react';
import style from './style.module.css';
import { Dashboard } from '.';
import { classes } from './data';
import { combinedClasses } from '../../utilities/format';
import { routes } from '../../utilities/routes';
import { Link } from 'react-router-dom';
import { useDisclosure } from "@chakra-ui/react"
import { ChakraProvider } from '@chakra-ui/react'
import {
    Button, Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalCloseButton, ModalBody, ModalFooter
} from "@chakra-ui/react"
import { CustomInput } from '../input';
import { VerticallyCenter } from '../Popup';
import { useMediaQuery } from '@chakra-ui/react'
import { DashboardHeader } from '../layout';
import { MyButton } from '../button';
import MyRating from '../rating';



export const UpcomingDashboard = () => {
    const mobileSideBar = useMediaQuery('(max-width: 560px)')
    // const [feedback, setFeedback] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isRescheduleOpen, onOpen: onRescheduleOpen, onClose: onRescheduleClose } = useDisclosure()
    const { isOpen: isJoinOpen, onOpen: onJoinOpen, onClose: onJoinClose } = useDisclosure();
    const [classData, setClassData] = React.useState()
    // const feedbackShow = (e) => {
    //     e.preventDefault()
    //     setFeedback(!feedback);
    //     setSubmitted(true)

    // }
    // const cancel = (e) => {
    //     // e.preventDefault()
    //     setFeedback(false);
    //     setSubmitted(false);
    // }
    return (
        <>
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <DashboardHeader>Upcoming Classes</DashboardHeader>
                    <MobileSchedule />
                </section> :

                <Dashboard>
                    <section className={style.main}>
                        <h3>Upcoming Classes</h3>
                        <div className={style.classes}>
                            <div className={style.tableHead}>
                                <p>Classes to prepare for</p>
                                <button>
                                    <Link to={routes.reschedule()}>Add New</Link>
                                </button>
                            </div>
                            <table className={style.classesTable}>
                                <thead>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Schedule</th>
                                    <th>Actions</th>
                                </thead>
                                <tbody>
                                    {classes.map((data, index) =>
                                        <tr key={index}>
                                            <td>{data.subject}</td>
                                            <td>{data.tutor}</td>
                                            <td >{data.schedule}</td>
                                            <td className={style.blueColor} key={index} onClick={() =>setClassData(data)}>
                                                <span onClick={onRescheduleOpen}>Reschedule | </span>
                                                <span onClick={onJoinOpen}> Join Class</span>

                                            </td>
                                        </tr>




                                    )}

                                </tbody>
                            </table>

                            <ChakraProvider><VerticallyCenter>
                                {/* <Button onClick={onOpen}>Reschedule</Button> */}
                                {/* <button */}
                                {/* onClick={feedbackShow}  */}
                                {/* onClick={onOpen}
                        >Send Invitation</button> */}
                                <Modal onClose={onRescheduleClose} isOpen={isRescheduleOpen} isCentered>
                                    <ModalOverlay />
                                    <ModalContent >
                                        <ModalHeader>Reschedule Class</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <p>You can reshedule up to 3 sessions at once. <br></br>
                                                To Proceed, <br></br>
                                                Simply select the date(s) in the calendar.</p>
                                        </ModalBody>
                                        <ModalFooter>
                                            {/* <Button onClick={onClose}>OK</Button> */}
                                            <MyButton type='outline'
                                                // onClick={cancel} 
                                                onClick={onRescheduleClose}>Cancel</MyButton>
                                            <MyButton type='primary'>
                                                <Link to={routes.reschedule()}>Proceed</Link></MyButton>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            </VerticallyCenter>
                            </ChakraProvider>

                            <ChakraProvider><VerticallyCenter>
                                <Modal onClose={onJoinClose} isOpen={isJoinOpen} isCentered>
                                    <ModalOverlay />
                                    <ModalContent >
                                        <ModalHeader>Class Details</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <ul>
                                                {/* {console.log(classData)} */}
                                                <li>Class Title: {classData.title}</li>
                                                <li>Subject: {classData.subject}</li>
                                                <li>Tutor: {classData.tutor}</li>
                                                <li>Date/Time: {classData.schedule}</li>
                                            </ul>
                                        </ModalBody>
                                        <ModalFooter>
                                            {/* <Button onClick={onClose}>OK</Button> */}
                                            <MyButton type='outline'
                                                // onClick={cancel} 
                                                onClick={onJoinClose}>Cancel</MyButton>
                                            <MyButton type='primary'>
                                                <Link to={routes.class()}>Join Class</Link></MyButton>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            </VerticallyCenter>
                            </ChakraProvider>
                        </div>

                    </section>
                </Dashboard>}
        </>
    )
}

export const MobileSchedule = () => {
    const { isOpen: isRescheduleOpen, onOpen: onRescheduleOpen, onClose: onRescheduleClose } = useDisclosure()
    const { isOpen: isJoinOpen, onOpen: onJoinOpen, onClose: onJoinClose } = useDisclosure()
    const [classData, setClassData] = React.useState()

    return (
        <section className={style.main}>
            <div className={combinedClasses(style.classes, style.mobileClass, style.mobileUpcoming)}>
                <div className={style.mobilePageTitle}>
                    <div>
                        <h3>Upcoming Classes</h3>
                        <p>Classes to prepare for</p>
                    </div>

                    <MyButton type='primary'>
                        <Link to={routes.reschedule()}>Add New</Link>
                    </MyButton>
                </div>
                <ul >
                    {classes.map((data, index) =>
                    
                        <li key={index} className={combinedClasses(style.testList,
                            // index === records.length - 1 ? style.noborder : style.border
                        )} >
                            <div className={style.testRow1}>
                                <div>
                                    <p>Subject: {data.course}</p>
                                    <p>Tutor: {data.tutor}</p>
                                </div>
                                <div>
                                    <p>Ratings</p>
                                    <MyRating />

                                </div>
                            </div>
                            <div className={style.testRow2}>
                                <p>Schedules: {data.schedule}</p>
                            </div>
                            <div className={style.buttons} onClick={()=> setClassData(data)}>
                                <MyButton type='outline' onClick={onJoinOpen}>Join Class
                                </MyButton>
                                <MyButton type='primary'
                                    // onClick={handleSave}
                                    // disabled={isSubmitting}
                                    onClick={onRescheduleOpen}>Reschedule
                                </MyButton>
                            </div>

                            
                        </li>
                        
                    )}
                </ul>
                {/* <div className={style.classesTable}> */}
                <ChakraProvider><VerticallyCenter>
                    {/* <Button onClick={onOpen}>Reschedule</Button> */}
                    {/* <button */}
                    {/* onClick={feedbackShow}  */}
                    {/* onClick={onOpen}
                        >Send Invitation</button> */}
                    <Modal onClose={onRescheduleClose} isOpen={isRescheduleOpen} isCentered>
                        <ModalOverlay />
                        <ModalContent >
                            <ModalHeader>Reschedule Class</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <p>You can reshedule up to 3 sessions at once. <br></br>
                                    To Proceed, <br></br>
                                    Simply select the date(s) in the calendar.</p>
                            </ModalBody>
                            <ModalFooter>
                                {/* <Button onClick={onClose}>OK</Button> */}
                                <MyButton type='outline'
                                    // onClick={cancel} 
                                    onClick={onRescheduleClose}>Cancel</MyButton>
                                <MyButton type='primary'>
                                    <Link to={routes.reschedule()}>Proceed</Link></MyButton>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </VerticallyCenter>
                </ChakraProvider>

                <ChakraProvider><VerticallyCenter>
                    <Modal onClose={onJoinClose} isOpen={isJoinOpen} isCentered>
                        <ModalOverlay />
                        <ModalContent >
                            <ModalHeader>Class Detail</ModalHeader>
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
                                {/* <Button onClick={onClose}>OK</Button> */}
                                <MyButton type='outline'
                                    // onClick={cancel} 
                                    onClick={onJoinClose}>Cancel</MyButton>
                                <MyButton type='primary'>
                                    <Link to={routes.class()}>Join Class</Link></MyButton>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </VerticallyCenter>
                </ChakraProvider>

                
            </div >
        </section >
    )
}


