// module.exports = {
//     stories: [
//         "../stories/**/*.stories.mdx",
//         "../stories/**/*.stories.{js,jsx,ts,tsx}",
//     ],

//     features: {
//         babelModeV7: true,
//     },
//     core: {
//         disableTelemetry: true,
//     },
// };

import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
    core: { builder: 'webpack5' },
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.{js,jsx,ts,tsx}',
    ],
    addons: [
        // "@lucas-labs/plots",
        "@storybook/addon-docs",
        "@storybook/addon-storysource",
    ],
    webpackFinal: async (config) => {
        return config;
    },
};

module.exports = config;

