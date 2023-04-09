import { create } from '@storybook/theming';
import { Asset } from "@lucas-labs/plots-assets";
import pkg from "@lucas-labs/plots/package.json";

export default create({
    base: 'light',
    brandTitle: `plots > lucas-labs storybook addon pack`,
    brandImage: Asset.LogoWithText.svg,
    brandUrl: pkg.homepage,
    colorSecondary: "#0f09ef",
    barSelectedColor: "#0f09ef",
});
