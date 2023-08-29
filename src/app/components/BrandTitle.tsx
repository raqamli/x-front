import styled from 'styled-components';
import { calcRem } from '@/styles/theme';

type TitlePropsType = {
    text: string;
}

const H1 = styled.h1`
  font-family: Paytone One;
  font-size: ${calcRem(50)};
  font-weight: 400;
  line-height: ${calcRem(70)};
  letter-spacing: 0em;
  text-align: left;
`;


export function Button({ text }: TitlePropsType) {
    return (
        <H1 >
            {text}
        </H1>
    )
}