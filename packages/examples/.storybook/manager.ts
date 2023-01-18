import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

import theme from './theme';

addons.setConfig({
    theme,
    showRoots: true,
});
