/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
function validateCNPJ(cnpj) {
  if (cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, "");

    if (cnpj === "") return false;

    if (cnpj.length !== 14) return false;

    if (
      cnpj === "00000000000000" ||
      cnpj === "11111111111111" ||
      cnpj === "22222222222222" ||
      cnpj === "33333333333333" ||
      cnpj === "44444444444444" ||
      cnpj === "55555555555555" ||
      cnpj === "66666666666666" ||
      cnpj === "77777777777777" ||
      cnpj === "88888888888888" ||
      cnpj === "99999999999999"
    )
      return false;

    let lengh = cnpj.length - 2;
    let numbers = cnpj.substring(0, lengh);
    const digits = cnpj.substring(lengh);
    let sum = 0;
    let pos = lengh - 7;
    for (i = lengh; i >= 1; i--) {
      sum += numbers.charAt(lengh - i) * pos--;
      if (pos < 2) pos = 9;
    }
    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== digits.charAt(0)) return false;

    lengh += 1;
    numbers = cnpj.substring(0, lengh);
    sum = 0;
    pos = lengh - 7;
    for (i = lengh; i >= 1; i--) {
      sum += numbers.charAt(lengh - i) * pos--;
      if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== digits.charAt(1)) return false;

    return true;
  }
  return true;
}
module.exports = validateCNPJ;
