import style from './style.module.css';
import { Dashboard } from '.';
import { combinedClasses } from '../../utilities/format';
import { routes } from '../../utilities/routes';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import { eachDayOfInterval, endOfMonth, format, getDay, startOfWeek, getMonth, isSameDay, startOfMinute, startOfMonth } from 'date-fns';
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
// import { schedule } from './data';
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import parse from 'date-fns/parse'
// import enUS from 'date-fns/locale/en-US'
// import Badge from '@mui/material/Badge';
// If you are using date-fns v2.x, please import `AdapterDateFns`
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
// If you are using date-fns v3.x, please import the v3 adapter
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';


export const Reschedule = () => {
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
    // console.log(startOfMonth(new Date()))

    return (
        <Dashboard>
            <section className={style.main}>
                <h3>Classes Schedules | Reschedule</h3>
                <div className={style.reschedule}>
                    <p>Classes to reschedule</p>
                    {/* <MyCalendar /> */}
                    <button>Save</button>
                </div>
                {feedback &&
                    <div className={combinedClasses(style.referFeedback, style.upcomingAlert)}>
                        <h5>Reschedule Class</h5>
                        <p>You can reshedule up to 3 sessions at once.
                            To Proceed,
                            Simply select the date(s) in the calendar.</p>
                        <div className={style.buttons}>
                            <button onClick={cancel} className={style.button1}>Cancel</button>
                            <button className={style.button2}>
                                <Link to={routes.reschedule()}>Proceed</Link></button>
                        </div>
                    </div>
                }
            </section>
        </Dashboard>
    )
}

export const MyCalendar = () => {
    const [value, setValue] = React.useState(new Date());
    return (
        // <div>hello</div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker orientation="landscape" />
        </LocalizationProvider>
    )
}

// function getRandomNumber(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
//   }

//   /**
//    * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
//    * ⚠️ No IE11 support
//    */
//   function fakeFetch(date, { signal }) {
//     return new Promise((resolve, reject) => {
//       const timeout = setTimeout(() => {
//         const daysInMonth = date.daysInMonth();
//         const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));

//         resolve({ daysToHighlight });
//       }, 500);

//       signal.onabort = () => {
//         clearTimeout(timeout);
//         reject(new DOMException('aborted', 'AbortError'));
//       };
//     });
//   }

//   const initialValue = dayjs('2022-04-17');

//   function ServerDay(props) {
//     const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

//     const isSelected =
//       !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

//     return (
//       <Badge
//         key={props.day.toString()}
//         overlap="circular"
//         badgeContent={isSelected ? '🌚' : undefined}
//       >
//         <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
//       </Badge>
//     );
//   }

//   export default function DateCalendarServerRequest() {
//     const requestAbortController = React.useRef(null);
//     const [isLoading, setIsLoading] = React.useState(false);
//     const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

//     const fetchHighlightedDays = (date) => {
//       const controller = new AbortController();
//       fakeFetch(date, {
//         signal: controller.signal,
//       })
//         .then(({ daysToHighlight }) => {
//           setHighlightedDays(daysToHighlight);
//           setIsLoading(false);
//         })
//         .catch((error) => {
//           // ignore the error if it's caused by `controller.abort`
//           if (error.name !== 'AbortError') {
//             throw error;
//           }
//         });

//       requestAbortController.current = controller;
//     };

//     React.useEffect(() => {
//       fetchHighlightedDays(initialValue);
//       // abort request on unmount
//       return () => requestAbortController.current?.abort();
//     }, []);

//     const handleMonthChange = (date) => {
//       if (requestAbortController.current) {
//         // make sure that you are aborting useless requests
//         // because it is possible to switch between months pretty quickly
//         requestAbortController.current.abort();
//       }

//       setIsLoading(true);
//       setHighlightedDays([]);
//       fetchHighlightedDays(date);
//     };

//     return (
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DateCalendar
//           defaultValue={initialValue}
//           loading={isLoading}
//           onMonthChange={handleMonthChange}
//           renderLoading={() => <DayCalendarSkeleton />}
//           slots={{
//             day: ServerDay,
//           }}
//           slotProps={{
//             day: {
//               highlightedDays,
//             },
//           }}
//         />
//       </LocalizationProvider>
//     );
//   }

// const locales = {
//     'en-US': enUS,
//   }

//   const localizer = dateFnsLocalizer({
//     format,
//     parse,
//     startOfWeek,
//     getDay,
//     locales,
//   })

