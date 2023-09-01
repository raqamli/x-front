import styled from 'styled-components';
import { calcRem } from '@/styles/theme';

type TitlePropsType = {
  text: string;
  mutedText?: string;
  margin?: string;
};

const H1 = styled.h1<{ $margin?: string }>`
  font-family: Paytone One;
  font-size: ${calcRem(50)};
  font-weight: 400;
  line-height: ${calcRem(70)};
  letter-spacing: 0em;
  text-align: left;
  color: #464646;
  font-family: 'Paytone One', sans-serif;
  width: 100%;
  margin: ${({ $margin }) => $margin};
`;

const Muted = styled.span`
  color: #9d9d9d;
`;

export function Title({ text, mutedText, margin }: TitlePropsType) {
  return (
    <H1 $margin={margin}>
      {mutedText && <Muted>{mutedText}</Muted>}
      {text}
    </H1>
  );
}
