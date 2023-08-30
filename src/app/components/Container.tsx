import { calcRem } from '@/styles/theme';
import styled from 'styled-components';

const Div = styled.div<{ $vertical?: boolean, $minWidth?: number, $minHeight?: number, $alignItems?: string }>`
  display: flex;
  flex-direction: ${props => props.$vertical ? "column" : "row"};
  justify-content: center;
  align-items: ${({ $alignItems }) => $alignItems ? $alignItems : "center"} ;
  min-width: ${({ $minWidth }) => $minWidth ? calcRem($minWidth) : "100vw"} ;
  min-height: ${({ $minHeight }) => $minHeight ? calcRem($minHeight) : "100vh"} ;
  border: red solid 1px;
`;

type ContainerPropsType = {
    children: React.ReactNode;
    vertical?: boolean;
    minWidth?: number;
    minHeight?: number;
    alignItems?: string;
};

export function Container({
    children,
    vertical,
    minWidth,
    minHeight,
    alignItems }: ContainerPropsType) {
    return (
        <Div
            $vertical={vertical}
            $minWidth={minWidth}
            $minHeight={minHeight}
            $alignItems={alignItems}
        >
            {children}
        </Div>);
}