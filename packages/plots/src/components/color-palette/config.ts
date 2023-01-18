export interface ColorSwatch {
    label: string,
    color: string
}

export type ColorPalette = { 
    name: string,
    colors: ColorSwatch[]
};

export interface ColorPaletteConfig {
    type: "color-palette";
    palettes: (ColorSwatch | ColorPalette)[];
}
