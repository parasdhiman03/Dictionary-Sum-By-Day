function solution(D) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const output = {};
  
  // Sort the input dictionary by key in ascending order
  const sortedKeys = Object.keys(D).sort();
  
  // Iterate over each date in the sorted dictionary
  for (let i = 0; i < sortedKeys.length; i++) {
    const date = new Date(sortedKeys[i]);
    const dayOfWeek = daysOfWeek[date.getUTCDay()];

    // If the current day is not in the output dictionary yet, add it with the value of the current date
    if (!output.hasOwnProperty(dayOfWeek)) {
      output[dayOfWeek] = D[sortedKeys[i]];
    } else {
      output[dayOfWeek] += D[sortedKeys[i]];
    }

    // If the current day is not a Sunday and not in the output dictionary yet, add it with the mean of the previous and next day's values
    if (dayOfWeek !== 'Sun' && !output.hasOwnProperty(daysOfWeek[date.getUTCDay() - 1])) {
      const prevDate = new Date(sortedKeys[i - 1]);
      const prevDayOfWeek = daysOfWeek[prevDate.getUTCDay()];

      const nextDate = new Date(sortedKeys[i + 1]);
      const nextDayOfWeek = daysOfWeek[nextDate.getUTCDay()];

      const mean = Math.round((D[sortedKeys[i - 1]] + D[sortedKeys[i + 1]]) / 2);
      output[prevDayOfWeek] = mean;
      output[nextDayOfWeek] = mean;
    }
  }

  return output;
}
