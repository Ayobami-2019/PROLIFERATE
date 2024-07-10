import React from 'react';
import style from './style.module.css';
import { CustomInput } from '../input';
import { Dashboard } from '.';
import { combinedClasses } from '../../utilities/format';
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react'
import { DashboardHeader } from '../layout';
import { VerticallyCenter } from '../Popup'
import { useDisclosure } from "@chakra-ui/react"
import {
    Button, Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalCloseButton, ModalBody, ModalFooter
} from "@chakra-ui/react";
import { MyButton } from '../button';


export const ReferDashboard = () => {

    const mobileSideBar = useMediaQuery('(max-width: 560px)')
    const [feedback, setFeedback] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)
    const id = document.getElementById('main')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const feedbackShow = (e) => {
        e.preventDefault()
        setFeedback(!feedback);
        setSubmitted(true)
        id.classList.toggle('blur')

    }
    const cancel = (e) => {
        // e.preventDefault()
        setFeedback(false);
        setSubmitted(false);
    }

    return (
        <>
        <ChakraProvider>
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <DashboardHeader>Refer a Friend</DashboardHeader>
                    <MobileRefer />
                </section> :
                <Dashboard>
                    <section className={combinedClasses(style.main, style.referMain)} >
                        {/* <div> */}
                        <h3 id='main'>Refer a Friend</h3>
                        <div className={style.refer} disabled={submitted} id='main'>
                            <p>Fill out your friend's email address, to invite them.</p>
                            <form action="">
                                <CustomInput
                                    // onChange={handleInput} 
                                    name='username' type="email" placeholder="Enter your email address" label='Email Address:' />
                                {/* <button
                                    onClick={feedbackShow}
                                onClick={verticallyCenter}
                                >Send Invitation</button> */}
                                <VerticallyCenter>
                                    <Button onClick={onOpen}>Send Invitation</Button>
                                    {/* <button */}
                                    {/* onClick={feedbackShow}  */}
                                    {/* onClick={onOpen}
                        >Send Invitation</button> */}
                                    <Modal onClose={onClose} isOpen={isOpen} isCentered>
                                        <ModalOverlay />
                                        <ModalContent >
                                            <ModalHeader>Invitation Link Sent</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <p>An invitation link has been successfully sent to the email address provided. Please ask the recipient to check their email inbox, including spam or junk folders, for further instructions.</p>
                                            </ModalBody>
                                            <ModalFooter>
                                                {/* <Button onClick={onClose}>OK</Button> */}
                                                <MyButton onClick={onClose}>OK</MyButton>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </VerticallyCenter>
                            </form>
                            <div>
                                <h6>Notes</h6>
                                <p>By clicking <span>"Send Invitation"</span>, you agree to our terms and conditions and acknowledge that you have permission to share your friend's contact information.</p>
                            </div>
                            {/* </div> */}
                        </div>
                        {/* {feedback &&
                            <div className={style.referFeedback}>
                                <h5>Invitation Link Sent</h5>
                                <p>An invitation link has been successfully sent to the email address provided. Please ask the recipient to check their email inbox, including spam or junk folders, for further instructions.</p>
                                <button onClick={cancel}>OK</button>
                            </div>} */}
                    </section>
                </Dashboard>
            }
            </ChakraProvider>
        </>
    )
}

export const MobileRefer = () => {
    const [feedback, setFeedback] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)
    const id = document.getElementById('main')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const feedbackShow = (e) => {
        e.preventDefault()
        setFeedback(!feedback);
        setSubmitted(true)
        // id.classList.toggle('blur')

    }
    const cancel = (e) => {
        // e.preventDefault()
        setFeedback(false);
        setSubmitted(false);
    }

    return (
        <section className={combinedClasses(style.main, style.referMain)} >

            <div className={style.refer} disabled={submitted} id='main'>
                <p>Fill out your friend's email address, to invite them.</p>
                <form action="">
                    <CustomInput
                        // onChange={handleInput} 
                        name='username' type="email" placeholder="Enter your email address" label='Email Address:' />

                    {/* <Button onClick={onOpen}>{props.title}</Button> */}
                    <VerticallyCenter>
                        <Button onClick={onOpen}>Send Invitation</Button>
                        {/* <button */}
                        {/* onClick={feedbackShow}  */}
                        {/* onClick={onOpen}
                        >Send Invitation</button> */}
                        <Modal onClose={onClose} isOpen={isOpen} isCentered>
                            <ModalOverlay />
                            <ModalContent >
                                <ModalHeader>Invitation Link Sent</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <p>An invitation link has been successfully sent to the email address provided. Please ask the recipient to check their email inbox, including spam or junk folders, for further instructions.</p>
                                </ModalBody>
                                <ModalFooter>
                                <MyButton type='primary' onClick={onClose}>OK</MyButton>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </VerticallyCenter>
                    {/* <button onClick={feedbackShow} >Send Invitation</button> */}
                </form>
                <div>
                    {/* <h6>Notes</h6> */}
                    <p>By clicking <span>"Send Invitation"</span>, you agree to our terms and conditions and acknowledge that you have permission to share your friend's contact information.</p>
                </div>
                {/* <VerticallyCenter/> */}
                {/* </div> */}
            </div>
            {/* {feedback &&
                <div className={style.referFeedback}>
                    <h5>Invitation Link Sent</h5>
                    <p>An invitation link has been successfully sent to the email address provided. Please ask the recipient to check their email inbox, including spam or junk folders, for further instructions.</p>
                    <button onClick={cancel}>OK</button>
                </div>} */}
        </section>
    )
}