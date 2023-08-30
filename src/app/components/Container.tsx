import { calcRem } from '@/styles/theme';
import styled from 'styled-components';



type ContainerPropsType = {
    children: React.ReactNode;
    vertical?: boolean;
    minWidth?: number;
    minHeight?: number;
    alignItems?: string;
    justifyContent?: string;
};

const Div = styled.div<{ $vertical?: boolean, $minWidth?: number, $minHeight?: number, $alignItems?: string, $justifyContent?: string }>`
  display: flex;
  position: relative;
  flex-direction: ${props => props.$vertical ? "column" : "row"};
  justify-content: ${({ $justifyContent }) => $justifyContent ? $justifyContent : "center"};
  align-items: ${({ $alignItems }) => $alignItems ? $alignItems : "center"} ;
  min-width: ${({ $minWidth }) => $minWidth ? calcRem($minWidth) : "100vw"};
  min-height: ${({ $minHeight }) => $minHeight ? calcRem($minHeight) : "100vh"};
  max-height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export function Container({
    children,
    vertical,
    minWidth,
    minHeight,
    alignItems,
    justifyContent,
}: ContainerPropsType) {
    return (
        <Div
            $vertical={vertical}
            $minWidth={minWidth}
            $minHeight={minHeight}
            $alignItems={alignItems}
            $justifyContent={justifyContent}
        >
            {children}
        </Div>);
}