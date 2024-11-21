
import PropTypes from 'prop-types';

export const InputComponent = ({
    id,
    name,
    label,
    type,
    formik,
    styles 
}) => {

    return (
        <div className={styles?.div}>
            <label htmlFor={id} className={styles?.label}>
                {label}
            </label>
            <input
            id={id}
            name={name}
            type={type}
            className={styles?.input}
            {...formik.getFieldProps(name)}
            />
            {(formik.errors[name] && formik.touched[name]) ?
                <div className={styles?.error}>{formik.errors[name]}</div> : null}
        </div>
    );
};

InputComponent.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired,
    styles: PropTypes.object
};