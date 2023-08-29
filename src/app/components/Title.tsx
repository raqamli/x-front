import styled from 'styled-components';
import { calcRem } from '@/styles/theme';

type TitlePropsType = {
    text: string;
    mutedText?: string;
}

const H1 = styled.h1`
  font-family: Paytone One;
  font-size: ${calcRem(50)};
  font-weight: 400;
  line-height: ${calcRem(70)};
  letter-spacing: 0em;
  text-align: left;
  color: #464646;
  font-family: 'Paytone One', sans-serif;
  width: 100%;
  border: red solid 1px;
`;

const Muted = styled.span`
  color: #9D9D9D;
`


export function Title({ text, mutedText}: TitlePropsType) {

    return (
        <H1 >
            {mutedText && <Muted>{mutedText}</Muted>}
            {text}
        </H1>
    )
}