import Image from 'next/image';
import emailsent from '../public/emailsent.svg';
import { getSession } from 'next-auth/client';

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!context.query.email) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  } else if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

const EmailVerificationSent = () => {
  return (
    <div className='email-wrapper'>
      <div className='email'>
        <div className='email-img'>
          <Image
            src={emailsent}
            alt={`${process.env.NEXT_PUBLIC_URL} - e-mail sent`}
          ></Image>
        </div>
        <div className='email-typography'>
          <h3>Verify your account</h3>
          <p>
            Please check your e-mail to verify your account and start shopping!
          </p>
        </div>
      </div>{' '}
    </div>
  );
};

export default EmailVerificationSent;
