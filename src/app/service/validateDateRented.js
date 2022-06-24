const moment = require("moment");

async function validateDateRented(data_start, data_end) {
  const dataStartValid = moment(data_start, "DD/MM/YYYY").isSameOrBefore(
    moment(data_end, "DD/MM/YYYY"),
    "days"
  );
  const dataEndValid = moment(data_end, "DD/MM/YYYY").isSameOrAfter(
    moment(data_start, "DD/MM/YYYY"),
    "days"
  );
  if (!dataStartValid) {
    console.log("ali");
  }
  if (!dataEndValid) {
    console.log("bão");
  }
}
module.exports = validateDateRented;
