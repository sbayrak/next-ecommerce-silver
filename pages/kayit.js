import { useState } from 'react';
import { useFormik } from 'formik';
import { registerSchema } from '../utils/validation';
import Link from 'next/link';

export default function Kayit() {
	const [typePass, setTypePass] = useState(false);
	const [typePassConfirm, setTypePassConfirm] = useState(false);

	const { handleSubmit, values, touched, handleChange, handleBlur, errors } =
		useFormik({
			initialValues: {
				email: '',
				password: '',
				passwordConfirm: '',
			},
			validationSchema: registerSchema,
			onSubmit: (values) => {},
		});

	return (
		<div className='form-wrapper'>
			<form className='form' onSubmit={handleSubmit}>
				<h2 className='form-title'>Kayıt</h2>
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
				<div className='form-field'>
					<label htmlFor='passwordConfirm' className='form-label'>
						Şifre Tekrar
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
					<button className='form-btn'>Kayıt Ol</button>
				</div>
				<div className='form-text'>
					Üye misin?{' '}
					<Link href='/giris'>
						<a className='form-text-link'>Giriş Yap</a>
					</Link>
				</div>
			</form>
		</div>
	);
}
