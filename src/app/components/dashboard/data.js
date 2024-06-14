
import {ReactComponent as TutorPic } from "../../assets/icon/tutorpic.svg";
import {ReactComponent as Course1 } from "../../assets/icon/course1.svg";
import {ReactComponent as Course2 } from "../../assets/icon/course2.svg";
import {ReactComponent as Course3 } from "../../assets/icon/course3.svg";
import {ReactComponent as Not1 } from "../../assets/icon/not1.svg";
import {ReactComponent as  Not2 } from "../../assets/icon/not2.svg";
import {ReactComponent as Not3 } from "../../assets/icon/not3.svg";
import {ReactComponent as Not4 } from "../../assets/icon/not4.svg";
import {ReactComponent as  Not5 } from "../../assets/icon/not5.svg";
import {ReactComponent as Not6 } from "../../assets/icon/not6.svg";
import {ReactComponent as Tutor1} from "../../assets/images/tutor1.svg";
import {ReactComponent as Tutor2 } from "../../assets/images/tutor2.svg";
import {ReactComponent as Tutor3 } from "../../assets/images/tutor3.svg";
import {ReactComponent as Tutor4 } from "../../assets/images/tutor4.svg";
import {ReactComponent as Tutor5 } from "../../assets/images/tutor5.svg";
import {ReactComponent as Tutor6 } from "../../assets/images/tutor6.svg";
import {ReactComponent as Tutor7 } from "../../assets/images/tutor7.svg";
import {ReactComponent as Tutor8 } from "../../assets/images/tutor8.svg";
import {ReactComponent as Tutor9 } from "../../assets/images/tutor9.svg";
import {ReactComponent as Tutor10 } from "../../assets/images/tutor10.svg";
const newRoutes={
    profileSettings(){
        return '/settings/profileSettings'
    },
    loginSettings(){
        return '/settings/loginSettings'
    },
    summary(){
        return '/settings/summary'
    }
}

export const upcomingClasses=[
    {icon: <Course1/>, course: 'Mathematics', date: 'Monday, April 10th', time: '3:00PM - 4:30 PM', daysLeft: '10days'},
    {icon: <Course2/>, course: 'Mathematics', date: 'Monday, April 10th', time: '6:00PM - 7:30 PM', daysLeft: '12days'},
    {icon: <Course3/>, course: 'Mathematics', date: 'Monday, April 10th', time: '3:00PM - 4:30 PM', daysLeft: '20days'},
]

export const assignments=[
    {course: 'Science | Biological Benefits', date: '04 May, 09:20AM'},
    {course: 'Science | Biological Benefits', date: '04 May, 09:20AM'},
    {course: 'Science | Biological Benefits', date: '04 May, 09:20AM'},
]

