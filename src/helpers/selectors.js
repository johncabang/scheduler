export function getAppointmentsForDay(state, day) {
  const results = [];
  const filteredDays = state.days.filter((d) => d.name === day);
  if (filteredDays.length === 0) return results;
  for (const app of filteredDays[0].appointments) {
    results.push(state.appointments[app]);
  }
  return results;
}

export function getInterview(state, interview) {
  if (interview) {
    const interviewer = state.interviewers[interview.interviewer];
    return { ...interview, interviewer };
  }
  return null;
}

export function getInterviewersForDay(state, day) {
  const results = [];
  const filteredDays = state.days.filter((d) => d.name === day);
  if (filteredDays.length === 0) return results;
  for (const app of filteredDays[0].interviewers) {
    results.push(state.interviewers[app]);
  }
  return results;
}
