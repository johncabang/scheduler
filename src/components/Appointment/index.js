import React from "react";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import useVisualMode from "../../hooks/useVisualMode";

import "components/Appointment/styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />
      {/* transition() function - from useVisualMode HOOK = CREATE mode */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {/* back() function - from useVisualMode HOOK = to return to the EMPTY state when cancel button is clicked */}
      {/* Form interviewers set to empty array / getInterviewersForDay selector */}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={() => back()} />
      )}
    </article>
  );
}
