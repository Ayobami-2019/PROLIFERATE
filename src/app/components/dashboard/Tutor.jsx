import style from './style.module.css';
import { Dashboard } from '.';
import { tutors } from './data';
import { ReactComponent as TutorMore } from "../../assets/icon/tutorMore.svg";
import { combinedClasses } from '../../utilities/format';
import style2 from './style2.module.css';
import { createContext, useContext, useState, useMemo } from 'react';
import { TutorDetails } from './Add';
import React from 'react';
import { MyButton } from '../button';
import { Link } from 'react-router-dom';
import { routes } from '../../utilities/routes';
import { ReactComponent as TutorMore2 } from "../../assets/icon/more2.svg";
import { useMediaQuery } from '@chakra-ui/react'
import { DashboardHeader } from '../layout';
import {
    Button, Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalCloseButton, ModalBody, ModalFooter
} from "@chakra-ui/react"
import { CustomInput } from '../input';
import { VerticallyCenter } from '../Popup';
import { ChakraProvider, useDisclosure} from '@chakra-ui/react'
// const TutorContext = createContext(null)

export const TutorDashboard = () => {
    const mobileSideBar = useMediaQuery('(max-width: 560px)')
    const [index, setIndex] = React.useState()
    const [info, setInfo] = React.useState()
    const handleMore = (tutor) => {
        // console.log(tutor)
        // setIndex(tutor.name)
        setInfo(tutor)
        // Navigate(routes.medicineDetail())
    }

    return (
        <>
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <DashboardHeader>My Tutors</DashboardHeader>
                    <MobileTutors />
                </section> :

                <Dashboard>
                    {/* <TutorContext.Provider value={info}> */}
                    <section className={style.main}>
                        <h3>My Tutors</h3>
                        <div className={style2.tutorDashboard}>
                            {info ?
                                <div className={style2.tutorDetails}>
                                    <div className={style.tutorInfo}>
                                        {info.icon}
                                        <p className={style.name}>{info.name}</p>
                                        <p className={style.course}>{info.course} Tutor</p>

                                    </div>
                                    <div className={style2.tutorDetailsDiv}>
                                        <TutorDetails info={info} />
                                        <div className={style2.buttons}>
                                            <MyButton type='primary'
                                            // onClick={feedbackShow}
                                            // onClick={handleSave}
                                            // disabled={isSubmitting}
                                            >Feedback
                                            </MyButton>
                                            <MyButton type='outline'
                                            // onClick={handleSave}
                                            // disabled={isSubmitting}
                                            >Review</MyButton>

                                        </div>
                                    </div>
                                </div> :
                                <ul className={combinedClasses(style.tutorUL)}>
                                    {tutors.map((tutor) =>
                                        <li className={style.border}>
                                            <div className={combinedClasses(style.row, style2.row)}>
                                                <input
                                                    // onChange={handleInput} 
                                                    id="status" name="checkbox" type="checkbox" />
                                                <div>
                                                    <div>{tutor.icon}</div>
                                                    <p className={style.tutor}>{tutor.name}</p>
                                                </div>
                                            </div>
                                            <button>Active</button>
                                            <TutorMore onClick={() => handleMore(tutor)} />
                                        </li>

                                    )}

                                </ul>}
                        </div>
                    </section>
                    {/* </TutorContext.Provider> */}
                </Dashboard>
            }
        </>
    )
}
export const MobileTutors = () => {
    const [index, setIndex] = React.useState()
    const [info, setInfo] = React.useState()
    const handleMore = (tutor) => {
        // console.log(tutor)
        // setIndex(tutor.name)
        setInfo(tutor)
        // Navigate(routes.medicineDetail())
    }
    return <section className={style.main}>
        {/* // <h3>My Tutors</h3> */}
        <div className={style2.tutorDashboard}>
            {info ?
                <div className={style2.tutorDetails}>
                    <div className={style.tutorInfo}>
                        {info.icon}
                        <p className={style.name}>{info.name}</p>
                        <p className={style.course}>{info.course} Tutor</p>

                    </div>
                    <div className={style2.tutorDetailsDiv}>
                        <TutorDetails info={info} />
                        <div className={style2.buttons}>
                            <MyButton type='primary'
                            // onClick={feedbackShow}
                            // onClick={handleSave}
                            // disabled={isSubmitting}
                            >Feedback
                            </MyButton>
                            <MyButton type='outline'
                            // onClick={handleSave}
                            // disabled={isSubmitting}
                            >Review</MyButton>

                        </div>
                    </div>
                </div> :
                <ul className={combinedClasses(style.tutorUL)}>
                    {tutors.map((tutor) =>
                        <li className={style.border}>
                            <div className={combinedClasses(style.row, style2.row)}>
                                <input
                                    // onChange={handleInput} 
                                    id="status" name="checkbox" type="checkbox" />
                                <div>
                                    <div>{tutor.icon}</div>
                                    <p className={style.tutor}>{tutor.name}</p>
                                </div>
                            </div>
                            <button>Active</button>
                            <TutorMore onClick={() => handleMore(tutor)} />
                        </li>

                    )}

                </ul>}
        </div>
    </section>
}

