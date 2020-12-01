const post = async (request,response)=>{
    try {
        await pgClient.query(`DELETE FROM CURRENCIES WHERE ID = ${request.params.currencyId}`);

        response.status(200).send({
            success:true
        });
    } catch (err) {
        return response.status(500).send({
            success: false,
            error: err.toString(),
        });
    }
}

module.exports = post;