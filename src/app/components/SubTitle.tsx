import styled from 'styled-components';
import { calcRem } from '@/styles/theme';

type SubTitle = {
  text: string;
  isMuted?: boolean;
  width?: number;
  fSize?: number;
  margin?: string;
};

const P = styled.p<{
  $isMuted?: boolean;
  $width?: number;
  $fSize?: number;
  $margin?: string;
}>`
  font-family: Days One;
  font-size: ${({ $fSize }) => ($fSize ? calcRem($fSize) : calcRem(22))};
  font-weight: 400;
  line-height: ${calcRem(33)};
  letter-spacing: 0em;
  text-align: left;
  color: ${({ $isMuted }) => ($isMuted ? '#0000004D' : '#1E1E1E')};
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => ($width ? calcRem($width) : '100%')};
  mix-blend-mode: hard-light;
}`;

export function SubTitle({ text, isMuted, width, fSize, margin }: SubTitle) {
  return (
    <P $isMuted={isMuted} $width={width} $fSize={fSize} $margin={margin}>
      {text}
    </P>
  );
}
