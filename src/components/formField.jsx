export default function FormField({ label, id, name, type = 'text', formik }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="black text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        {...formik.getFieldProps(name)}
        className="border p-2 w-full"
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-500">{formik.errors[name]}</div>
      )}
    </div>
  );
}
