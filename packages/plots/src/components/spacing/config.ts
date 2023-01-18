export type Measure = {
    label: string;
    value: string;
};

export type MeasureGroup = {
    name: string;
    type?: 'spacing' | 'radius';
    measures: Measure[];
};

export interface SpacingSetConfig {
    type: "spacing-set";
    measures: MeasureGroup[];
}
