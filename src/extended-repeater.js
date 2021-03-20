const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
  repeatTimes, separator = "+",
  addition = "",
  additionRepeatTimes,
  additionSeparator = "|"
}) {
  str = String(str);
  addition = String(addition),
  additionSeparator = String(additionSeparator);
  // addition = String(addition);
  // if(typeof(repeatTimes) !== "number" && typeof(additionRepeatTimes) !== "number") {
  //    return str;
  // } else {}
  let arr = Array(repeatTimes).fill(str+(new Array(additionRepeatTimes).fill(addition).join(additionSeparator))).join(separator);
  return arr;
};
  