import { css } from 'styled-components';

/* 
  Below styles are not final.
  You can customize them as the design system of the project.
 */

const calcRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
  small: calcRem(14),
  base: calcRem(18),
  lg: calcRem(22),
  xl: calcRem(26),
  xxl: calcRem(30),
  xxxl: calcRem(34),
  titleSize: calcRem(50),

  mainTitle: '100px',
  subMainTitle: '60px',
  title: '34px',
  strongTitle: '38px',
  button: '30px',
  body: '16px',
  smaller: '12px',
  strongBody: '20px'
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18)
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18)
};

const colors = {
  black: '#252525',
  white: '#F8F8F8',
  yellow: '#f1c868'
};

const putCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const theme = {
  fontSizes,
  colors,
  paddings,
  margins,
  putCenter
};

export default theme;
