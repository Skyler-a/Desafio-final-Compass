/* eslint-disable array-callback-return */
/* eslint-disable no-multi-assign */
function formataCpf(person) {
  if (Array.isArray(person)) {
    const personFormatado = person.map((teste) => {
      const cpf = teste.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
      teste.cpf = cpf;
    });
    return personFormatado;
  }
  const cpf = person.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  const personFormatado = (person.cpf = cpf);
  return personFormatado;
}
module.exports = formataCpf;
