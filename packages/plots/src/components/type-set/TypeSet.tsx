/** @jsx jsx */
import { FC } from "react";
import { css, jsx } from "@storybook/theming";
import { TypographyGroup, TypeSetConfig, Typography } from "./config";
import * as style from "./TypeSet.styles";

interface Props { config: TypeSetConfig; }

let id = 0;

export const TypeSet: FC<Props> = ({ config: opts }) => {
    return (
        <div > 
            {opts.typographies?.map((typography) => {
                // return isGroup(typography) ? makeTypographyGroup(typography) : makeTypographyItem(typography);
                return isGroup(typography) ? makeTypographyGroup(typography) : makeTypographyItem(typography);
            })}
        </div>
    ); 
};


export const makeTypographyGroup = (group: TypographyGroup): jsx.JSX.Element => {
    id++;
    return (
        <div key={id} css={style.$group}>
            {group.typographies.map((typography) => {
                return makeTypographyItem(typography);
            })}
        </div>
    );
};

export const makeTypographyItem = (typography: Typography): jsx.JSX.Element => {
    id++;
    return (
        <div key={id} css={style.$typography}>
            <p 
                css={css({
                    margin: 0,
                    fontFamily: typography.fontFamily,
                    fontSize: typography.size,
                    fontWeight: typography.weight,
                    lineHeight: typography.lineHeight,
                    letterSpacing: typography.letterSpacing,
                    color: typography.color,
                    textTransform: typography.textTransform,
                    fontStyle: typography.fontStyle,
                    textDecoration: typography.textDecoration,
                })} 
            >
                {typography.name}
            </p>

            <span css={style.$subtitle}>
                {`${typography.fontFamily} - ${typography.weight} - ${typography.size}/${typography.lineHeight}/${typography.letterSpacing}`}
            </span>
        </div>
    );
};

const isGroup = (
    typography: TypographyGroup | Typography
): typography is TypographyGroup => {
    return (
        (typography as TypographyGroup).group !== undefined ||
        (typography as TypographyGroup).typographies !== undefined
    );
};

export default TypeSet;