export const ManageTutors = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const mobileSideBar = useMediaQuery('(max-width: 560px)')
    const [index, setIndex] = React.useState()
    const [info, setInfo] = React.useState()
    const handleMore = (tutor) => {
        // console.log(tutor)
        // setIndex(tutor.name)
        setInfo(tutor)
        // Navigate(routes.medicineDetail())
    }

    return (
        <>
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <DashboardHeader>Manage Tutors</DashboardHeader>
                    <MobileManageTutors />
                </section> :
                <Dashboard>
                    {/* <TutorContext.Provider value={info}> */}
                    <section className={combinedClasses(style.main)}>
                        <h3>Manage Tutors</h3>
                        <div className={style2.tutorDashboard}>
                            {info ?
                                <div className={style2.tutorDetails}>
                                    <div className={style.tutorInfo}>
                                        {info.icon}
                                        <p className={style.name}>{info.name}</p>
                                        <p className={style.course}>{info.course} Tutor</p>

                                    </div>
                                    <div className={style2.tutorDetailsDiv}>
                                        <TutorDetails info={info} />

                                    </div>
                                </div> :
                                <div className={style2.manageTutors}>
                                    <ul className={combinedClasses(style.tutorUL)}>
                                        {tutors.map((tutor) =>
                                            <li className={style.border}>
                                                <div className={combinedClasses(style.row, style2.row)}>
                                                    <input
                                                        // onChange={handleInput} 
                                                        id="status" name="checkbox" type="checkbox" />
                                                    <div>
                                                        <div>{tutor.icon}</div>
                                                        <p className={style.tutor}>{tutor.name}</p>
                                                    </div>
                                                </div>
                                                <button>Active</button>
                                                <TutorMore2 onClick={() => handleMore(tutor)} />
                                            </li>


                                        )}

                                    </ul>
                                    <div className={style2.buttons}>
                                        <MyButton type='primary'
                                        // onClick={feedbackShow}
                                        // onClick={handleSave}
                                        // disabled={isSubmitting}
                                        >Add new Session
                                        </MyButton>
                                        <MyButton type='outline'
                                        // onClick={handleSave}
                                        // disabled={isSubmitting}
                                        >Cancel Session</MyButton>

                                    </div>
                                </div>}

                        </div>
                        <ChakraProvider>
                            <VerticallyCenter>
                            {/* <Button onClick={onOpen}>Reschedule</Button> */}
                            {/* <button */}
                            {/* onClick={feedbackShow}  */}
                            {/* onClick={onOpen}
                        >Send Invitation</button> */}
                            <Modal onClose={onClose} isOpen={isOpen} isCentered >
                                <ModalOverlay />
                                <ModalContent className='tutorAlert'>
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
                                            onClick={onClose}>Cancel</MyButton>
                                        <MyButton type='primary'>
                                            <Link to={routes.reschedule()}>Proceed</Link></MyButton>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </VerticallyCenter>
                        </ChakraProvider>
                    </section>
                    {/* </TutorContext.Provider> */}
                </Dashboard>}
        </>
    )
}


export const MobileManageTutors = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [index, setIndex] = React.useState()
    const [info, setInfo] = React.useState()
    const handleMore = (tutor) => {
        // console.log(tutor)
        // setIndex(tutor.name)
        setInfo(tutor)
        // Navigate(routes.medicineDetail())
    }

    return (
        <section className={style.main}>
            {/* <h3>Manage Tutors</h3> */}
            <div className={style2.tutorDashboard}>
                {info ?
                    <div className={style2.tutorDetails}>
                        <div className={style.tutorInfo}>
                            {info.icon}
                            <p className={style.name}>{info.name}</p>
                            <p className={style.course}>{info.course} Tutor</p>

                        </div>
                        <div className={style2.tutorDetailsDiv}>
                            <TutorDetails info={info} />

                        </div>
                    </div> :
                    <div className={style2.manageTutors}>
                        <ul className={combinedClasses(style.tutorUL)}>
                            {tutors.map((tutor) =>
                                <li className={style.border}>
                                    <div className={combinedClasses(style.row, style2.row)}>
                                        <input
                                            // onChange={handleInput} 
                                            id="status" name="checkbox" type="checkbox" />
                                        <div>
                                            <div>{tutor.icon}</div>
                                            <p className={style.tutor}>{tutor.name}</p>
                                        </div>
                                    </div>
                                    <button>Active</button>
                                    <TutorMore2 onClick={() => handleMore(tutor)} />
                                </li>


                            )}

                        </ul>
                        <div className={style2.buttons}>
                            <MyButton type='primary'
                            // onClick={feedbackShow}
                            // onClick={handleSave}
                            // disabled={isSubmitting}
                            >Add new Session
                            </MyButton>
                            <MyButton type='outline' onClick={onOpen}
                            // disabled={isSubmitting}
                            >Cancel Session</MyButton>

                        </div>
                    </div>}

            </div>
            <ChakraProvider><VerticallyCenter>
                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent className='tutorAlert' >
                        <ModalHeader>Are you sure?</ModalHeader>
                        
                        <ModalBody>
                            <p>You want to cancel schedule with this tutor? </p>
                        </ModalBody>
                        <ModalFooter>
                            {/* <Button onClick={onClose}>OK</Button> */}
                            <MyButton type='outline'
                                // onClick={cancel} 
                                onClick={onClose}>Cancel</MyButton>
                            <MyButton type='primary'>
                                <Link to={routes.reschedule()}>Yes, I am in</Link></MyButton>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </VerticallyCenter>
            </ChakraProvider>
        </section>
    )
}