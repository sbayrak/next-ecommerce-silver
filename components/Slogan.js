const Slogan = () => {
	return (
		<div className='slogan-wrapper'>
			<div className='container'>
				<div className='slogan'>
					<div className='slogan-card'>
						<span className='slogan-card-icon-container'>
							<i className='fas fa-reply' />
						</span>
						<div className='slogan-card-text'>
							<h4 className='slogan-card-title'>Kolay Değişim</h4>
							<p className='slogan-card-content'>14 gün içinde değişim hakkı</p>
						</div>
					</div>
					<div className='slogan-card'>
						<span className='slogan-card-icon-container'>
							<i className='fas fa-shield-alt' />
						</span>
						<div className='slogan-card-text'>
							<h4 className='slogan-card-title'>Güvenli Alışveriş</h4>
							<p className='slogan-card-content'>
								256 bit SSL güvenlik setifikası
							</p>
						</div>
					</div>
					<div className='slogan-card'>
						<span className='slogan-card-icon-container'>
							<i className='fas fa-shipping-fast' />
						</span>
						<div className='slogan-card-text'>
							<h4 className='slogan-card-title'>Hızlı Kargo</h4>
							<p className='slogan-card-content'>
								1-3 iş günü içerisinde teslim
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slogan;
