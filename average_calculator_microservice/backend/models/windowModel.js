class Window {
    constructor(size) {
      this.size = size;
      this.numbers = [];
    }
  
    addNumbers(newNumbers) {
      newNumbers.forEach((num) => {
        if (!this.numbers.includes(num)) {
          this.numbers.push(num);
          if (this.numbers.length > this.size) {
            this.numbers.shift();
          }
        }
      });
    }
  
    calculateAverage() {
      if (this.numbers.length === 0) return 0;
      return (
        this.numbers.reduce((sum, num) => sum + num, 0) / this.numbers.length
      ).toFixed(2);
    }
  }
  
  module.exports = Window;
  