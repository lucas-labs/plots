/** @jsx jsx */
import { FC, HTMLAttributes } from "react";
import { css, jsx } from "@storybook/theming";
import {
    TypographyGroup,
    TypeSetConfig,
    Typography,
    TypeSetClasses,
} from "./config";
import * as style from "./TypeSet.styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
    config: TypeSetConfig;
}

let id = 0;

export const TypeSet: FC<Props> = ({
    config: { typographies, classNames, ...rest },
}) => {
    return (
        <div {...rest}>
            {typographies?.map((typography) => {
                // return isGroup(typography) ? makeTypographyGroup(typography) : makeTypographyItem(typography);
                return isGroup(typography)
                    ? makeTypographyGroup(typography, classNames)
                    : makeTypographyItem(typography, classNames);
            })}
        </div>
    );
};

export const makeTypographyGroup = (
    group: TypographyGroup,
    classNames?: TypeSetClasses
): jsx.JSX.Element => {
    id++;
    return (
        <div key={id} css={style.$group}>
            {group.typographies.map((typography) => {
                return makeTypographyItem(typography, classNames);
            })}
        </div>
    );
};

export const makeTypographyItem = (
    typography: Typography,
    classNames?: TypeSetClasses
): jsx.JSX.Element => {
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
                className={classNames?.typeSetName}
            >
                {typography.name}
            </p>

            <span css={style.$subtitle} className={classNames?.typeSetDescription}>
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
