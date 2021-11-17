import { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';

const data = {
	product_name: 'Adidas Erkek Tişört',
	category: 'Erkek',
	sizes: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
	colors: ['green', 'red', 'blue', 'orange', 'black'],
	price: '380',
	photos: [
		'https://sky-static.mavi.com/sys-master/maviTrImages/h50/hea/9459568934942/168752-620_image_1.jpg_Default-ZoomProductImage',
		'https://www.hollyhood.com.tr/ohbro-acik-yesil-basic-oversize-tisort-hollyhood-butik-hollyhood-48989-38-B.jpg',
		'https://cdn.lufian.com/laon-spor-polo-t-shirt-siyah-polo-yaka-tisort-lufian-259091-29-B.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHmx7knc5FCRICE90Ut162j9mDCf8Bi18nJA&usqp=CAU',
	],
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
};

const ProductDetail = () => {
	const [active, setActive] = useState('');

	const [productColor, setProductColor] = useState('');

	useMemo(() => {
		setActive(data.photos[0]);
	}, []);

	return (
		<>
			<Head>
				<title>{data.product_name}</title>
			</Head>
			<div className='product-detail-page'>
				<div className='container'>
					<div className='product-detail'>
						<div className='product-detail-photos'>
							<div className='big-photo'>
								<img src={active} alt='' className='big-img' />
							</div>
							<div className='small-photos'>
								{data.photos?.map((photo, key) => (
									<div
										className={`small-photo ${
											active === photo ? 'active' : ''
										}`}
										key={key}
										onClick={() => setActive(photo)}
									>
										<img src={photo} alt='' className='small-img' />
									</div>
								))}
							</div>
						</div>
						<div className='product-detail-content'>
							<div className='product-content-category'>
								<h3 className='category-title'>Anasayfa / Kategori / Erkek</h3>
							</div>
							<div className='product-content-name'>
								<h1 className='product-name'>{data.product_name}</h1>
							</div>
							<div className='product-content-price'>
								<h3 className='price-text'>{data.price}&nbsp;₺</h3>
							</div>
							<div className='product-content-sizes'>
								<select name='' id='' className='sizes-select'>
									<option selected disabled>
										Beden Seçin
									</option>
									{data.sizes?.map((size, key) => (
										<option value={size} key={key}>
											{size}
										</option>
									))}
								</select>
							</div>
							<div className='product-content-colors'>
								{data.colors?.map((color, key) => (
									<label
										htmlFor={color}
										className={`color-select ${
											productColor === color ? 'active' : ''
										}`}
										key={key}
									>
										<input
											type='radio'
											id={color}
											name='color'
											value={color}
											className='d-none'
											onChange={(e) => setProductColor(e.target.value)}
										/>
										<div
											className='color'
											style={{ background: `${color}` }}
										></div>
									</label>
								))}
							</div>
							<div className='product-content-actions'>
								<input type='number' className='quantity-input' />

								<button className='actions-btn'>Sepete Ekle</button>
							</div>
							<div className='product-content-description'>
								<h4 className='description-title'>Açıklama</h4>
								<p className='description-text'>{data.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetail;
