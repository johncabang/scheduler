import React, { useState, useEffect } from "react";
import axios from "axios";

import DayList from "components/DayList";
import Appointment from "components/Appointment";

import "components/Application.scss";

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    },
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Cohen",
      interviewer: {
        id: 2,
        name: "Tori Malcolm",
        avatar: "https://i.imgur.com/Nmx0Qxo.png",
      },
    },
  },
  {
    id: 5,
    time: "4pm",
    interview: {
      student: "Maria Boucher",
      interviewer: {
        id: 3,
        name: "Mildred Nazir",
        avatar: "https://i.imgur.com/T2WwVfS.png",
      },
    },
  },
  {
    id: 6,
    time: "5pm",
  },
];

export default function Application(props) {
  // const [day, setDay] = useState("Monday");
  // const [days, setDays] = useState([]);
  // default state = "Monday"
  // day = current value for the state
  // setDay = function that allows you to update current state

  const [state, setState] = useState({
    day: "Monday",
    days: [],
  });
  const setDay = (day) => setState({ ...state, day });
  // const setDays = (days) => setState({ ...state, days });
  // ^ referring to 'state' in effect method. remove dependency, pass function to setState
  const setDays = (days) => setState((prev) => ({ ...prev, days }));

  useEffect(() => {
    axios.get("/api/days").then((response) => {
      setDays(response.data);
    });
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
            // setDay={(setDay) => console.log(setDay)}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />{" "}
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
        {appointments.map((appointment) => {
          return <Appointment key={appointment.id} {...appointment} />;
        })}
        {/* ... spread props instead of one by one = <Appointment key={appointment.id} id={appointment.id} time={appointment.time} interview={appointment.interview} /> */}
      </section>
    </main>
  );
}
