export const validates = (values, validationSchema) => {
    const { error } = validationSchema.validate(values, { abortEarly: false });
    if (!error) return {};
    
    const errors = {};
    error.details.forEach((error) => {
        errors[error.path[0]] = error.message;
    });

    return errors;
};