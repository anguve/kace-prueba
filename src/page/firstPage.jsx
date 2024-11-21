import { useFormik } from 'formik';
import Joi from 'joi';

export default function FirstPage() {
  const schema = Joi.object({
    campo1: Joi.string().max(9).required().messages({
      'string.empty': 'campo1 es requerido',
      'string.min': 'campo2 debe tener al menos 3 caracteres',
      'string.max': 'campo2 debe tener menos de 30 caracteres',
    }),
    campo2: Joi.string().min(5).max(9).required().messages({
      'string.empty': 'campo2 es requerido',
      'string.min': 'campo2 debe tener al menos 3 caracteres',
      'string.max': 'campo2 debe tener menos de 30 caracteres',
    }),
    campo3: Joi.string().min(5).max(9).required().messages({
      'string.empty': 'campo3 es requerido',
      'string.min': 'campo2 debe tener al menos 3 caracteres',
      'string.max': 'campo2 debe tener menos de 30 caracteres',
    }),
  });

  const validate = (values) => {
    const { error } = schema.validate(values, { abortEarly: false });
    if (!error) return {};
    const errors = {};
    error.details.forEach((detail) => {
      errors[detail.path[0]] = detail.message;
    });
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      campo1: '',
      campo2: '',
      campo3: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="bg-blue-500 text-black p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Registro</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="campo1" className="black text-gray-700 ">
            campo 1
          </label>
          <input
            id="campo1"
            name="campo1"
            type="text"
            {...formik.getFieldProps('campo1')}
          />

          {formik.errors.campo1 && formik.touched.campo1 ? (
            <div className="text-red-500">{formik.errors.campo1}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="campo2" className="black text-gray-700 ">
            campo 2
          </label>
          <input
            id="campo2"
            name="campo2"
            type="text"
            {...formik.getFieldProps('campo2')}
          />

          {formik.errors.campo2 && formik.touched.campo2 ? (
            <div className="text-red-500">{formik.errors.campo2}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="campo3" className="black text-gray-700 ">
            campo 3
          </label>
          <input
            id="campo3"
            name="campo3"
            type="text"
            {...formik.getFieldProps('campo3')}
          />
          {formik.errors.campo3 && formik.touched.campo3 ? (
            <div className="text-red-500">{formik.errors.campo3}</div>
          ) : null}
        </div>
        <div className="text-center">
          <button type="submit" className="w-full bg-red-500">
            enviar
          </button>
        </div>
      </form>
    </div>
  );
}
