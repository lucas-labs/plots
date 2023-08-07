import { css } from "@storybook/theming";

export const $spacing = css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;

    .label {
        margin: 0;
    }

    .measure-collection {
        margin-top: 2em;
    }

    h6 {
        margin: 0;
    }

    .measure {
        margin-top: 1em;
        display: flex;
    }

    .measure.radius {
        position: relative;
        height: 2em;
        overflow: hidden;
    }

    .measure.radius h6 {
        display: flex;
        align-items: center;
    }

    .measure.radius div.value {
        display: flex;
        align-items: center;
    }

    .measure h6 {
        min-width: 52px;
    }

    .sample {
        margin-right: 1em;
    }

    .spacing .sample {
        background-color: var(--spacing-main-color, #000);
        border-radius: 4px;
    }

    .radius .sample div {
        border-top: 3px solid var(--spacing-main-color, #000);
        border-left: 3px solid var(--spacing-main-color, #000);
        width: 6em;
        height: 6em;
    }

    .radius .sample {
        overflow: hidden;
    }
`;
