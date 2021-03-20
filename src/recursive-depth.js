const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  len = 1;
  calculateDepth(arr) {
   if((arr.some(item => Array.isArray(item)) === false)) {
        let result = this.len;
        this.len = 1;
        return result;
   } else {
      this.len = this.len + 1;
       return this.calculateDepth(arr.flat());
   }
  }
};