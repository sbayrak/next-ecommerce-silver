export const getServerSideProps = async (context) => {
  const URLquery = context.query;
  let verification;
  let email;
  let result;

  if (URLquery) {
    verification = URLquery.verification;
    email = URLquery.email;

    const verifyUser = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/profile/signup?email=${email}&verification=${verification}`,
      {
        method: 'GET',
      }
    );

    result = await verifyUser.json();
  }

  return {
    props: {
      result,
    },
  };
};

const VerifyEmail = ({ result }) => {
  console.log(result);
  return (
    <>
      {result.success === true ? (
        <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
          succuess !
        </div>
      ) : (
        <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
          fail !
        </div>
      )}
    </>
  );
};

export default VerifyEmail;
