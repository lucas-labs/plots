import { CSSObject } from "@storybook/theming";

export type Effect = {
    label: string,
    description?: string,
    style: CSSObject
}

export type EffectGroup = { 
    name: string,
    effects: Effect[]
};

export interface EffectsPaletteConfig {
    type: "effects-palette";
    effects: (EffectGroup | Effect)[];
}
