'use client';

import theme, { calcRem } from '@/styles/theme';
import styled from 'styled-components';
import { Button } from './components/Button';
import { Title } from './components/Title';
import { SubTitle } from './components/SubTitle'
import { Container } from './components/Container';

export default function Page() {
  return (
    <Container vertical>
      <Container
        vertical
        minHeight={300}
        minWidth={300}
        alignItems='left'
      >
        <Title text="Spaces" mutedText='X' />
        <SubTitle text="Markazning muvaffaqiyati kaliti 🔑" width={350} margin='0.6rem 0 1rem 0' />
        <SubTitle text='👋 davomat muammosi bilan hayrlashing!' isMuted={true} fSize={18} margin='1rem 0 1rem 0' />
        <Button title="Hududga kettik 🚀" />
      </Container>
    </Container>
  );
}