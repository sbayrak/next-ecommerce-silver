import { useFormik } from 'formik';
import { forgotPasswordSchema } from '../utils/validation';
import Link from 'next/link';

export default function Sifremiunuttum() {
	const { handleSubmit, values, touched, handleChange, handleBlur, errors } =
		useFormik({
			initialValues: {
				email: '',
			},
			validationSchema: forgotPasswordSchema,
			onSubmit: (values) => {},
		});

	return (
		<div className='form-wrapper'>
			<form className='form'>
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
					<button className='form-btn'>Şifremi Yenile</button>
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