export const tutors2=[
    {icon: <TutorPic/>, name: 'Guy Hawkins', status: 'Active'},
    {icon: <TutorPic/>, name: 'Guy Hawkins', status: 'Active'},
    {icon: <TutorPic/>, name: 'Guy Hawkins', status: 'Active'},
    {icon: <TutorPic/>, name: 'Guy Hawkins', status: 'Active'},
    {icon: <TutorPic/>, name: 'Guy Hawkins', status: 'Active'}
]
export const tutors=[
    {icon: <Tutor1/>, name: 'Sandra Gladys', course: 'History', qualification: "Bachelor's Degree in Mathematics, 5+ years tutoring experience", style: "Interactive and engaging, focused on problem-solving and critical thinking", 
availabilty: 'Evenings (Mon/Wed/Fri), Weekends (Sat/Sun)', rating: '4.8/5', 
bio: "Hi, I'm Henry Arsene, and I'm passionate about helping students to excel in mathematics. With a strong background in the subject and years of tutoring experience, I strive to make learning enjoyable and rewarding for my students. whether you need help with algebra, geometry, or calculus, I'm heare to guide you every step of the way. Let's work together to achieve your academic goals!"
},
    {icon: <Tutor2/>, name: 'Sandra Gladys', course: 'Mathematics', qualification: "Bachelor's Degree in Mathematics, 5+ years tutoring experience", style: "Interactive and engaging, focused on problem-solving and critical thinking", 
    availabilty: 'Evenings (Mon/Wed/Fri), Weekends (Sat/Sun)', rating: '4.8/5', 
    bio: "Hi, I'm Henry Arsene, and I'm passionate about helping students to excel in mathematics. With a strong background in the subject and years of tutoring experience, I strive to make learning enjoyable and rewarding for my students. whether you need help with algebra, geometry, or calculus, I'm heare to guide you every step of the way. Let's work together to achieve your academic goals!"
    },
    {icon: <Tutor3/>, name: 'Henry Arsene', course: 'History', qualification: "Bachelor's Degree in Mathematics, 5+ years tutoring experience", style: "Interactive and engaging, focused on problem-solving and critical thinking", 
    availabilty: 'Evenings (Mon/Wed/Fri), Weekends (Sat/Sun)', rating: '4.8/5', 
    bio: "Hi, I'm Henry Arsene, and I'm passionate about helping students to excel in mathematics. With a strong background in the subject and years of tutoring experience, I strive to make learning enjoyable and rewarding for my students. whether you need help with algebra, geometry, or calculus, I'm heare to guide you every step of the way. Let's work together to achieve your academic goals!"
    },
    {icon: <Tutor4/>, name: 'Sandra Gladys', course: 'Mathematics', qualification: "Bachelor's Degree in Mathematics, 5+ years tutoring experience", style: "Interactive and engaging, focused on problem-solving and critical thinking", 
    availabilty: 'Evenings (Mon/Wed/Fri), Weekends (Sat/Sun)', rating: '4.8/5', 
    bio: "Hi, I'm Henry Arsene, and I'm passionate about helping students to excel in mathematics. With a strong background in the subject and years of tutoring experience, I strive to make learning enjoyable and rewarding for my students. whether you need help with algebra, geometry, or calculus, I'm heare to guide you every step of the way. Let's work together to achieve your academic goals!"
    },
    {icon: <Tutor5/>, name: 'Sandra Gladys', course: 'History', qualification: "Bachelor's Degree in Mathematics, 5+ years tutoring experience", style: "Interactive and engaging, focused on problem-solving and critical thinking", 
    availabilty: 'Evenings (Mon/Wed/Fri), Weekends (Sat/Sun)', rating: '4.8/5', 
    bio: "Hi, I'm Henry Arsene, and I'm passionate about helping students to excel in mathematics. With a strong background in the subject and years of tutoring experience, I strive to make learning enjoyable and rewarding for my students. whether you need help with algebra, geometry, or calculus, I'm heare to guide you every step of the way. Let's work together to achieve your academic goals!"
    },
    {icon: <Tutor6/>, name: 'Sandra Gladys', course: 'Mathematics', qualification: "Bachelor's Degree in Mathematics, 5+ years tutoring experience", style: "Interactive and engaging, focused on problem-solving and critical thinking", 
    availabilty: 'Evenings (Mon/Wed/Fri), Weekends (Sat/Sun)', rating: '4.8/5', 
    bio: "Hi, I'm Henry Arsene, and I'm passionate about helping students to excel in mathematics. With a strong background in the subject and years of tutoring experience, I strive to make learning enjoyable and rewarding for my students. whether you need help with algebra, geometry, or calculus, I'm heare to guide you every step of the way. Let's work together to achieve your academic goals!"
    },
    {icon: <Tutor7/>, name: 'Sandra Gladys', course: 'History', qualification: "Bachelor's Degree in Mathematics, 5+ years tutoring experience", style: "Interactive and engaging, focused on problem-solving and critical thinking", 
    availabilty: 'Evenings (Mon/Wed/Fri), Weekends (Sat/Sun)', rating: '4.8/5', 
    bio: "Hi, I'm Henry Arsene, and I'm passionate about helping students to excel in mathematics. With a strong background in the subject and years of tutoring experience, I strive to make learning enjoyable and rewarding for my students. whether you need help with algebra, geometry, or calculus, I'm heare to guide you every step of the way. Let's work together to achieve your academic goals!"
    },
    {icon: <Tutor8/>, name: 'Sandra Gladys', course: 'History', qualification: "Bachelor's Degree in Mathematics, 5+ years tutoring experience", style: "Interactive and engaging, focused on problem-solving and critical thinking", 
    availabilty: 'Evenings (Mon/Wed/Fri), Weekends (Sat/Sun)', rating: '4.8/5', 
    bio: "Hi, I'm Henry Arsene, and I'm passionate about helping students to excel in mathematics. With a strong background in the subject and years of tutoring experience, I strive to make learning enjoyable and rewarding for my students. whether you need help with algebra, geometry, or calculus, I'm heare to guide you every step of the way. Let's work together to achieve your academic goals!"
    },
    {icon: <Tutor9/>, name: 'Sandra Gladys', course: 'Mathematics', qualification: "Bachelor's Degree in Mathematics, 5+ years tutoring experience", style: "Interactive and engaging, focused on problem-solving and critical thinking", 
    availabilty: 'Evenings (Mon/Wed/Fri), Weekends (Sat/Sun)', rating: '4.8/5', 
    bio: "Hi, I'm Henry Arsene, and I'm passionate about helping students to excel in mathematics. With a strong background in the subject and years of tutoring experience, I strive to make learning enjoyable and rewarding for my students. whether you need help with algebra, geometry, or calculus, I'm heare to guide you every step of the way. Let's work together to achieve your academic goals!"
    },
    {icon: <Tutor10/>, name: 'Sandra Gladys', course: 'History', qualification: "Bachelor's Degree in Mathematics, 5+ years tutoring experience", style: "Interactive and engaging, focused on problem-solving and critical thinking", 
    availabilty: 'Evenings (Mon/Wed/Fri), Weekends (Sat/Sun)', rating: '4.8/5', 
    bio: "Hi, I'm Henry Arsene, and I'm passionate about helping students to excel in mathematics. With a strong background in the subject and years of tutoring experience, I strive to make learning enjoyable and rewarding for my students. whether you need help with algebra, geometry, or calculus, I'm heare to guide you every step of the way. Let's work together to achieve your academic goals!"
    },
]
export const messages=[
    {icon: <Course1/>, name: 'Adepoju Ademola', message: 'Hello, Mr John  i am yet to get your class b res...', time: '10:25 am'},
    {icon: <Course2/>, name: 'Badiru Pomile', message: 'Please schedule your class test.', time: '12:35 pm'},
    {icon: <Course3/>, name: 'Emmanuel John', message: 'Plrase resend last session statistic', time: '04:30 pm'},
]

