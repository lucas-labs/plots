/** @jsx jsx */
import { FC } from "react";
import { css, jsx } from "@storybook/theming";
import {
    ColorPalette as Palette,
    ColorPaletteConfig,
    ColorSwatch,
    ColorPaletteClasses,
} from "./config";
import * as style from "./ColorPalette.styles";

interface Props {
    config: ColorPaletteConfig;
}

let id = 0;

export const ColorPalette: FC<Props> = ({
    config: { palettes, type, classNames, ...rest },
}) => {
    return (
        <div {...rest}>
            {palettes?.map((palette) => {
                return isPalette(palette)
                    ? makePalette(palette, classNames)
                    : makeSwatch(palette, classNames);
            })}
        </div>
    );
};

export const makePalette = (
    palette: Palette,
    classNames?: ColorPaletteClasses
): jsx.JSX.Element => {
    id++;
    return (
        <div key={id}>
            <h4 css={style.$paletteH4} className={classNames?.blockTitle}>
                {palette.name} /
            </h4>
            <div css={style.$swatchCollection}>
                {palette.colors.map((color) => {
                    return makeSwatch(color, classNames);
                })}
            </div>
        </div>
    );
};

export const makeSwatch = (
    swatch: ColorSwatch,
    classNames?: ColorPaletteClasses
): jsx.JSX.Element => {
    id++;
    return (
        <div css={style.$color} key={id}>
            <div css={style.$sample(swatch.color)}></div>
            <div css={style.$label}>
                <h6 css={style.$swatchTitle} className={classNames?.swatchName}>
                    {swatch.label}
                </h6>
                <div css={style.$labelDiv} className={classNames?.swatchColor}>
                    {swatch.color}
                </div>
            </div>
        </div>
    );
};

const isPalette = (palette: ColorSwatch | Palette): palette is Palette => {
    return (palette as Palette).colors !== undefined;
};

export default ColorPalette;
