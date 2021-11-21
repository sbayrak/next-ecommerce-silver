import Image from 'next/image';
import emailsent from '../../public/emailsent.svg';
import emailfailed from '../../public/emailfailed.svg';

const EmailCheck = ({ title, description, img }) => {
  return (
    <div className='email-wrapper'>
      <div className='email'>
        <div className='email-img'>
          <Image
            src={img}
            alt={`${process.env.NEXT_PUBLIC_URL} - e-mail sent`}
          ></Image>
        </div>
        <div className='email-typography'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

EmailCheck.defaultProps = {
  img: emailsent,
};

export default EmailCheck;
