/** @jsx jsx */
import { FC } from "react";
import { css, jsx } from "@storybook/theming";
import { EffectGroup as Palette, EffectsPaletteConfig, Effect } from "./config";
import * as style from "./EffectsPalette.styles";

interface Props { config: EffectsPaletteConfig; }

let id = 0;

export const EffectsPalette: FC<Props> = ({ config: opts }) => {
    return (
        <div css={style.effectsCollection}> 
            {opts.effects?.map((palette) => {
                return isPalette(palette) ? makePalette(palette) : makeEffect(palette);
            })}
        </div>
    ); 
};

export const makePalette = (palette: Palette): jsx.JSX.Element => {
    id++;
    return (
        <div key={id} className="palette">
            <h4>{palette.name} /</h4>
            <div className="effect-collection">
                {palette.effects.map((effect) => {
                    return makeEffect(effect);
                })}
            </div>
        </div>
    );
};

export const makeEffect = (effect: Effect): jsx.JSX.Element => {
    id++;
    return (
        <div key={id} className="effect">
            <div className="sample" css={css(effect.style)}></div>
            <div className="label">
                <h6>{effect.label}</h6>
                <div>{effect.description}</div>
            </div>
        </div>
    );
};

const isPalette = (palette: Effect|Palette): palette is Palette => {
    return (palette as Palette).effects !== undefined;
}

export default EffectsPalette;
