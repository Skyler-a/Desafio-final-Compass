const moment = require("moment");
const fleetRepository = require("../repository/fleetRepository");

async function calculateFinalValue(payload) {
  const data = [];
  const { id_car, id_rental, data_start, data_end } = payload;
  const queryCar = {
    id_rental,
    id_car,
  };
  const getCar = await fleetRepository.getFleet(queryCar);
  const getDailyValue = getCar.docs[0].daily_value;
  const getDates = await moment(data_end, "DD/MM/YYYY").diff(
    moment(data_start, "DD/MM/YYYY"),
    "days"
  );
  const calculateValues = getDailyValue * getDates;
  data.push({
    id_user: payload.id_user,
    id_car: payload.id_car,
    id_rental: payload.id_rental,
    data_start: payload.data_start,
    data_end: payload.data_end,
    final_value: calculateValues,
  });
  return data;
}
module.exports = calculateFinalValue;
