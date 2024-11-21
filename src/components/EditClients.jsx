import { useFormik } from 'formik';
import { validates } from '../utils/validation';
import Joi from 'joi';
import { InputComponent } from './InputComponents';
import { styles2 } from '../pages/styles';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const EditClients = ({
    refer,
    row,
    editClients
}) => {

    const validationSchema  = Joi.object({
        name: Joi.string().min(1).max(30).required().messages({
            "string.base": "Nombre debe ser de tipo texto",
            "string.empty": "Nombre no puede estar vacio",
            "string.min": "Nombre debe tener al menos 3 caracteres",
            "string.max": "Nombre debe tener menos de 30 caracteres",
            "any.required": "Nombre es un campo requerido"
        }),
        email: Joi.string().min(1).max(50).messages({
            "string.base": "Email debe ser de tipo texto",
            "string.empty": "Email no puede estar vacio",
            "string.email": "Email debe ser un email valido",
            "string.min": "Email debe tener al menos 3 caracteres",
            "string.max": "Email debe tener menos de 30 caracteres"
        }),
        balance: Joi.number().messages({
            "number.base": "Balance debe ser de tipo numero",
            "number.empty": "Balance no puede estar vacio",
        }),

    });
    const validate = (values) => {
        return validates(values, validationSchema);
    };
    
    const formik = useFormik({
        initialValues: {
            name:  "",
            email:  "",
            balance:  "",
        },
        validate,
        onSubmit: values => {
            try {
                // Tanstack Query
                editClients.mutate({ ...row, ...values});
            } catch (error) {
                
             console.log(error);
            }
        },
    });

    useEffect(() => {
        formik.setValues({
            name: row.name,
            email: row.email,
            balance: row.balance
        });
    }, []);

    return (
        <form onSubmit={formik.handleSubmit}>
            <InputComponent
                id="name"
                name="name"
                label="Nombre"
                type="text"
                formik={formik}
                styles={styles2}
            />
            <InputComponent
                id="email"
                name="email"
                label="Correo Electronico"
                type="text"
                formik={formik}
                styles={styles2}
            />
            <InputComponent
                id="balance"
                name="balance"
                label="Balance"
                type="text"
                formik={formik}
                styles={styles2}
            />
            <button type="submit" ref={refer} />
        </form>         
    )
}
EditClients.propTypes = {
    refer: PropTypes.object,
    row: PropTypes.object,
    editClients: PropTypes.object
}