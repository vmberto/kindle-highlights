import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
     body {
       box-sizing: border-box;
       margin: 0;
       padding: 0;
       font-family: 'Source Sans Pro', sans-serif;
       background: #E9F3FE;
     }
`;

export const Container = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
//@media screen and (max-width: 991px) {
//  padding-right: 30px;
//  padding-left: 30px;
//}
`;

export default GlobalStyles;
