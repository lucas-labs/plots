/** @jsx jsx */
import { FC } from "react";
import { css, jsx } from "@storybook/theming";
import { EffectGroup as Palette, EffectsPaletteConfig, Effect, EffectsPaletteClasses } from "./config";
import * as style from "./EffectsPalette.styles";
import cn from "../../utils/cn";

interface Props { config: EffectsPaletteConfig; }

let id = 0;

export const EffectsPalette: FC<Props> = ({ config: {effects, type, classNames, ...rest} }) => {
    return (
        <div css={style.effectsCollection} {...rest}> 
            {effects?.map((palette) => {
                return isPalette(palette) ? makePalette(palette, classNames) : makeEffect(palette, classNames);
            })}
        </div>
    ); 
};

export const makePalette = (palette: Palette, classNames?: EffectsPaletteClasses): jsx.JSX.Element => {
    id++;
    return (
        <div key={id} className="palette">
            <h4 className={classNames?.groupTitle}>{palette.name} /</h4>
            <div className="effect-collection">
                {palette.effects.map((effect) => {
                    return makeEffect(effect, classNames);
                })}
            </div>
        </div>
    );
};

export const makeEffect = (effect: Effect, classNames?: EffectsPaletteClasses): jsx.JSX.Element => {
    id++;
    return (
        <div key={id} className="effect">
            <div className={cn('sample', effect.className)} css={css(effect.style)}></div>
            <div className="label">
                <h6 className={classNames?.effectName}>{effect.label}</h6>
                <div className={classNames?.effectName}>{effect.description}</div>
            </div>
        </div>
    );
};

const isPalette = (palette: Effect|Palette): palette is Palette => {
    return (palette as Palette).effects !== undefined;
}

export default EffectsPalette;
