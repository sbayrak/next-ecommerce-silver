import Carousel from '../components/reuseable/Carousel';
import Slogan from '../components/Slogan';
import Featured from '../components/Featured';
import { useSession } from 'next-auth/client';

const Home = () => {
  const [session, loading] = useSession();
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
