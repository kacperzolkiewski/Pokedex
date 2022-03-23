import { createGlobalStyle, css } from "styled-components"

interface Props {
  theme: string;
}

export const GlobalStyles = createGlobalStyle(
  (props: Props) => css`
    :root {
      --color-dark: hsl(0, 0%, 10%);
      --color-light: hsl(0, 0%, 95%);
      --color-yellow: #FDF500;
    }

    * { 
      margin: 0;
      padding: 0;
      font-family: 'Orbitron', sans-serif;
    }

    .app {
      background-color: ${props.theme === "light" ? "var(--color-light)" : "var(--color-dark)"};
      color: ${props.theme === "light" ? "var(--color-dark)" : "var(--color-light)"};
    }

    button {
        background-color: ${props.theme === "light" ? "var(--color-dark)" : "var(--color-yellow)"};
        color: ${props.theme === "light" ? "var(--color-yellow)" : "var(--color-dark)"};
    }

    ::-webkit-scrollbar-track {
        background-color: ${props.theme === "light" ? "var(--color-light)" : "var(--color-dark)"};
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props.theme === "light" ? "var(--color-dark)" : "var(--color-yellow)"};
    }
  `,
)