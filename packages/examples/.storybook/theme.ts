import { create } from '@storybook/theming';
import logo from "@lucas-labs/plots-assets/logo-with-text.svg";
import pkg from "@lucas-labs/plots/package.json";

export default create({
    base: 'light',
    brandTitle: `plots > lucas-labs storybook addon pack`,
    brandImage: logo,
    brandUrl: pkg.homepage,
    colorSecondary: "#0f09ef",
    barSelectedColor: "#0f09ef",
});
