import Link from 'next/link';

const Featured = () => {
	return (
		<div className='featured-wrapper'>
			<div className='container'>
				<div className='featured'>
					<div className='featured-card'>
						<img src='./compressed.jpg' alt='' className='featured-card-img' />
						<span className='featured-card-text'>
							<Link href='/'>
								<a className='featured-card-link'>Erkek</a>
							</Link>
						</span>
					</div>
					<div className='featured-card'>
						<img
							src='https://ww2.toptansiparis.co/19286-1-large_default/Kad%C4%B1n-giyim-seksi-transparan-tulum-bodysuit-uzun-kollu-stre%C3%A7-leotard-%C3%BCst-kad%C4%B1n-giyim.jpg'
							alt=''
							className='featured-card-img'
						/>
						<span className='featured-card-text'>
							<Link href='/'>
								<a className='featured-card-link'>Kadın</a>
							</Link>
						</span>
					</div>
					<div className='featured-card'>
						<img
							src='https://www.modapiyasa.com/wp-content/uploads/2018/07/butik_urun_137522903809994270.jpg'
							alt=''
							className='featured-card-img'
						/>
						<span className='featured-card-text'>
							<Link href='/'>
								<a className='featured-card-link'>Ayakkabı/Çanta</a>
							</Link>
						</span>
					</div>
					<div className='featured-card'>
						<img
							src='https://rengalux.com/blog/wp-content/uploads/2019/03/gelinlik-yakasina-uygun-aksesuar.jpg'
							alt=''
							className='featured-card-img'
						/>
						<span className='featured-card-text'>
							<Link href='/'>
								<a className='featured-card-link'>Aksesuar</a>
							</Link>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
