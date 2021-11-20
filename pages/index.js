import Carousel from '../components/reuseable/Carousel';
import Slogan from '../components/Slogan';
import Featured from '../components/Featured';
import { getSession } from 'next-auth/client';

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};

const Home = ({ session }) => {
  console.log(session);
  return (
    <>
      <Carousel />
      <Slogan />
      <Featured />
    </>
  );
};

export default Home;
