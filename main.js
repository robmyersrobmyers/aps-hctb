// Dependencies
const {
  computeStats,
  createInPersonDayObj,
  getStatsText,
  readMbox,
  storeResultsInFile,
} = require("./lib/libs");

// Configuration Items
const {
  filterFirstName,
  filterLastName,
  amScheduledArrivalTime,
  pmScheduledArrivalTime,
} = require("./config/rider.json");
const { regexRadius, regexSubstitute } = require("./config/regex");
const { inPersonSchoolDayList } = require("./config/calendar");

// Create calendar object from list
let inPersonDayObj = createInPersonDayObj(inPersonSchoolDayList);

// Function to Process Notifications
async function processNotifications(args) {
  let res = await readMbox(args);
  console.log(`Results stored in ${storeResultsInFile(res)}`);
  console.log(getStatsText(computeStats(res)));
}

// Pass arguments from config files in ./config to processNotifications
// If mboxFilePath is not specified, then process.stdin is used
const args = {
  filterFirstName: filterFirstName,
  filterLastName: filterLastName,
  amScheduledArrivalTime: amScheduledArrivalTime,
  pmScheduledArrivalTime: pmScheduledArrivalTime,
  regexRadius: regexRadius,
  regexSubstitute: regexSubstitute,
  inPersonDayObj: inPersonDayObj,
  //  mboxFilePath: "../path/to/notifications.mbox"
};

// Do the processing
processNotifications(args);
