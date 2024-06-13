import style from './style.module.css';
import { Dashboard } from '.';
import { tutors } from './data';
import { ReactComponent as Star } from "../../assets/icon/star.svg";
import { CustomInput } from '../input';

export const Feedback = () => {

    return (
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
                                <div className={style.rating}><Star/><Star/><Star/><Star/><Star/></div>
                                <CustomInput 
                                // onChange={handleInput} 
                                name='username' type="textarea" className={style.textarea} />
                                <button className={style.button2}>Submit Feedback</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Dashboard>
    )
}