export const attendance=[
    {course: 'Mathematics', mark: 25},
    {course: 'Science', mark: 30},
    {course: 'English', mark: 20},
    {course: 'French', mark: 45},
]

export const progress=[
    {course: 'Math test', date: 'Monday, 23 April', time: '3:30 PM - 6:00 PM', upcoming: 'Upcoming'},
    {course: 'English monthly test', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', pass: 'Pass'},
    {course: 'Science monthly testt', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', pass: 'Pass'},
    {course: 'French monthly test', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', pass: 'Pass'},
    {course: 'Math monthly test', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', fail: 'Fail'},
    {course: 'English monthly test', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', pass: 'Pass'},
    {course: 'ICT monthly test', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', pass: 'Pass'},
    {course: 'Math test', date: 'Monday, 23 April', time: '3:30 PM - 6:00 PM', upcoming: 'Upcoming'},
    {course: 'English monthly test', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', pass: 'Pass'},
    {course: 'Science monthly testt', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', pass: 'Pass'},
    {course: 'French monthly test', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', pass: 'Pass'},
    {course: 'Math monthly test', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', fail: 'Fail'},
    {course: 'English monthly test', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', pass: 'Pass'},
    {course: 'ICT monthly test', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', pass: 'Pass'},
    {course: 'Math test', date: 'Monday, 23 April', time: '3:30 PM - 6:00 PM', upcoming: 'Upcoming'},
    {course: 'English monthly test', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', pass: 'Pass'},
    {course: 'Science monthly testt', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', pass: 'Pass'},
    {course: 'French monthly test', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', pass: 'Pass'},
    {course: 'Math monthly test', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', fail: 'Fail'},
    {course: 'English monthly test', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', pass: 'Pass'},
    {course: 'ICT monthly test', date: 'Monday, 23 April', mark: '90/100', attempted: '98/100', correct: '90', wrong: '8', time: '3:30 PM - 6:00 PM', pass: 'Pass'},
    
]

export const notification=[
    {icon: <Not1/>, message: 'Ms. Sandra went an assignment', time: '45 mins ago'},
    {icon: <Not2/>, message: 'A new assignment has been posted for your science class. You are required to research and submit a paper on "Climate Change and Its Effects" by the due date.' , time: '45 mins ago'},
    {icon: <Not3/>, message: 'A new assignment has been posted for your science class. You are required to research and submit a paper on "Climate Change and Its Effects" by the due date.', time: '45 mins ago'},
    {icon: <Not4/>, message: 'A new assignment has been posted for your science class. You are required to research and submit a paper on "Climate Change and Its Effects" by the due date.', time: '45 mins ago'},
    {icon: <Not5/>, message: 'A new assignment has been posted for your science class. You are required to research and submit a paper on "Climate Change and Its Effects" by the due date.', time: '45 mins ago'},
    {icon: <Not6/>, message: 'A new assignment has been posted for your science class. You are required to research and submit a paper on "Climate Change and Its Effects" by the due date.', time: '45 mins ago'},
]

export const classes=[
    {subject: 'Computer Science', title: "Beginner's Spanish", tutor: 'Professor Emily Johnson', schedule: 'Mon/Wed, 9:00 AM'},
    {subject: 'Spanish Language', title: "Beginner's Spanish", tutor: 'Maria Rodrigues', schedule: 'Tue/Thu, 11:00 AM'},
    {subject: 'English Literature', title: "Beginner's Spanish", tutor: 'David Smith', schedule: 'Mon/Fri, 2:00 PM'},
    {subject: 'Biology', title: "Beginner's Spanish", tutor: 'Dr. Sarah Lee', schedule: 'Wed/Fri, 10:00 AM'},
    {subject: 'Mathematics', title: "Beginner's Spanish", tutor: 'John Brown', schedule: 'Tue/Thu, 1:00 PM'},
    {subject: 'Psychology', title: "Beginner's Spanish", tutor: 'Dr. Jessica Parker', schedule: 'Mon/Wed, 3:00 PM'},
    {subject: 'Marketing', title: "Beginner's Spanish", tutor: 'Sarah Evans', schedule: 'Tue/Thu, 2:00 PM'},
    {subject: 'Web Development', title: "Beginner's Spanish", tutor: 'Michael Thompson', schedule: 'Wed/Fri, 11:00 AM'},
    {subject: 'Art History', title: "Beginner's Spanish", tutor: 'Emily Davis', schedule: 'Tue/Thu, 10:00 AM'},
    {subject: 'Yoga', title: "Beginner's Spanish", tutor: 'Rachel Williams', schedule: 'Mon/Fri, 4:00 PM'}
]

export const schedule=[
    {subject: 'Spanish Language', title: "Beginner's Spanish", tutor: 'Maria Rodriguez', date: 'Tuesday 23, 2024',  time: '11:00AM'},
    {subject: 'Spanish Language', title: "Beginner's Spanish", tutor: 'Maria Rodriguez', date: 'Tuesday 23, 2024',  time: '11:00AM'},
    {subject: 'Spanish Language', title: "Beginner's Spanish", tutor: 'Maria Rodriguez', date: 'Tuesday 23, 2024',  time: '11:00AM'},
    {subject: 'Spanish Language', title: "Beginner's Spanish", tutor: 'Maria Rodriguez', date: 'Tuesday 23, 2024',  time: '11:00AM'},
    {subject: 'Spanish Language', title: "Beginner's Spanish", tutor: 'Maria Rodriguez', date: 'Tuesday 23, 2024',  time: '11:00AM'},
    {subject: 'Spanish Language', title: "Beginner's Spanish", tutor: 'Maria Rodriguez', date: 'Tuesday 23, 2024',  time: '11:00AM'},
    {subject: 'Spanish Language', title: "Beginner's Spanish", tutor: 'Maria Rodriguez', date: 'Tuesday 23, 2024',  time: '11:00AM'},
    {subject: 'Spanish Language', title: "Beginner's Spanish", tutor: 'Maria Rodriguez', date: 'Tuesday 23, 2024',  time: '11:00AM'},
    {subject: 'Spanish Language', title: "Beginner's Spanish", tutor: 'Maria Rodriguez', date: 'Tuesday 23, 2024',  time: '11:00AM'},
    {subject: 'Spanish Language', title: "Beginner's Spanish", tutor: 'Maria Rodriguez', date: 'Tuesday 23, 2024',  time: '11:00AM'},
]

export const settings=[
    {title: 'Account Settings', url: newRoutes.profileSettings()},
    {title: 'Login & Security', url: newRoutes.loginSettings()},
    {title: 'Profile Summary', url: newRoutes.summary()},
]

export const courses=['Mathematics', 'English Language Arts (ELA)', 'Science', 'Social Studies', 'History', 'Geography', 'Physical Education (PE)',
'Art', 'Music', 'Foreign Languages (e.g., Spanish, French)', 'Computer Science', 'Health Education', 'Civics', 'Economics', 'Literature', 'Environmental Studies',
'Technology Education', 'Religious Studies (depending on the curriculum)', 'Drama', 'Career and Technical Education (CTE)'
]