import { css } from "@storybook/theming";

export const $swatchCollection = css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

export const $color = css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: .8rem;
`;

export const $label = css`
    margin-left: 2rem;
`;

export const $labelDiv = css`
    font-weight: 500;
`;

export const $sample = (color: string) => css`
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    border: 4px solid #f7f5f8;
    background-color: ${color};
`;

export const $paletteH4 = css`
    margin-bottom: 2rem;
    margin-top: 2rem;
`;

export const $swatchTitle = css`
    margin: 0;
`;