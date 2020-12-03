const { Currency } = require('../../model/seq/');

const get = async (request, response) => {
    try {
        const { page, size } = request.query;

       await Currency.create({
            short_name: "trash"
        });

        const Currencies = await Currency.findAndCountAll({
            offset: page,
            limit: size,
        });

        return response.status(200).send({
            success: true,
            value: {
                page_info: {
                    page,
                    count: Currencies.rows.length,
                    total_count: Currencies.count,
                    total_pages: Math.ceil(Currencies.count / size),
                },
                values: Currencies.rows,
            },
        });
    } catch (error) {
        return response.status(500).send({
            success: false,
            error: error.toString(),
        });
    }
  
};

module.exports = get;
