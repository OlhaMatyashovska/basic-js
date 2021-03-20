const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chains:[],
  getLength() {
    this.chains.length;
  },
  addLink(value) {
    this.chains.push(value);
    return this;
   
  },
  removeLink(position) {
    if(this.chains[position -1] !== undefined) {
      this.chains.splice(position-1,1);
    } else {
      this.chains = [];
      throw new Error();
    }
    return this;
    
  },
  reverseChain() {
    this.chains = this.chains.reverse();
    return this;
  },
  finishChain() {
     this.chains = this.chains.map(chain => `( ${chain} )`);
     const result =  this.chains.join("~~");
     this.chains = [];
     return result;
  }
};

module.exports = chainMaker;
