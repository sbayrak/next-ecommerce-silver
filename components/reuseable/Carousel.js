import Image from 'next/image';
import Link from 'next/link';
import staticImg from '../../public/compressed.jpg';

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
          {/* <div href='#!' className='carousel-link'>
             
          </div> */}
          <Link href='#!'>
            <a className='carousel-link'>
              <div className='carousel-img-wrapper'>
                <Image
                  src={staticImg}
                  layout='fill'
                  objectFit='cover'
                  className='d-block w-100 carousel-img'
                  alt='asd'
                />
              </div>
            </a>
          </Link>
        </div>
        <div className='carousel-item carousel-item2' data-bs-interval='3000'>
          {/* <div href='#!' className='carousel-link'>
           
          </div> */}
          <Link href='#!'>
            <a className='carousel-link'>
              <div className='carousel-img-wrapper'>
                <Image
                  src={staticImg}
                  layout='fill'
                  objectFit='cover'
                  className='d-block w-100 carousel-img'
                  alt='asd'
                />
              </div>
            </a>
          </Link>
        </div>
        <div className='carousel-item carousel-item2' data-bs-interval='3000'>
          {/* <div href='#!' className='carousel-link'>
            
          </div> */}
          <Link href='#!'>
            <a className='carousel-link'>
              <div className='carousel-img-wrapper'>
                <Image
                  src={staticImg}
                  layout='fill'
                  objectFit='cover'
                  className='d-block w-100 carousel-img'
                  alt='asd'
                />
              </div>
            </a>
          </Link>
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
