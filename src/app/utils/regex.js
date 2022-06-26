const regex = {
  cpf: /(\d{3})(\d{3})(\d{3})(\d{2})$/,
  cnpj: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
  cep: /^\d{5}-\d{3}$/
};
module.exports = regex;
