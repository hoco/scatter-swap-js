"use strict";

export default class ScatterSwap  {
  constructor (originalInteger, spin = 0, digit = 10) {
    this.spin = spin;
    this.digit = digit;
    this.digitArray = [...Array(digit)].map(() => 0);

    let zeroPad = (this.digitArray.join("") + originalInteger.toString()).slice(-digit);
    this.workingArray = zeroPad.split("").map((d) => Number(d));
  }

  // obfuscates an integer up to 10 digits in length
  hash() {
    this.swap();
    this.scatter();
    return this.workingArray.join("");
  }

  // de-obfuscates an integer
  reverseHash() {
    this.unscatter();
    this.unswap();
    return this.workingArray.join("");
  }

  numbers(digit = 10) {
    var array = new Array(digit);
    for(var i = 0; i < digit; i++) {
      array[i] = i;
    }
    return array;
  }

  rotate(array, count) {
    let reverse = count < 0
    let rotateCount = Math.abs(count) % array.length;

    for(var i = 0; i < rotateCount; i++) {
      if(reverse) {
        array.unshift(array.pop());
      } else {
        array.push(array.shift());
      }
    }
    return array;
  }

  swapperMap(index) {
    var array = this.numbers();
    return this.numbers().map((i) => {
      return this.rotate(array, index + i ^ this.spin).pop();
    });
  }

  swap() {
    this.workingArray = this.workingArray.map((digit, index) => {
      return this.swapperMap(index)[digit];
    });
  }

  unswap() {
    this.workingArray = this.workingArray.map((digit, index) => {
      return this.swapperMap(index).lastIndexOf(digit);
    });
  };

  scatter() {
    let sumOfDigits = this.workingArray.reduce((pre, curr) => pre + curr);
    this.workingArray = this.digitArray.map(() => {
      return this.rotate(this.workingArray, this.spin ^ sumOfDigits).pop();
    });
  }

  unscatter() {
    var scatteredArray = this.workingArray;
    let sumOfDigits = scatteredArray.reduce((pre, curr) => pre + curr);
    this.workingArray = [];

    this.digitArray.forEach(() => {
      this.workingArray.push(scatteredArray.pop());
      this.workingArray = this.rotate(this.workingArray, (sumOfDigits ^ this.spin) * -1);
    });
  }
}
