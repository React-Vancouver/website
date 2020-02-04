export * from './event';
export * from './speaker';
export * from './sponsor';
export * from './talk';

function validateSchema(data, schema, options) {
    let _data = data ? data : {};
    const validatedData = Object.entries(schema).reduce(
        (acc, [field, normalize]) => {
            acc[field] = normalize.validate(_data[field])
                ? normalize.transform
                    ? normalize.transform(_data[field])
                    : _data[field]
                : normalize.placeholder;
            return acc;
        },
        {}
    );
    if (options && options.length > 0) {
        options.forEach(({ field, schema, data = {}, options }) => {
            validatedData[field] = validateSchema(data, schema, options);
        });
    }
    return {
        ..._data,
        ...validatedData,
    };
}

export default validateSchema;
