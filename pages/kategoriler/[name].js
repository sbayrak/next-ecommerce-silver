import Link from 'next/link';

const Products = () => {
	return (
		<div className='products-wrapper'>
			<div className='container'>
				<div className='product-page-header'>
					<h2 className='product-page-title'>1 adet ürün bulunmaktadır</h2>
					<div className='product-page-select'>
						<select name='' id='' className='filter-select'>
							<option value='' selected>
								En Yeni Ürünler
							</option>
							<option value=''>En Eski Ürünler</option>
							<option value=''>Fiyata Göre Artan</option>
							<option value=''>Fiyata Göre Azalan</option>
						</select>
					</div>
				</div>
				<div className='products'>
					<div className='product'>
						<Link href='/'>
							<a>
								<div className='product-photo'>
									<img
										className='product-img'
										src='https://static.nike.com/a/images/t_default/39ea0eb4-02ae-480e-964f-e047f870cc7e/air-max-95-ayakkab%C4%B1-XSZtG4.png'
										alt=''
									/>
								</div>
								<div className='product-content'>
									<h3 className='product-title'>Adidas Erkek Tişört</h3>
									<div className='product-prices'>
										<p className='product-price-old'>250&nbsp;₺</p>
										<p className='product-price'>250&nbsp;₺</p>
									</div>
								</div>
								<div className='product-footer'>
									<button className='product-btn'>Sepete Ekle</button>
								</div>
							</a>
						</Link>
					</div>
				</div>
				<div className='page-container'>
					<Link href='/'>
						<a className='page'>
							<i className='fas fa-chevron-left' />
						</a>
					</Link>
					<Link href='/'>
						<a className='page active'>1</a>
					</Link>
					<Link href='/'>
						<a className='page'>
							<i className='fas fa-chevron-right' />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Products;
