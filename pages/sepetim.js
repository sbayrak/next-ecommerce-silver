import Link from 'next/link';
import Image from 'next/image';
import CartImage from '../public/shopping-cart.png';

const Cart = () => {
	return (
		<div className='cart-wrapper'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-8'>
						<div className='cart-items'>
							<div className='cart-items-block'>
								<div className='block-1'>Ürün</div>
								<div className='block-2'>Miktar</div>
								<div className='block-3'>Ara Toplam</div>
							</div>
							<div className='cart-item'>
								<div className='cart-item-product'>
									<img
										src='https://sky-static.mavi.com/sys-master/maviTrImages/h50/hea/9459568934942/168752-620_image_1.jpg_Default-ZoomProductImage'
										alt=''
										className='cart-product-img'
									/>
									<div className='cart-product-content'>
										<h5 className='cart-product-title'>Adidas Erkek Tişört</h5>
										<button className='remove-btn'>
											<i className='fas fa-trash' />
										</button>
									</div>
								</div>
								<div className='cart-item-quantity'>
									<button className='minus-btn'>
										<i className='fas fa-minus' />
									</button>
									<span className='quantity-text'>200</span>
									<button className='plus-btn'>
										<i className='fas fa-plus' />
									</button>
								</div>
								<div className='cart-item-subtotal'>350&nbsp;₺</div>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='cart-checkout'>
							<h3 className='cart-checkout-title'>Sipariş Özeti</h3>

							<div className='cart-checkout-content'>
								<span>Ürün Toplamı</span>
								<span>250&nbsp;₺</span>
							</div>
							<div className='cart-checkout-content'>
								<span>Kargo</span>
								<span>75&nbsp;₺</span>
							</div>

							<hr />
							<div className='cart-checkout-total-price'>
								<span>Toplam</span>
								<span>325&nbsp;₺</span>
							</div>

							<Link href='/'>
								<a className='cart-confirm-link'>Sepeti Onayla</a>
							</Link>
						</div>
					</div>
				</div>
				{/* <div className='no-cart'>
					<Image src={CartImage} alt='' />
					<h2 className='no-cart-title'>Sepetinde ürün bulunmamaktadır.</h2>
					<Link href='/'>
						<a className='no-cart-link'>Alışverişe Başla</a>
					</Link>
				</div> */}
			</div>
		</div>
	);
};

export default Cart;
