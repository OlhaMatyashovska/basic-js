const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    const parsed = parseFloat(sampleActivity);
    return sampleActivity === `${sampleActivity}` && !isNaN(parsed) && parsed > 0 && parsed <= 15 ? Math.floor(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD / 0.693) + 1 : false;
};
