export const isNumber = (number) => {
    const regNumber = /^[0-9]+([.])?([0-9]{1,2})?$/
    return regNumber.test(number ?? '')
  }