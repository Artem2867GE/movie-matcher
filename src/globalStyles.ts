import { css } from "@emotion/react";

export const globalStyles = css`
  body {
    background-color: var(--main-bg);
    margin: 0;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    padding: 0%;
  }

  :root {
    /* Colors */
    --black: #000;
    --red: #f44637;
    --green: #a6eb03;
    --blue: #00adff;
    --main-bg: #fce78f;
    --container-bg: #fdf8ee;
  }
`;
