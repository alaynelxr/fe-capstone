import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 640px) {
      ${props}
    }
  `;
};

// samsung 20 ultra width: 412 px, iPhone 12 Pro: 390px
