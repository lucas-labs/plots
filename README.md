<p align="center"><img src="./packages/assets/logo-with-text.svg" height="100"></p>

<br/>

<p align="center">
<strong>
📘 <code>@lucas-labs/plots</code> | doc blocks for storybook
</strong>
</p>

<br/>

# 📚 Doc Blocks

- [`ColorPalette`](#colorpalette)
- [`EffectsPalette`](#effectspalette)
- [`SpacingSet`](#spacingset)
- [`TypeSet`](#typeset)

### ColorPalette

```tsx
import { ColorPalette } from "@lucas-labs/plots/blocks";

export const palette = [
    {
        label: 'text',
        color: '#320b4f'
    },
    {
        label: 'background',
        color: '#feefec'
    },
    {
        name: 'base',
        colors: [
            { label: 'secondary', color: '#9985a7' },
            { label: 'dark', color: '#0d0d0d' },
            { label: 'light', color: '#ffffff' },
            { label: 'disabled', color: '#5c5c5c' },
        ]
    },
    ...
];


<ColorPalette palettes={palette} />
```

### EffectsPalette

```tsx
import { EffectsPalette } from "@lucas-labs/plots/blocks";

export const effects = [
    {
        name: 'shadows',
        effects: [
            {
                label: 'noticeable',
                description: 'diffuse and more noticeable shadow for big elements',
                style: {
                    boxShadow: '0px 24px 24px rgba(50, 11, 79, 0.16)',
                }
            },
            ...
        ]
    }
];

<EffectsPalette effects={effects} />
```

### SpacingSet

```tsx
import { SpacingSet } from "@lucas-labs/plots/blocks";

export const measures = [
    {
        name: 'spacing',
        measures: [
            { label: '.25x', value: '4px' },
            { label: '.5x',  value: '8px' },
            ...
        ]                  
    },
    {
        name: 'radius',
        type: 'radius',
        measures: [
            { label: '1', value: '4px' },
            { label: '2', value: '8px' },
            ...
        ] 
    }
];

<SpacingSet measures={measures} />
```

### TypeSet

```tsx
import { TypeSet } from "@lucas-labs/plots/blocks";

export const typographies = [
    {
        name: 'headings / display',
        fontFamily: 'Outfit',
        size: '5rem',
        weight: '600',
        lineHeight: '5.5rem',
        letterSpacing: '-0.125rem',
    },
    {
        typographies: [
            {
                name: 'xs',
                fontFamily: 'Inter',
                size: '0.75rem',
                weight: '400',
                lineHeight: 'normal',
                letterSpacing: '0.031rem',
            }, 
            {
                name: 'xs-bold',
                fontFamily: 'Inter',
                size: '0.75rem',
                weight: '600',
                lineHeight: 'normal',
                letterSpacing: 'normal',
            },
        ]
    },
    ...
];

<TypeSet typographies={typographies} />
```

