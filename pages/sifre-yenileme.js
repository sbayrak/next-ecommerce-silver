import { useState } from 'react';
import { useFormik } from 'formik';
import { resetPasswordSchema } from '../utils/validation';
import { useRouter } from 'next/router';
import Spinner from '../components/reuseable/Spinner';
import { getSession } from 'next-auth/client';

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  if (context.query.email && context.query.verification) {
    let email = context.query.email;
    let verification = context.query.verification;
    return {
      props: {
        email,
        verification,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

const ResetPassword = ({ email, verification }) => {
  const [typePass, setTypePass] = useState(false);
  const [typePassConfirm, setTypePassConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
    onSubmit: async (values) => {
      setLoading(true);
      const submitNewPassword = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/profile/password-reset?email=${email}&verification=${verification}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password: values.password }),
        }
      );

      const result = await submitNewPassword.json();
      setLoading(false);
      console.log(result);
      if (result.success === true) {
        // @@ TODO : DISPLAY TOAST
        router.push(`${process.env.NEXT_PUBLIC_URL}/giris`);
      }
    },
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
          <button className='form-btn'>
            {loading ? <Spinner></Spinner> : 'Kaydet'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
