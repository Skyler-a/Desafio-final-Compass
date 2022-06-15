const axios = require('axios')
const notFound = require('../utils/notFound')
async function getCep(payload) {
    const informations = []
    const { address } = payload
    const { data } = await axios(`https://viacep.com.br/ws/${address.cep}/json`)
    if (data.erro) {
        throw new notFound('CEP not found')
    }
    informations.push({
        cep: data.cep,
        street: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf,
        isFilial: address.isFilial,
        number: address.number
    })
    return { ...payload, address: informations }
}

module.exports = getCep;
