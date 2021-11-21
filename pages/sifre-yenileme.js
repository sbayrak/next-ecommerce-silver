import { useState } from 'react';
import { useFormik } from 'formik';
import { resetPasswordSchema } from '../utils/validation';

const ResetPassword = () => {
  const [typePass, setTypePass] = useState(false);
  const [typePassConfirm, setTypePassConfirm] = useState(false);

  const {
    handleSubmit,
    values,
    touched,
    handleChange,
    handleBlur,
    errors,
  } = useFormik({
    initialValues: {
      password: '',
      passwordConfirm: '',
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {},
  });

  return (
    <div className='form-wrapper'>
      <form className='form' onSubmit={handleSubmit}>
        <h2 className='form-title'>Şifre Yenileme</h2>
        <div className='form-field'>
          <label htmlFor='password' className='form-label'>
            Yeni Şifre
          </label>
          <div className='position-relative'>
            <input
              type={typePass ? 'text' : 'password'}
              name='password'
              id='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className='form-input'
              style={{
                borderColor: `${
                  errors.password && touched.password ? '#f55951' : ''
                }`,
              }}
            />
            <small
              className='show-password'
              onClick={() => setTypePass(!typePass)}
            >
              {typePass ? (
                <i className='fas fa-eye-slash' />
              ) : (
                <i className='fas fa-eye' />
              )}
            </small>
          </div>
        </div>
        {errors.password && touched.password && (
          <div className='form-alert'>{errors.password}</div>
        )}
        <div className='form-field'>
          <label htmlFor='passwordConfirm' className='form-label'>
            Yeni Şifre Tekrar
          </label>
          <div className='position-relative'>
            <input
              type={typePassConfirm ? 'text' : 'password'}
              name='passwordConfirm'
              id='passwordConfirm'
              value={values.passwordConfirm}
              onChange={handleChange}
              onBlur={handleBlur}
              className='form-input'
              style={{
                borderColor: `${
                  errors.passwordConfirm && touched.passwordConfirm
                    ? '#f55951'
                    : ''
                }`,
              }}
            />
            <small
              className='show-password'
              onClick={() => setTypePassConfirm(!typePassConfirm)}
            >
              {typePassConfirm ? (
                <i className='fas fa-eye-slash' />
              ) : (
                <i className='fas fa-eye' />
              )}
            </small>
          </div>
        </div>
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className='form-alert'>{errors.passwordConfirm}</div>
        )}
        <div className='form-field'>
          <button className='form-btn'>Kaydet</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
