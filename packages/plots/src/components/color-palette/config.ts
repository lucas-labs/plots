import { HTMLAttributes } from "react";

export interface ColorSwatch {
    label: string;
    color: string;
}

export type ColorPalette = {
    name: string;
    colors: ColorSwatch[];
};

export type ColorPaletteClasses = {
    blockTitle?: string;
    swatchName?: string;
    swatchColor?: string;
}

export interface ColorPaletteConfig extends HTMLAttributes<HTMLDivElement> {
    type: "color-palette";
    palettes: (ColorSwatch | ColorPalette)[];
    classNames?: ColorPaletteClasses;
}
