const put = async (request,response)=>{
    try {
        const values = Object.entries(request.body).map(([k,v])=> `${k}=${typeof v ==="string"?`'${v}'`:v}`);

        const currency = await pgClient.query(`UPDATE CURRENCIES SET ${values} WHERE ID = ${request.params.currencyId} RETURNING ID, NAME;`);

        response.status(200).send({
            success: true,
            value: currency.rows
        });
    } catch (err) {
        return response.status(500).send({
            success: false,
            error: err.toString(),
        });
    }
}

module.exports = put;