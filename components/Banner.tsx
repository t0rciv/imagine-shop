import { Container } from '@/styles/utils';
import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';

interface BannerProps {
  image: StaticImageData;
  width: number;
  height: number;
}

export default function Banner({ image, width, height }: BannerProps) {
  return (
    <BannerContainer>
      <Image src={image} width={width} height={height} alt='imagem' />
    </BannerContainer>
  );
}

const BannerContainer = styled.section`
  ${Container}
  border-block: 3px solid ${({ theme }) => theme.colors.primary};
`;
