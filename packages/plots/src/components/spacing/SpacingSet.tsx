/** @jsx jsx */
import { FC } from "react";
import { css, jsx } from "@storybook/theming";
import { MeasureGroup, SpacingSetConfig, Measure } from "./config";
import * as style from "./SpacingSet.styles";

interface Props { config: SpacingSetConfig; }

let id = 0;

export const SpacingSet: FC<Props> = ({ config: opts }) => {
    return (
        <div className="measures-container" css={style.$spacing}> 
            {opts.measures?.map((measure) => {
                return makeMeasureGroup(measure);
            })}
        </div>
    ); 
};


export const makeMeasureGroup = (group: MeasureGroup): jsx.JSX.Element => {
    id++;
    return (
        <div key={id} className="measure-group">
            <h4 className="label">{group.name} /</h4>
            <div className="measure-collection">
                {group.measures.map((measure) => {
                    return makeMeasureItem(measure, group.type);
                })}
            </div>
            
        </div>
    );
};

export const makeMeasureItem = (measure: Measure, type: 'spacing'|'radius' = 'spacing'): jsx.JSX.Element => {
    id++;

    const classes = getGroupClasses(type) + ' measure';

    return (
        <div key={id} className={classes}>
            <h6>{ measure.label }</h6>
            <div className="sample" css={css({ width: type === 'radius' ? '2rem' : measure.value })}>
                {type === 'radius' &&
                    <div css={css({
                        borderRadius: measure.value   
                    })}></div>
                }                
            </div>
            <div className="value">{ measure.value }</div>
        </div>
    );
};

export const getGroupClasses = (type: string): string => {
    return `${type === 'radius' ? 'radius' : 'spacing'}`;
}

export default SpacingSet;
