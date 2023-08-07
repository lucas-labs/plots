import type { StorybookConfig } from "@storybook/react-vite";

const config = {
    stories: ["../**/*.stories.@(js|jsx|ts|tsx|mdx)"],
    staticDirs: ["../../assets"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
} satisfies StorybookConfig;

export default config;
