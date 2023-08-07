import { addons } from '@storybook/manager-api';
import theme from './theme';

addons.setConfig({
    theme: theme,
    showNav: true,
    showPanel: true,
    panelPosition: 'right',
});
