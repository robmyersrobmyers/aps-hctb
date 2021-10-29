// These regex's are current for APS as of October 2021

// Group 0 - Original Line
// Group 1 - Bus Number
// Group 2 - First Name
// Group 3 - Last Name
// Group 4 - DateTime
const regexRadius =
  /BUS (\d{1,4}) ENTERED (.{1,}) (.{1,})'S BUS STOP RADIUS ON (\d{1,2}\/\d{1,2}\/\d{4} \d{1,2}:\d{1,2}:\d{1,2} [AP]M) AND WILL/;

// Group 0 - Original Line
// Group 1 - Normal Bus Number
// Group 2 - Replacement Bus Number
const regexSubstitute =
  /BUS (\d{1,4}) HAS BEEN SUBSTITUTED WITH BUS (\d{1,4}) FOR THE [AP]M ROUTE/;

module.exports = {
  regexRadius: regexRadius,
  regexSubstitute: regexSubstitute,
};
