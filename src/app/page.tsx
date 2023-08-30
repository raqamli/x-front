'use client';

import { Button } from './components/Button';
import { Title } from './components/Title';
import { SubTitle } from './components/SubTitle';
import { Container } from './components/Container';
import Image from 'next/image';

import guyOnRokcet from '../../public/images/guy_on_rocket.png';
import { BackgroundShape } from './components/BackgroundShape';

export default function Page() {
  return (
    <Container vertical>
      <BackgroundShape
        width={698}
        height={698}
        fromColor="rgba(18, 0, 89, 0.03) 0%"
        toColor="rgba(143, 255, 0, 0.00) 100%"
        left={-89}
        top={-12}
        rotationDegree={45}
        gradientDegree={235}
        borderRadius={'50%'}
      />
      <BackgroundShape
        width={270}
        height={270}
        fromColor="rgba(18, 0, 89, 0.03) 0%"
        toColor="rgba(143, 255, 0, 0.00) 100%"
        left="50vw"
        top="calc(100vh - 135px)"
        gradientDegree={135}
        rotationDegree={45}
      />
      <Container>
        <Container vertical minHeight={300} minWidth={300} alignItems="left">
          <Title text="Spaces" mutedText="X" margin="1rem 0 0 0" />
          <SubTitle
            text="Markazning muvaffaqiyati kaliti 🔑"
            width={350}
            margin="0 0 2.2rem 0"
          />
          <SubTitle
            text="👋 davomat muammosi bilan hayrlashing!"
            isMuted={true}
            fSize={18}
            margin="0 0 1rem 0"
          />
          <Button title="Hududga kettik 🚀" />
        </Container>
        <Image
          style={{ margin: '0 0 0 1rem' }}
          src={guyOnRokcet}
          alt="A guy on a rocket"
          title="Boost your bussines as a rocket!"
          width={435}
          height={435}
          quality={100}
        />
      </Container>
    </Container>
  );
}