//   const MyCalendar = (props) => (
//     <div>
//       <Calendar
//         localizer={localizer}
//         events={schedule}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//       />
//     </div>
//   )

// export const DatePicker = () => {
//     const currentDate = new Date();
//     const weekDays = ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT']
//     const firstDayOfMonth = startOfMinute(currentDate);
//     const lastDayOfMonth = endOfMonth(currentDate);
//     const daysInMonth = eachDayOfInterval({
//         start: firstDayOfMonth,
//         end: lastDayOfMonth
//     });

//     const startingDayIndex = getDay(firstDayOfMonth);

//     return (
//         <div className={style.calendarSection}>
//             <div className={style.calendarHead}>
//                 <MdOutlineKeyboardArrowLeft /> &nbsp;
//                 <h6>{format(currentDate, "MMMM yyyy")}</h6> &nbsp;
//                 <MdOutlineKeyboardArrowRight />
//             </div>
//             <div className={style.calendar}>
//                 <div>
//                     {/* <div> */}
//                     {weekDays.map((day) =>
//                         <div key={day}>{day}</div>
//                     )}
//                 </div>
//                 {/* </div> */}
//                 {/* {Array.from({ length: startingDayIndex }.map((_, index) => { }))} */}
//                 <div>
//                     {daysInMonth.map((day, index) =>
//                     <div key={index}>{format(day, "d")}
//                         {/* {schedule.filter((event) =>
//                         isSameDay(event.date, day)).map((event, id) =>
//                             <div key={id}>{event.title}</div>
//                         )} */}
//                     </div>

//                 )}
//                 </div>
//             </div>
//         </div>
//     )
// }


// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { PickersDay } from '@mui/x-date-pickers/PickersDay';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

// function getRandomNumber(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
// function fakeFetch(date, { signal }) {
//     return new Promise((resolve, reject) => {
//         const timeout = setTimeout(() => {

//             // const currentDate = new Date();
//             // const firstDayOfMonth = startOfMinute(currentDate);
//             // const lastDayOfMonth = endOfMonth(currentDate);
//             // const daysInMonth = eachDayOfInterval({
//             //     start: firstDayOfMonth,
//             //     end: lastDayOfMonth
//             // });
//             const daysInMonth = date.daysInMonth();
//             const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));

//             resolve({ daysToHighlight });
//         }, 500);

//         signal.onabort = () => {
//             clearTimeout(timeout);
//             reject(new DOMException('aborted', 'AbortError'));
//         };
//     });
// }

// // const initialValue = dayjs('2022-04-17');
// const initialValue = startOfMonth(new Date());

// function ServerDay(props) {
//     const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

//     const isSelected =
//         !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

//     return (
//         <Badge
//             key={props.day.toString()}
//             overlap="circular"
//             badgeContent={isSelected ? '🌚' : undefined}
//         >
//             <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
//         </Badge>
//     );
// }

// export default function MyCalendar() {
//     const requestAbortController = React.useRef(null);
//     const [isLoading, setIsLoading] = React.useState(false);
//     const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

//     const fetchHighlightedDays = (date) => {
//         const controller = new AbortController();
//         fakeFetch(date, {
//             signal: controller.signal,
//         })
//             .then(({ daysToHighlight }) => {
//                 setHighlightedDays(daysToHighlight);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 // ignore the error if it's caused by `controller.abort`
//                 if (error.name !== 'AbortError') {
//                     throw error;
//                 }
//             });

//         requestAbortController.current = controller;
//     };

//     React.useEffect(() => {
//         fetchHighlightedDays(initialValue);
//         // abort request on unmount
//         return () => requestAbortController.current?.abort();
//     }, []);

//     const handleMonthChange = (date) => {
//         if (requestAbortController.current) {
//             // make sure that you are aborting useless requests
//             // because it is possible to switch between months pretty quickly
//             requestAbortController.current.abort();
//         }

//         setIsLoading(true);
//         setHighlightedDays([]);
//         fetchHighlightedDays(date);
//     };

//     return (
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <DateCalendar
//                 defaultValue={initialValue}
//                 loading={isLoading}
//                 onMonthChange={handleMonthChange}
//                 renderLoading={() => <DayCalendarSkeleton />}
//                 slots={{
//                     day: ServerDay,
//                 }}
//                 slotProps={{
//                     day: {
//                         highlightedDays,
//                     },
//                 }}
//             />
//         </LocalizationProvider>
//     );
// }