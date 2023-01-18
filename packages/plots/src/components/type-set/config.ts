export type TypographyGroup = {
    group: string;
    typographies: Typography[];
};

export type Typography = {
    name: string;
    size?: string;
    weight?: string;
    lineHeight?: string;
    letterSpacing?: string;
    color?: string;
    textTransform?: any;
    fontFamily?: string;
    fontStyle?: string;
    textDecoration?: string;
};

export interface TypeSetConfig {
    type: "type-set";
    typographies: (TypographyGroup | Typography)[];
}
