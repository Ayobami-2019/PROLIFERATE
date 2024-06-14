import style from './style.module.css';
import { Dashboard } from '.';
import { MyButton } from '../button';
import { CustomInput } from '../input';
import { classes, courses, tutors } from './data';

import React from 'react';
import { MyRating } from '../rating';
import { Link } from 'react-router-dom';
import { routes } from '../../utilities/routes';
import { combinedClasses } from '../../utilities/format';

export const AddNewDashboard = () => {
    // const [input, setInput] = React.useState({
    //     course: ''
    // })
    const[index, setIndex]=React.useState()
    const [input, setInput] = React.useState('')
    const [info, setInfo] = React.useState()
    const handleInput = (e) => {
        // e.persist()
        // setInput({ ...input, [e.target.name]: e.target.value })
        setInput(e.target.value)
    }
    const subjectTutors = tutors.filter(tutor => tutor.course===input);
    const handleMore = (tutor) => {
        setIndex(tutor.name)
        setInfo(tutor)
        // Navigate(routes.medicineDetail())
    }
    console.log(index)
    return (
        <Dashboard>
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
                <TutorDetails info={info} />
                :
                <ul className={style.tutorRow}>
                        {subjectTutors.map((tutor) =>
                            <li >
                                {tutor.icon}
                                <div className={style.tutorInfo}>
                                    <p className={style.name}>{tutor.name}</p>
                                    <p className={style.course}>{tutor.course} Tutor</p>
                                    <MyRating/>
                                    <button className={style.tutorProfile} onClick={() => handleMore(tutor)}>View Profile</button>
                                </div>

                            </li>

                        )}
                    </ul>}
                </div>
                {/* </div> */}
                
            </section>
        </Dashboard>
    )
}

export const TutorDetails=(props)=>{
    const [feedback, setFeedback] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)
    const feedbackShow = (e) => {
        e.preventDefault()
        setFeedback(!feedback);
        setSubmitted(true)

    }
    const cancel = (e) => {
        // e.preventDefault()
        setFeedback(false);
        setSubmitted(false);
    }
    return(
        <div className={style.moreTutorInfo}>
            <div className={style.tutorInfo}>
                {props.info.icon}
                <p className={style.name}>{props.info.name}</p>
                <p className={style.course}>{props.info.course} Tutor</p>
                <MyRating/>
            </div>
            <div className={style.tutorInfoDiv}>
                <ul>
                    <li>Subject Expertise: 
                        <span>{props.info.course}</span>
                    </li>
                    <li>Qualifications: 
                        <span>{props.info.qualification}</span>
                    </li>
                    <li>Teaching Style: 
                        <span>{props.info.style}</span>
                    </li>
                    <li>Availability: 
                        <span>{props.info.availabilty}</span>
                    </li>
                    <li>Rating: 
                        <span>{props.info.rating} (based on student feedback)</span>
                    </li>
                    <li>Bio: 
                        <span>{props.info.bio}</span>
                    </li>
                </ul>
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
                    <MyButton type='primary' onClick={feedbackShow}
                        // onClick={handleSave}
                        // disabled={isSubmitting}
                        >Enrol in class
                    </MyButton>
                </div>
            </div>
            {feedback &&
                    <div className={combinedClasses(style.referFeedback, style.upcomingAlert)}>
                        <h5>Confirm selection</h5>
                        <p>Take a Moment to review the <span>tutor</span> you selected</p>
                        <div className={style.tutorDetails}>
                                {props.info.icon}
                                <div>
                                <p>Name: <span>{props.info.name}</span></p>
                                <p>Subject: <span>{props.info.course}</span></p>
                                <p>Availability: {props.info.availabilty}</p>
                                </div>
                        </div>
                        <div className={style.buttons}>
                            <button onClick={cancel} className={style.button1}>Change Tutor</button>
                            <button className={style.button2}>
                                <Link to={routes.paymentDashboard()}>Confirm</Link></button>
                        </div>
                    </div>
                }
        </div>
    )
}
// function UserList({ users }) {
//     const [ageFilter, setAgeFilter] = useState(0);
  
//     const filteredUsers = users.filter(user => user.age > ageFilter);
  
//     return (
//       <div>
//         <input type="number" value={ageFilter} onChange={e => setAgeFilter(e.target.value)} />
//         <ul>
//           {filteredUsers.map(user => (
//             <li key={user.id}>{user.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

//   function App() {
//     const [items, setItems] = useState([
//       { id: 1, name: "item 1" },
//       { id: 2, name: "item 2" },
//       { id: 3, name: "item 3" },
//     ]);
  
//     const handleDeleteItem = (id) => {
//       setItems((prevItems) => prevItems.filter((item) => item.id !== id));
//     };
  
//     return (
//       <div>
//         {items.map((item) => (
//           <div key={item.id}>
//             <span>{item.name}</span>
//             <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
//           </div>
//         ))}
//         <UserList />
//         <Users />
//       </div>
//     );
//   }

//   function App() {
//     const [items, setItems] = useState([
//       { id: 1, name: "item 1" },
//       { id: 2, name: "item 2" },
//       { id: 3, name: "item 3" },
//     ]);
  
//     const handleDeleteItem = (id) => {
//       setItems((prevItems) => prevItems.filter((item) => item.id !== id));
//     };
  
//     return (
//       <div>
//         {items.map((item) => (
//           <div key={item.id}>
//             <span>{item.name}</span>
//             <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
//           </div>
//         ))}
//         <UserList />
//         <Users />
//       </div>
//     );
//   }