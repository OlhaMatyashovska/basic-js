const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    members=members
    .filter(name => typeof(name) === 'string')
    .map(name =>name.trim().toUpperCase().slice(0,1)).sort();
    return members.join("");
  } else {
     return false;
  }
};
