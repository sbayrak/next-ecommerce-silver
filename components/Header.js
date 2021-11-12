import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
	const [authMenu, setAuthMenu] = useState(false);
	const [navbar, setNavbar] = useState(false);

	return (
		<header className='header'>
			<div className='header-top'>
				<i className='fas fa-truck' />
				100₺ ve üzeri alışverişe kargo bedava
			</div>
			<div className='navbar-wrapper'>
				<div className='container'>
					<div className='navbar'>
						<div className='logo'>
							<img
								src='https://www.kap.org.tr/SirketLogo/4028e4a14158e41e01415b41210a6e8c'
								alt=''
								className='logo-img'
							/>
						</div>
						<div
							className='menu'
							style={{ transform: `${navbar ? 'translateX(0)' : ''}` }}
						>
							<Link href='/'>
								<a className='menu-link' onClick={() => setNavbar(false)}>
									Erkek
								</a>
							</Link>
							<Link href='/'>
								<a className='menu-link'>Kadın</a>
							</Link>
							<Link href='/'>
								<a className='menu-link'>Çocuk</a>
							</Link>
							<Link href='/'>
								<a className='menu-link'>Ayakkabı/Çanta</a>
							</Link>
							<Link href='/'>
								<a className='menu-link'>Aksesuar</a>
							</Link>
						</div>
						<div className='navbar-right'>
							<div className='cart-container'>
								<Link href='/'>
									<a>
										<i className='fas fa-shopping-cart' />
										<span className='cart-counter'>0</span>
									</a>
								</Link>
							</div>
							<div
								className='auth-dropdown'
								onClick={() => setAuthMenu(!authMenu)}
							>
								<i className='fas fa-user' />
								<ul
									className='auth-dropdown-menu'
									style={{
										display: `${authMenu ? 'block' : ''}`,
									}}
								>
									<li className='auth-dropdown-list'>
										<Link href='/'>
											<a className='auth-dropdown-link'>Giriş Yap</a>
										</Link>
									</li>
									<li className='auth-dropdown-list'>
										<Link href='/'>
											<a className='auth-dropdown-link'>Kayıt Ol</a>
										</Link>
									</li>
								</ul>
							</div>
							<button className='bar-btn' onClick={() => setNavbar(!navbar)}>
								{navbar ? (
									<i className='fas fa-times' />
								) : (
									<i className='fas fa-bars' />
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
