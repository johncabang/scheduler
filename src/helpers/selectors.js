export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  // console.log(state.days);
  const results = [];
  const filteredDays = state.days.filter((d) => d.name === day);
  // console.log(filteredDays);
  if (filteredDays.length === 0) return results;
  for (const app of filteredDays[0].appointments) {
    // console.log(filteredDays[0].appointments);
    // console.log(app);
    results.push(state.appointments[app]);
  }
  return results;
}

export function getInterview(state, interview) {
  // return a new object containing the interview data when we pass it an object that contains the interviewer.
  if (interview) {
    console.log(state.interviewers[interview.interviewer]);
    const interviewer = state.interviewers[interview.interviewer];
    return { ...interview, interviewer };
  }
  // Otherwise, the function should return null.
  return null;
}
