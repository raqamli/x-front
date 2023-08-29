import styled from 'styled-components';
import theme, { calcRem } from '@/styles/theme';

type ButtonPropsType = {
    title: string;
    padding: string;
}

const Btn = styled.button < { $padding?: string }>`
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
  cursor: pointer;
  padding: ${({ $padding }) => $padding}
`;


export function Button({ title = "Default title", padding }: ButtonPropsType) {
    return (
        <Btn $padding={padding}>
            {title}
        </Btn>
    )
}