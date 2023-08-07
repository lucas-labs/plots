/** @jsx jsx */
import { FC } from 'react';
import { css, jsx } from '@storybook/theming';
import {
    MeasureGroup,
    SpacingSetConfig,
    Measure,
    SpacingSetClasses,
} from './config';
import * as style from './SpacingSet.styles';
import cn from '../../utils/cn';

interface Props {
    config: SpacingSetConfig;
}

let id = 0;

export const SpacingSet: FC<Props> = ({
    config: { measures, classNames, ...rest },
}) => {
    return (
        <div className='measures-container' css={style.$spacing} {...rest}>
            {measures?.map((measure) => {
                return makeMeasureGroup(measure, classNames);
            })}
        </div>
    );
};

export const makeMeasureGroup = (
    group: MeasureGroup,
    classNames?: SpacingSetClasses
): jsx.JSX.Element => {
    id++;
    return (
        <div key={id} className='measure-group'>
            <h4 className={cn('label', classNames?.groupTitle)}>{group.name} /</h4>
            <div className='measure-collection'>
                {group.measures.map((measure) => {
                    return makeMeasureItem(measure, group.type, classNames);
                })}
            </div>
        </div>
    );
};

export const makeMeasureItem = (
    measure: Measure,
    type: 'spacing' | 'radius' = 'spacing',
    classNames?: SpacingSetClasses
): jsx.JSX.Element => {
    id++;

    const classes = getGroupClasses(type) + ' measure';

    return (
        <div key={id} className={classes}>
            <h6 className={classNames?.spacingName}>{measure.label}</h6>
            <div
                className='sample'
                css={css({ width: type === 'radius' ? '2rem' : measure.value })}
            >
                {type === 'radius' && (
                    <div
                        css={css({
                            borderRadius: measure.value,
                        })}
                    ></div>
                )}
            </div>
            <div className={cn('value', classNames?.valueName)}>{measure.value}</div>
        </div>
    );
};

export const getGroupClasses = (type: string): string => {
    return `${type === 'radius' ? 'radius' : 'spacing'}`;
};

export default SpacingSet;
