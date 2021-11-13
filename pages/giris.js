import { useState } from 'react';
import { useFormik } from 'formik';
import { loginSchema } from '../utils/validation';
import Link from 'next/link';

export default function Giris() {
	const [typePass, setTypePass] = useState(false);

	const { handleSubmit, values, touched, handleChange, handleBlur, errors } =
		useFormik({
			initialValues: {
				email: '',
				password: '',
			},
			validationSchema: loginSchema,
			onSubmit: (values) => {},
		});

	return (
		<div className='form-wrapper'>
			<form className='form' onSubmit={handleSubmit}>
				<h2 className='form-title'>Giriş</h2>
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
					<label htmlFor='password' className='form-label'>
						Şifre
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
				<Link href='/sifremiunuttum'>
					<a className='form-info'>Şifremi Unuttum?</a>
				</Link>
				<div className='form-field'>
					<button className='form-btn'>Giriş Yap</button>
				</div>
				<div className='form-text'>
					Üye değil misin?{' '}
					<Link href='/kayit'>
						<a className='form-text-link'>Kayıt Ol</a>
					</Link>
				</div>
			</form>
		</div>
	);
}
