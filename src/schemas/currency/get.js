const get = async (request,response)=>{
    try {
        const currencies = await pgClient.query("SELECT * FROM CURRENCIES;");
        response.status(200).send({
            success:true,
            count:currencies.rowCount,
            values:currencies.rows
        });
    } catch (err) {
        return response.status(500).send({
            success: false,
            error: err.toString(),
        });
    }
}

module.exports = get;