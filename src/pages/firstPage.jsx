import { useFormik } from "formik"
import Joi from "joi";
import { InputComponent } from "../components/inputComponents";
import { styles } from "./styles";
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createClient } from "../services/clientsServices";
import { validates } from "../utils/validation";
export default function FirstPage() {
    const validationSchema  = Joi.object({
        id: Joi.string().min(1).max(30).required().messages({
            "string.base": "id debe ser de tipo texto",
            "string.empty": "id no puede estar vacio",
            "string.min": "id debe tener al menos 3 caracteres",
            "string.max": "id debe tener menos de 30 caracteres",
            "any.required": "id es un campo requerido"
        }),
        name: Joi.string().min(1).max(30).required().messages({
            "string.base": "name debe ser de tipo texto",
            "string.empty": "name no puede estar vacio",
            "string.min": "name debe tener al menos 3 caracteres",
            "string.max": "name debe tener menos de 30 caracteres",
            "any.required": "name es un campo requerido"
        }),
        email: Joi.string().min(1).max(50).messages({
            "string.base": "email debe ser de tipo texto",
            "string.empty": "email no puede estar vacio",
            "string.email": "email debe ser un email valido",
            "string.min": "email debe tener al menos 3 caracteres",
            "string.max": "email debe tener menos de 30 caracteres"
        }),
        phone: Joi.string().min(1).max(30).messages({
            "string.base": "phone debe ser de tipo texto",
            "string.empty": "phone no puede estar vacio",
            "string.min": "phone debe tener al menos 3 caracteres",
            "string.max": "phone debe tener menos de 30 caracteres"
        }),
        address: Joi.string().min(1).max(30).messages({
            "string.base": "address debe ser de tipo texto",
            "string.empty": "address no puede estar vacio",
            "string.min": "address debe tener al menos 3 caracteres",
            "string.max": "address debe tener menos de 30 caracteres"
        }),
        balance: Joi.number().messages({
            "number.base": "balance debe ser de tipo numero",
            "number.empty": "balance no puede estar vacio",
        }),

    });

    const validate = (values) => {
        return validates(values, validationSchema);
    };
    // Tanstack Query
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: createClient,
        onSuccess: (data) => {
            // Invalidar el cache actual y refrescarlo
            //queryClient.invalidateQueries('locations');
            queryClient.setQueryData(['clients'], (oldData) => [...oldData, data]);
        },
    });

    const formik = useFormik({
        initialValues: {
            id: "",
            name: "",
            email: "",
            phone: "",
            address: "",
            balance: ""
        },
        validate,
        onSubmit: (values, helpers) => {
            try {
                console.log("enviando datos", values);
                // Tanstack Query
                mutation.mutate(values);

            } catch (error) {
                console.log(formik.errors);
             console.log(error);
            } finally {
                helpers.resetForm();
            }
        },
    });

    return (
        <div className="bg-blue-500 text-black p-4">
        <h2 className="text-2xl font-bold text-center mb-6">Registro</h2>
        <form onSubmit={formik.handleSubmit} className="s">
            <InputComponent
                id="id"
                name="id"
                label="Cedula"
                type="text"
                formik={formik}
                styles={styles}
            />
            <InputComponent
                id="name"
                name="name"
                label="Nombre"
                type="text"
                formik={formik}
                styles={styles}
            />
            <InputComponent
                id="email"
                name="email"
                label="Correo Electronico"
                type="text"
                formik={formik}
                styles={styles}
            />
            <InputComponent
                id="phone"
                name="phone"
                label="Telefono"
                type="text"
                formik={formik}
                styles={styles}
            />
            <InputComponent
                id="address"
                name="address"
                label="Dirección"
                type="text"
                formik={formik}
                styles={styles}
            />
            <InputComponent
                id="balance"
                name="balance"
                label="Balance"
                type="text"
                formik={formik}
                styles={styles}
            />
            <div className="text-center">
                <button type="submit">ENVIAR</button>
            </div>
        </form>
        </div>
    )
}