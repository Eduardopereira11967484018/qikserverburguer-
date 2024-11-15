'use client'

import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`

  * {
      scroll-behavior: smooth;
      box-sizing: border-box;

      ::-webkit-scrollbar {
        width: 2px;
      }

      ::-webkit-scrollbar-track {
        background: ${theme.color.bgPrimary};
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: ${theme.color.tertiary};
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${theme.color.tertiary};
      }
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Evitar rolagem horizontal */
    width: 100%; /* Garantir que o conteúdo ocupe 100% da largura */
    height: 100%; /* Garantir que o conteúdo ocupe 100% da altura */
  }

  body {
    background-color: ${theme.color.primaryLight};
    color: ${theme.secondaryDark};
    font-size: 16px;
    line-height: 18.75px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  /* Remover margens e padding para títulos e outros elementos */
  h1, h2, h3, h4, h5, h6, p, figure, ul {
    margin: 0;
    padding: 0;
    width: 100%; /* Garantir que todos os elementos ocupem a largura completa */
  }

  /* Ajustes para containers */
  .container {
    width: 100%; /* Ocupa toda a largura disponível */
    padding: 0; /* Sem padding */
    margin: 0; /* Sem margem */
  }

  /* Ajustes para listas */
  ul {
    padding-left: 0;
    list-style: none; /* Remover marcadores */
  }

  /* Ajustes para imagens */
  img {
    max-width: 100%; /* Garantir que as imagens se ajustem à largura */
    height: auto;
  }

  /* Focando no layout em dispositivos móveis */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
      line-height: 16px;
    }

    .container {
      padding: 0;
      margin: 0;
    }

    html, body {
      height: 100%;
      width: 100%;
    }

    /* Ajustes adicionais de layout para se comportar como um app */
    .app-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 12px;
      line-height: 14px;
    }

    .container {
      padding: 0;
      margin: 0;
    }

    html, body {
      height: 100%;
      width: 100%;
    }

    /* Garantir que o layout não exceda a tela */
    .app-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
    }
  }
`

export default GlobalStyle
