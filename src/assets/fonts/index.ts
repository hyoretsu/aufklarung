import { createGlobalStyle } from 'styled-components';

import ISegoeUI from './SegoeUI-Italic400.woff2';
import SegoeUI from './SegoeUI400.woff2';
import SegoeUISemibold from './SegoeUI600.woff2';
import SegoeUIBold from './SegoeUI700.woff2';

export default createGlobalStyle`
 @font-face {
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 400;
  src: local('Segoe UI'), url(${SegoeUI}) format('woff2');
 };
 @font-face {
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 600;
  src: local('Segoe UI Semibold'), url(${SegoeUISemibold}) format('woff2');
 };
 @font-face {
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 700;
  src: local('Segoe UI Bold'), url(${SegoeUIBold}) format('woff2');
 };
 @font-face {
  font-family: 'Segoe UI';
  font-style: italic;
  font-weight: 400;
  src: local('Segoe UI Italic'), url(${ISegoeUI}) format('woff2');
 }
`;
