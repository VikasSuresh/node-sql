const getById = async (request,response)=>{
    try {
        const currency = await pgClient.query(`SELECT * FROM CURRENCIES WHERE ID = ${request.params.currencyId};`);
        console.log(currency)
        response.status(200).send({
            success:true,
            value:currency.rows
        });
    } catch (err) {
        return response.status(500).send({
            success: false,
            error: err.toString(),
        });
    }
}

module.exports = getById;