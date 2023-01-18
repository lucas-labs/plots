import { css } from "@storybook/theming";

export const $group = css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 2em;
    
    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    > div {
        margin: 0px !important;
    }
`;

export const $subtitle = css`
    display: block;
    margin-top: .5em;
    color: #999;
`;

// .typographies-container > .typography:not(:last-child), .type-group:not(:last-child) {
//     margin-bottom: 2rem;
// }

export const $typography = css`
    margin-bottom: 2rem;
`;