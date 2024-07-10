import React, { useContext, useState, createContext } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import "./App.css";
import { VerticallyCenter } from "../Popup";
import {
    Button, Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalCloseButton, ModalBody, ModalFooter
} from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react"
import {GlobalContext} from "../../App"


export const MyEventCalendar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventName, setEventName] = useState("");
    const [events, setEvents] = useState([]);
    const courseInfo = useContext(GlobalContext)
    // console.log(courseInfo)

    const Date_Click_Fun = (date) => {
        setSelectedDate(date);
    };

    const Event_Data_Update = (event) => {
        setEventName(event.target.value);
    };

    const Create_Event_Fun = () => {
        if (selectedDate && eventName) {
            const newEvent = {
                id: new Date().getTime(),
                date: selectedDate,
                title: eventName,
            };
            setEvents([...events, newEvent]);
            setSelectedDate(null);
            setEventName("");
            setSelectedDate(newEvent.date);
        }
    };

    const Update_Event_Fun = (eventId, newName) => {
        const updated_Events = events.map((event) => {
            if (event.id === eventId) {
                return {
                    ...event,
                    title: newName,
                };
            }
            return event;
        });
        setEvents(updated_Events);
    };

    const Delete_Event_Fun = (eventId) => {
        const updated_Events = events.filter((event) => event.id !== eventId);
        setEvents(updated_Events);
    };

    return (

        <div className="app">
            <div className="container">
                <div className="calendar-container">
                    <Calendar calendarType='gregory'
                        value={selectedDate}
                        onClickDay={Date_Click_Fun}
                        tileClassName={({ date }) =>
                            selectedDate &&
                                date.toDateString() === selectedDate.toDateString()
                                ? "selected"
                                : events.some(
                                    (event) =>
                                        event.date.toDateString() ===
                                        date.toDateString(),
                                )
                                    ? "event-marked"
                                    : ""
                        }
                    />{" "}
                </div>
                <div className="event-container">
                    {" "}
                    {selectedDate && (
                        <div className="event-form">
                            <h2> Create Event </h2>{" "}
                            <p>
                                {" "}
                                Selected Date: {selectedDate.toDateString()}{" "}
                            </p>{" "}
                            <input
                                type="text"
                                placeholder="Event Name"
                                value={eventName}
                                onChange={Event_Data_Update}
                            />{" "}
                            <button
                                className="create-btn"
                                onClick={Create_Event_Fun}
                            >
                                Click Here to Add Event{" "}
                            </button>{" "}
                        </div>
                    )}
                    {events.length > 0 && selectedDate && (
                        // <ChakraProvider>
                        //     <VerticallyCenter>
                        //         <Button onClick={onOpen}>Send Invitation</Button>
                        //         <Modal onClose={onClose} isOpen={isOpen} isCentered>
                        //             <ModalOverlay />
                        //             <ModalContent >
                        //                 <ModalHeader>Class Details</ModalHeader>
                        //                 <ModalCloseButton />
                        //                 <ModalBody>

                                            <div className="event-list">
                                                <h2> My Created Event List </h2>{" "}
                                                <div className="event-cards">
                                                    {" "}
                                                    {events.map((eventitem) =>
                                                        eventitem.date.toDateString() ===
                                                            selectedDate.toDateString() ? (
                                                            <div key={eventitem.id} className="event-card">
                                                                {/* <ul>
                                                                    <li>Class Title: {courseInfo[0].}</li>
                                                                    <li>Subject: {props.course}</li>
                                                                    <li>Tutor: {props.tutor}</li>
                                                                    <li>Date: {eventitem.date.toDateString()}</li>
                                                                    <li>Time: {props.time}</li>
                                                                </ul> */}
                                                                    <div className="event-card-header">
                                                                        <span className="event-date">
                                                                            {" "}
                                                                            {eventitem.date.toDateString()}{" "}
                                                                        </span>{" "}

                                                                    </div>{" "}
                                                                <div className="event-card-body">
                                                                    <p className="event-title">
                                                                        {" "}
                                                                        {eventitem.title}{" "}
                                                                    </p>{" "}
                                                                </div>{" "}
                                                                <div className="event-actions">
                                                                    <button className="update-btn" onClick={() =>
                                                                        Update_Event_Fun(
                                                                            eventitem.id,
                                                                            prompt("ENTER NEW TITLE",),
                                                                        )
                                                                    }
                                                                    >Update Event{" "}</button>{" "}
                                                                    <button className="delete-btn" onClick={() =>
                                                                        Delete_Event_Fun(
                                                                            eventitem.id,
                                                                        )
                                                                    }
                                                                    > Event{" "}</button>{" "}
                                                                </div>{" "}
                                                            </div>
                                                        ) : null,
                                                    )}{" "}
                                                </div>{" "}

                                            </div>
                        //                 </ModalBody>
                        //                 <ModalFooter>

                        //                 <Button onClick={onClose}>Cancel</Button>
                        //                 </ModalFooter>
                        //             </ModalContent>
                        //         </Modal>
                        //     </VerticallyCenter>
                        // </ChakraProvider>
                    )}{" "}
                </div>{" "}
            </div>{" "}
        </div>
    );
};