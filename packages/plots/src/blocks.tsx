/** @jsx jsx */
import { jsx } from "@storybook/theming";
import { FC } from "react";
import { ColorPalette as ColorPaletteInternal } from "./components/color-palette/ColorPalette";
import * as config from "./components/color-palette/config";

export * from "./components/color-palette/config";

export const ColorPalette: FC<
    Omit<config.ColorPaletteConfig, "type">
> = ({ ...props }) => (
    // <DocBlockBase placeholder={placeholder ?? "Color Palette"} {...props}>
        <ColorPaletteInternal config={{ type: "color-palette", ...props }} />
    // </DocBlockBase>
);
