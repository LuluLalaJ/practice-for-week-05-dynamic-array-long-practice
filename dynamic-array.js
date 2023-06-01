class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.capacity = defaultSize
    this.length = 0
    this.data = new Array(defaultSize)
  }

  read(index) {

    // Your code here
    if (index >= this.length || index < 0) {
      return undefined
    }
    return this.data[index]
  }

  push(val) {

    // Your code here
    if (this.length === this.capacity) {
      // this.capacity *= 2
      // newData = new Array(this.capacity)
      // newData[this.length] = val
      // this.data = newData
      this.resize()
    }
    this.data[this.length] = val
    this.length += 1
    return this.length
  }


  pop() {
    // Your code here
    if (this.length === 0) {
      return undefined
    }

    let val = this.data[this.length - 1]
    this.data[this.length - 1] = undefined
    this.length -= 1
    return val
  }

  shift() {
    // Your code here

    if (this.length === 0) {
      return undefined
    }

    let val = this.data[0]
    for (let i = 0; i < this.length-1; i++) {
      this.data[i] = this.data[i+1]
    }

    this.length -=1
    return val
  }

  unshift(val) {

    // Your code here
    if (this.length === this.capacity) {
      // this.capacity *= 2
      // const newData = new Array(this.capacity)
      // for (let i = this.length; i > 0; i--) {
      //   newData[i] = this.data[i-1]
        this.resize()
      }
      // this.data = newData
    // } else {
    //   for (let i = this.length; i > 0; i--) {
    //   this.data[i] = this.data[i-1]
    // }
    // }
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i-1]
    }
    this.data[0] = val
    this.length += 1
    return this.length
  }

  indexOf(val) {

    // Your code here
    for (let i = 0; i < this.length; i++ ) {
      if (this.data[i] === val) {
        return i
      }
    }
    return -1
  }

  resize() {

    // Your code here
    this.capacity *= 2
    const newData = new Array(this.capacity)
    for (let i = 0; i < this.length; i ++) {
      newData[i] = this.data[i]
    }
    this.data = newData
  }

}


module.exports = DynamicArray;
