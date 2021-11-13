import Image from 'next/image';

const Carousel = () => {
  return (
    <div
      id='carouselExampleControls'
      className='carousel slide  '
      data-bs-ride='carousel'
    >
      <div className='carousel-inner'>
        <div
          className='carousel-item active carousel-item2 '
          data-bs-interval='30000'
        >
          <a href='#!' className='carousel-link'>
            <Image
              src='/compressed.jpg'
              className='d-block w-100  '
              alt='asd'
              layout='fill'
            />
          </a>
        </div>
        <div className='carousel-item carousel-item2' data-bs-interval='3000'>
          <a href='#!' className='carousel-link'>
            <Image
              src='/compressed.jpg'
              className='d-block w-100   '
              alt='asd'
              layout='fill'
            />
          </a>
        </div>
        <div className='carousel-item carousel-item2' data-bs-interval='3000'>
          <a href='#!' className='carousel-link'>
            <Image
              src='/compressed.jpg'
              className='d-block w-100   '
              alt='asd'
              layout='fill'
            />
          </a>
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleControls'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleControls'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default Carousel;
