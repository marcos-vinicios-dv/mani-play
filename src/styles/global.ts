import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  :root {
    --pink: #EF6CE2;
    
    --white: #FFFFFF;
    
    --gray-50: #F8F9FC;
    --gray-100: #F3F5F8;
    --gray-200: #E5E5E5;
    --gray-400: #B3B4B5;
    --gray-500: #A3A3A3;
    --gray-700: #494849;
  }
  
  body {
    background-color: #F3F5F8;
  }
  
  #root {
    display: flex;
  }
  
  body,
  input,
  textarea,
  select,
  button {
    font: 500 1rem 'Montserrat', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins';
  }
  
  button {
    cursor: pointer;
    background: none;
    border: none;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  
  @media (max-width: 900px) {
    #root {
      flex-direction: column;
    }
  }
  `;
