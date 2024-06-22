import style from './style.module.css';
import style2 from './style2.module.css';
import { Dashboard } from '.';
import { assignmentList, assignments } from './data';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import React from 'react';
import { combinedClasses } from '../../utilities/format';
import { MyButton } from '../button';
import { CustomInput } from '../input';
import Button from '@material-ui/core/Button';
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { useRef, useState } from 'react';
import { ReactComponent as Note } from '../../assets/icon/note.svg';
import { ReactComponent as Cancel } from '../../assets/icon/cancelIcon.svg';
import { ReactComponent as ImageIcon } from '../../assets/icon/pictureIcon.svg';
import { newRoutes } from '../sidebar/data'
import { routes } from '../../utilities/routes';

export const AssignmentDashboard = () => {
    return (
        <Dashboard>
            <section className={style.main}>
                <h3>Assignment</h3>
                <div className={style2.assignmentDiv}>
                    {assignmentList.map((course, index) =>
                        // course.subtitle.url===newRoutes.submitAssignment() ? 
                        <Assignments {...course} key={index} />
                        // :
                        // <SubmitAssignment {...course} key={index} />
                    )}
                </div>
            </section>
        </Dashboard>
    )
}

export const Assignments = ({ ...props }) => {
    const path = window.location.pathname;
    const submitPath = '/assignments/submit'
    const [dropDown, setDropDown] = React.useState(false)
    const navDropDown = () => {
        setDropDown(!dropDown)
    }
    const [feedback, setFeedback] = React.useState(false)

    const feedbackShow = (e) => {
        e.preventDefault()
        setFeedback(!feedback);

    }
    const cancel = (e) => {
        // e.preventDefault()
        setFeedback(false);
    }
    return (
        <ul>
            <li onClick={navDropDown}>
                <p className={style2.bold}>{props.subject} Assignments</p>
                {/* <MdOutlineKeyboardArrowDown /> */}
                {dropDown ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}


            </li>


            {dropDown && (path === submitPath ?
                <SubmitAssignment /> :
                <div className={style2.assignment}>
                    <p className={style2.bold}>Description: <span>{props.description}</span></p>
                    <ul>
                        {props.documents.map(document =>
                            <li onClick={feedbackShow}>{document}</li>
                        )}

                    </ul>
                    <div className={style2.itemFooter}>
                        <p className={style2.line}>Attach Files</p>
                        <p>Due Date: {props.date}</p>
                    </div>

                </div>
            )}
            {feedback &&
                <div className={combinedClasses(style.referFeedback, style2.downloadedAlert)}>
                    <h5>Assignment Downloaded</h5>
                    <p>Your assignment has been successfully downloaded</p>

                    <div className={style.buttons}>
                        {/* <button  className={style.button1}>OK</button> */}
                        <MyButton type='primary'
                            // onClick={handleSave}
                            // disabled={isSubmitting}
                            onClick={cancel}>Ok
                        </MyButton>
                    </div>
                </div>
            }

        </ul >
    )
}
export const SubmitAssignment = ({ ...props }) => {
    const [dropDown, setDropDown] = React.useState(false)
    const [files, setFiles] = useState([]);
    const [selectedFile, setSelectedFile] = React.useState([false])
    const inputRef = useRef();
    const navDropDown = () => {
        setDropDown(!dropDown)
    }
    const [feedback, setFeedback] = React.useState(false)

    const feedbackShow = (e) => {
        e.preventDefault()
        setFeedback(!feedback);

    }
    const cancel = (e) => {
        // e.preventDefault()
        setFeedback(false);
    }
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

    return (
        <>
            <CustomInput
                //  onChange={handleInput} 
                name='answer' type="textarea" placeholder="Type here" className={style2.textarea} />
            {/* } */}

            <div className={style2.assignment}>
                <p className={style2.bold}>Assignment 1: <span>{props.description}</span></p>
                <p className={style2.bold}>textbook</p>
                {/* <ul>
                        {props.documents.map(document =>
                            <li onClick={feedbackShow}>{document}</li>
                        )}

                    </ul> */}
                <div className={style2.itemFooter}>
                    <p onClick={feedbackShow}>Solved</p>
                </div>

            </div>
            {/* } */}
            {feedback &&
                <div className={combinedClasses(style.referFeedback, style2.uploadAlert)}>
                    <div className={style2.head}>
                        <h5>Upload Document</h5>
                        <Cancel />
                    </div>
                    <p>Locate and click on the "Upload File" button provided on the assignment submission screen.</p>
                    <div className={style2.container}>
                        <ImageIcon/>
                        <p>Drag and Drop Files here or</p>
                        <input type="file" accept=".pdf, .docx, .doc" id="contained-button-file" className={style.input} onChange={handleMultipleChange} ref={inputRef} multiple style={{display:'none'}}/>
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span" type='submit' className={style.para} onClick={handleMultipleSubmit} multiple>
                                Browse Files
                            </Button>
                            {/* {uploadedFileURL && <img src={uploadedFileURL} alt="Uploaded content" />} */}
                        </label>
                    </div>
                    <div className={style2.note}>
                        <div><Note /></div>
                        <p>Once you've uploaded the document(s), review the assignment details and ensure everything is correct. If you're ready, click on the "Submit" button to submit your assignment for evaluation.</p>
                    </div>
                    <div className={combinedClasses(style.buttons, style2.buttons)}>
                        <button onClick={cancel} className={style2.button1}>Cancel</button>
                        <MyButton type='primary'
                            // onClick={handleSave}
                            // disabled={isSubmitting}
                            onClick={cancel}><FaArrowUpFromBracket /> Upload
                        </MyButton>
                    </div>

                </div>
            }

            {/* </ul > */}
        </>
    )
}
