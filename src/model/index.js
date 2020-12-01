// const client = require('../app').Client;
let model = [require('./currency')]

module.exports = async (client) => {
    try {
        await Promise.all(model.map((model)=>{
            // client.query(`DROP TABLE IF EXISTS ${model.split('(')[0].trim()}`)
            client.query(`CREATE TABLE IF NOT EXISTS ${model}`)
        }))
    } catch (error) {
        throw new Error(error)
    }
   
}

