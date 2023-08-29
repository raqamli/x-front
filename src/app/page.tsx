'use client';

import theme, { calcRem } from '@/styles/theme';
import styled from 'styled-components';
import { Button } from './components/Button';
import { Title } from './components/Title';
import { SubText } from './components/SubText'

const Container = styled.div<{ $vertical?: boolean, $minWidth?: number, $minHeight?: number, $alignItems?: string }>`
  display: flex;
  flex-direction: ${props => props.$vertical ? "column" : "row"};
  justify-content: center;
  align-items: ${({ $alignItems }) => $alignItems ? $alignItems : "center"} ;
  min-width: ${({ $minWidth }) => $minWidth ? calcRem($minWidth) : "100vw"} ;
  min-height: ${({ $minHeight }) => $minHeight ? calcRem($minHeight) : "100vh"} ;
  border: red solid 1px;
`;

const SkeletonInner = styled.div`
  padding: 1rem /* 16px */;
  background-color: rgb(24 24 27 / 0.8);
  border-radius: 1rem /* 16px */;
`;

const SkeletonImg = styled.div`
  height: 3.5rem /* 56px */;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 1);
`;

const SkeletonBtn = styled.div`
  margin-top: 0.75rem /* 12px */;
  width: 25%;
  height: 0.75rem /* 12px */;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(255 0 128 / 1);
`;

const SkeletonLineOne = styled.div`
  margin-top: 0.75rem /* 12px */;
  height: 0.75rem /* 12px */;
  width: 91.666667%;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 1);
`;

const SkeletonLineTwo = styled.div`
  margin-top: 0.75rem /* 12px */;
  height: 0.75rem /* 12px */;
  width: 66.666667%;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 1);
`;

const Skeleton = () => (
  <SkeletonInner>
    <SkeletonImg />
    <SkeletonBtn />
    <SkeletonLineOne />
    <SkeletonLineTwo />
  </SkeletonInner>
);

export default function Page() {
  return (
    <Container $vertical>
      <Container
        $vertical
        $minHeight={300}
        $minWidth={300}
        $alignItems='left'
      >
        <Title text="Spaces" mutedText='X' />
        <SubText text="Markazning muvaffaqiyati kaliti 🔑" width={350} />
        <SubText text='👋 davomat muammosi bilan hayrlashing!' isMuted={true} fSize={18} />
        <Button title="Hududga kettik 🚀" />
      </Container>
    </Container>
  );
}