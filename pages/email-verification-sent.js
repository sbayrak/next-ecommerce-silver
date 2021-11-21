import Image from 'next/image';
import emailsent from '../public/emailsent.svg';
import { getSession } from 'next-auth/client';
import EmailCheck from '../components/reuseable/EmailCheck';

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const type = context.query.type;

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  } else if (type === 'password-reset') {
    return {
      props: {
        type,
      },
    };
  } else if (type === 'email-verification') {
    return {
      props: {
        type,
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

const EmailVerificationSent = ({ type }) => {
  return (
    <>
      {type === 'password-reset' ? (
        <EmailCheck
          title='Check your e-mail'
          description={`Please check your e-mail to reset your password and start shopping!`}
        ></EmailCheck>
      ) : (
        <EmailCheck
          title='Verify your account'
          description={`Please check your e-mail to verify your account and start shopping!`}
        ></EmailCheck>
      )}
    </>
  );
};

export default EmailVerificationSent;
