/** @jsx jsx */
import { FC } from "react";
import { css, jsx } from "@storybook/theming";
import { ColorPalette as Palette, ColorPaletteConfig, ColorSwatch } from "./config";
import * as style from "./ColorPalette.styles";

interface Props { config: ColorPaletteConfig; }

let id = 0;

export const ColorPalette: FC<Props> = ({ config: opts }) => {
    return (
        <div > 
            {opts.palettes?.map((palette) => {
                return isPalette(palette) ? makePalette(palette) : makeSwatch(palette);
            })}
        </div>
    ); 
};

export const makePalette = (palette: Palette): jsx.JSX.Element => {
    id++;
    return (
        <div key={id}>
            <h4 css={style.$paletteH4}>{palette.name} /</h4>
            <div css={style.$swatchCollection}>
                {palette.colors.map((color) => {
                    return makeSwatch(color);
                })}
            </div>
        </div>
    );
};

export const makeSwatch = (swatch: ColorSwatch): jsx.JSX.Element => {
    id++;
    return (
        <div css={style.$color} key={id}>
            <div css={style.$sample(swatch.color)}></div>
            <div css={style.$label}>
                <h6 css={style.$swatchTitle}>{swatch.label}</h6>
                <div css={style.$labelDiv}>{swatch.color}</div>
            </div>
        </div>
    );
};

const isPalette = (palette: ColorSwatch|Palette): palette is Palette => {
    return (palette as Palette).colors !== undefined;
}

export default ColorPalette;
