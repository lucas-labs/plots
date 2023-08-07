import { CSSObject } from "@storybook/theming";
import { HTMLAttributes } from "react";

export type Effect = {
    label: string,
    description?: string,
    style?: CSSObject
    className?: string
}

export type EffectGroup = { 
    name: string,
    effects: Effect[]
};

export type EffectsPaletteClasses = {
    groupTitle?: string;
    effectName?: string;
    effectDescription?: string;
}

export interface EffectsPaletteConfig extends HTMLAttributes<HTMLDivElement> {
    type: "effects-palette";
    effects: (EffectGroup | Effect)[];
    classNames?: EffectsPaletteClasses;
}
