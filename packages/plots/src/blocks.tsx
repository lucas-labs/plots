/** @jsx jsx */
import { jsx } from "@storybook/theming";
import { FC } from "react";
import { ColorPalette as ColorPaletteInternal } from "./components/color-palette/ColorPalette";
import * as colorPaletteConfig from "./components/color-palette/config";
import {TypeSet as TypeSetInternal} from "./components/type-set/TypeSet";
import * as typeSetConfig from "./components/type-set/config";
import { SpacingSet as SpaceSetInternal } from "./components/spacing/SpacingSet";
import * as spacingConfig from "./components/spacing/config";
import { EffectsPalette as EffectsPaletteInternal } from "./components/effects-palette/EffectsPalette";
import * as effectsPaletteConfig from "./components/effects-palette/config";
export * from "./components/color-palette/config";
export * from "./components/type-set/config";
export * from "./components/spacing/config";


export const ColorPalette: FC<
    Omit<colorPaletteConfig.ColorPaletteConfig, "type">
> = ({ ...props }) => (
    <ColorPaletteInternal config={{ type: "color-palette", ...props }} />
);

export const TypeSet: FC<Omit<typeSetConfig.TypeSetConfig, "type">> = ({
    ...props
}) => (
    <TypeSetInternal config={{ type: "type-set", ...props }} />
);

export const SpacingSet: FC<Omit<spacingConfig.SpacingSetConfig, "type">> = ({
    ...props
}) => (
    <SpaceSetInternal config={{ type: "spacing-set", ...props }} />
);

export const EffectsPalette: FC<
    Omit<effectsPaletteConfig.EffectsPaletteConfig, "type">
> = ({ ...props }) => (
    <EffectsPaletteInternal config={{ type: "effects-palette", ...props }} />
);
