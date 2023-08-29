import styled from 'styled-components';
import theme, { calcRem } from '@/styles/theme';

type ButtonPropsType = {
    title: string;
    emoji: string;
}

const Btn = styled.button`
  width: ${calcRem(426)};
  height: ${calcRem(67)};
  background-color: #1E1E1E;
  border-radius: 1rem;
  border: none;
  outline: none;
  mix-blend-mode: hard-light;
  font-family: Montserrat;
  font-size: 2rem;
  font-weight: 700;
  line-height: ${calcRem(39)};
  letter-spacing: 0em;
`;


export function Button({ title = "Default title", emoji }: ButtonPropsType) {
    return (
        <Btn >
            {title} {emoji}
        </Btn>
    )
}