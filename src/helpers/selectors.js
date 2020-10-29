export default function getAppointmentsForDay(state, day) {
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
