import { useFormik } from 'formik';
import { forgotPasswordSchema } from '../utils/validation';
import Link from 'next/link';
import Spinner from '../components/reuseable/Spinner';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Sifremiunuttum() {
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
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const submitPasswordReset = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/profile/password-reset`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: values.email }),
        }
      );
      const result = await submitPasswordReset.json();

      if (result.success === true || resul.success === false) {
        setLoading(false);
        router.push(
          `${process.env.NEXT_PUBLIC_URL}/email-verification-sent?type=password-reset`
        );
      }

      // @@ TODO : IF RESULT IS false THEN DISPLAY SNACBAR
    },
  });

  return (
    <div className='form-wrapper'>
      <form className='form' onSubmit={handleSubmit}>
        <h2 className='form-title'>Şifre Yenileme</h2>
        <div className='form-field'>
          <label htmlFor='email' className='form-label'>
            E-mail
          </label>
          <input
            name='email'
            id='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className='form-input'
            style={{
              borderColor: `${errors.email && touched.email ? '#f55951' : ''}`,
            }}
          />
        </div>
        {errors.email && touched.email && (
          <div className='form-alert'>{errors.email}</div>
        )}
        <div className='form-field'>
          <button className='form-btn'>
            {loading ? <Spinner></Spinner> : 'Şifremi Yenile'}
          </button>
        </div>
        <div className='form-text'>
          <Link href='/giris'>
            <a className='form-reset-link'>Önceki Sayfaya Dön</a>
          </Link>
        </div>
      </form>
    </div>
  );
}
