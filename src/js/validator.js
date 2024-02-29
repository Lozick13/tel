export class Validator {
  validateTel(tel) {
    const countryCode = /^\+.+/.test(tel)
      ? tel.match(/^\+\d{1,2}/)[0]
      : /^8.+/.test(tel)
      ? "+7"
      : null;
    const otherNumbers = tel.split(/^[+?\d]{1,3}|\(|\)|-|\s/).join("");

    if (countryCode !== null && /^\d{10}$/.test(otherNumbers)) {
      return countryCode + otherNumbers;
    } else {
      return "error";
    }
  }
}
