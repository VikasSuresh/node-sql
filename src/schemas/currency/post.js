const post = async (request,response)=>{
    try {
        const keys = Object.keys(request.body);
        const values = Object.values(request.body).map((el)=>{
            if (typeof el === 'string') return `'${el}'`;
            return el;
        })
        const currencies = await pgClient.query(`INSERT INTO CURRENCIES (${keys}) VALUES (${values}) RETURNING ID, NAME, SHORT_NAME;`);

        response.status(200).send({
            success: true,
            value: currencies.rows
        });
    } catch (err) {
        return response.status(500).send({
            success: false,
            error: err.toString(),
        });
    }
}

module.exports = post;