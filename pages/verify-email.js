import emailverified from '../public/emailverified.svg';
import emailfailed from '../public/emailfailed.svg';
import Image from 'next/image';
import Link from 'next/link';

// @@@@ FUNCTIONS @@@@
import { verifyEmail } from './api/profile/signup/index';
// @@@@ FUNCTIONS @@@@

export const getServerSideProps = async (context) => {
  if (
    context.req.method === 'GET' &&
    context.query.email &&
    context.query.verification
  ) {
    const result = await verifyEmail(
      context.query.email,
      context.query.verification
    );
    return {
      props: {
        result,
      },
    };
  } else {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

const VerifyEmail = ({ result }) => {
  const successWrapper = (
    <div className='verify'>
      <div className='verify-img'>
        <Image
          src={emailverified}
          alt={`${process.env.NEXT_PUBLIC_URL} - e-mail verified`}
        ></Image>
      </div>
      <div className='verify-typography'>
        <h3>Success!</h3>
        <p>You have successfully verified your account. Now you can sign in.</p>
        <Link href='/giris'>
          <a>Giriş Yap</a>
        </Link>
      </div>
    </div>
  );
  const failedWrapper = (
    <div className='verify'>
      <div className='verify-img'>
        <Image
          src={emailfailed}
          alt={`${process.env.NEXT_PUBLIC_URL} - e-mail failed`}
        ></Image>
      </div>
      <div className='verify-typography'>
        <h3>Failed!</h3>
        <p>
          Oops! Something went wrong. Please try again or contact with site
          owners.
        </p>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
  return (
    <div className='verify-wrapper'>
      {result.success === true ? successWrapper : failedWrapper}
    </div>
  );
};

export default VerifyEmail;
