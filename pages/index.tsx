import Banner from '@/components/Banner';
import styled from 'styled-components';
import BannerImage from '../public/images/banner.png';

export default function Home() {
  return (
    <Main>
      <Banner image={BannerImage} width={1140} height={325} />
    </Main>
  );
}

const Main = styled.main`
  min-height: 53vh;
`;
