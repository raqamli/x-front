import styled from 'styled-components';
import { calcRem } from '@/styles/theme';

type SubText = {
    text: string;
    isMuted?: boolean;
    width?: number;
    fSize?: number
}

const P = styled.p<{ $isMuted?: boolean, $width?: number, $fSize?: number }>`
  font-family: Days One;
  font-size: ${({ $fSize }) => $fSize ? calcRem($fSize) : calcRem(22)};
  font-weight: 400;
  line-height: ${calcRem(33)};
  letter-spacing: 0em;
  text-align: left;
  color: ${({ $isMuted }) => $isMuted ? "#0000004D" : "#1E1E1E"};
  mix-blend-mode: hard-light;
  width: ${({ $width }) => $width ? calcRem($width) : "100%"};
}
`;


export function SubText({ text, isMuted, width, fSize }: SubText) {
    return (
        <P $isMuted={isMuted} $width={width} $fSize={fSize} >
            {text}
        </P>
    )
}