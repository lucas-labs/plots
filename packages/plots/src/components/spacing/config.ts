import { HTMLAttributes } from 'react';

export type Measure = {
    label: string;
    value: string;
};

export type MeasureGroup = {
    name: string;
    type?: 'spacing' | 'radius';
    measures: Measure[];
};

export type SpacingSetClasses = {
    groupTitle?: string;
    spacingName?: string;
    valueName?: string;
}

export interface SpacingSetConfig extends HTMLAttributes<HTMLDivElement> {
    type: "spacing-set";
    measures: MeasureGroup[];
    classNames?: SpacingSetClasses;
}
