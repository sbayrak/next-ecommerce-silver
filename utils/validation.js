import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
	email: Yup.string().email('Geçersiz email').required('email boş bırakılamaz'),
	password: Yup.string()
		.min(6, 'şifre en az 6 karakter olmalı')
		.required('şifre boş bırakılamaz'),
});

export const registerSchema = Yup.object().shape({
	email: Yup.string().email('Geçersiz email').required('email boş bırakılamaz'),
	password: Yup.string()
		.min(6, 'şifre en az 6 karakter olmalı')
		.required('şifre boş bırakılamaz'),
	passwordConfirm: Yup.string()
		.oneOf([Yup.ref('password')], 'şifreler eşleşmiyor')
		.required('şifre tekrar boş bırakılamaz'),
});

export const forgotPasswordSchema = Yup.object().shape({
	email: Yup.string().email('Geçersiz email').required('email boş bırakılamaz'),
	password: Yup.string()
		.min(6, 'şifre en az 6 karakter olmalı')
		.required('şifre boş bırakılamaz'),
});

export const resetPasswordSchema = Yup.object().shape({
	password: Yup.string()
		.min(6, 'şifre en az 6 karakter olmalı')
		.required('şifre boş bırakılamaz'),
	passwordConfirm: Yup.string()
		.oneOf([Yup.ref('password')], 'şifreler eşleşmiyor')
		.required('şifre tekrar boş bırakılamaz'),
});
