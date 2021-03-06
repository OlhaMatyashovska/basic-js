const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let disks = Math.pow(2,disksNumber) - 1;
  let seconds = Math.floor(disks/turnsSpeed * 3600);
  return {turns:disks,seconds};
};
