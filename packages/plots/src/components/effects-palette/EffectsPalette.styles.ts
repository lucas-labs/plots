import { css } from "@storybook/theming";

export const effectsCollection = css`
    .effect-collection {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        grid-gap: 1.5rem 12rem;
    }

    .effect {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: .8rem;
    }

    .label {
        margin-left: 2rem;
    }

    .label h6 {
        margin: 0 0 .5rem 0;
    }

    .label div {
        font-weight: 500;
    }

    .sample {
        min-width: 4rem;
        min-height: 4rem;
        border-radius: 100%;
    }

    .palette h4 {
        margin-bottom: 2rem;
        margin-top: 2rem;
    }  
`;
