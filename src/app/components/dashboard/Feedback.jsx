import style from './style.module.css';
import { Dashboard } from '.';
import { tutors, suggestions } from './data';
import { CustomInput } from '../input';
import MyRating from '../rating';
import { useMediaQuery } from '@chakra-ui/react'
import { DashboardHeader } from '../layout';
import { combinedClasses } from '../../utilities/format';
import { MyButton } from '../button';

export const Feedback = () => {
    const mobileSideBar = useMediaQuery('(max-width: 560px)')
    return (
        <>
            {mobileSideBar.includes(true) ?
                <section className={style.login}>
                    <DashboardHeader>Feedback</DashboardHeader>
                    <MobileFeedback />
                </section> :
                <Dashboard>
                    <section className={style.main}>
                        <h3>Feedback</h3>
                        <div className={style.feedbackSection}>
                            <p>
                                We value your feedback! It helps us understand your needs better so that we can improve our tutoring services and provide you with the best possible learning experience.
                                Please take a moment to share your thoughts with us. Once you've provided your feedback, click on the "Submit Feedback" button to send your responses to our team.
                                Thank you for taking the time to share your thoughts with us!</p>
                            <div>
                                <h6>Tutor Feedback</h6>
                                <div>
                                    <p>Tutor Name:</p>
                                    <form action="">

                                        <CustomInput type="select"
                                        // onChange={handleInput}
                                        >
                                            {tutors.map((tutor) =>
                                                <option value="Weekdays">{tutor.name}</option>
                                            )}
                                        </CustomInput>
                                        <MyRating />
                                        <CustomInput
                                            // onChange={handleInput} 
                                            name='username' type="textarea" className={style.textarea} />
                                        <button className={style.button2}>Submit Feedback</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </Dashboard>}
        </>
    )
}

export const MobileFeedback = () => {
    return (
        <section className={style.main}>
            <div className={combinedClasses(style.feedbackSection, 'feedback')}>

                <h6>Rate the Tutor</h6>
                <form action="">

                    <CustomInput type="select" placeholder='Ex. john' label='Tutor Name'
                    // onChange={handleInput}
                    >
                        {tutors.map((tutor) =>
                            <option value="Weekdays">{tutor.name}</option>
                        )}
                    </CustomInput>
                    <div>
                        <p>Rating</p>
                        <MyRating />
                    </div>
                    <CustomInput
                        // onChange={handleInput} 
                        name='username' type="textarea" className={style.textarea} label='Your Comment' placeholder='Write a comment here' />
                        <ul className={style.suggestions}>
                            {suggestions.map(suggestion=>
                            <li>{suggestion}</li>
                            )}
                        </ul>
                    <MyButton type='primary'
                    // onClick={() => setPasswordPage(false)}
                    // disabled={isSubmitting}
                    >Submit Feedback
                    </MyButton>
                </form>
                <p>
                    We value your feedback! It helps us understand your needs better so that we can improve our tutoring services and provide you with the best possible learning experience.
                    Please take a moment to share your thoughts with us. Once you've provided your feedback, click on the "Submit Feedback" button to send your responses to our team.
                    Thank you for taking the time to share your thoughts with us!</p>

            </div>

        </section>
    )
}