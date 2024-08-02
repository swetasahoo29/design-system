import { addons } from '@storybook/manager-api';
import { getTheme } from './theme/getTheme.js';
import '@coderebus/tailwind/styles/tailwind.css';

addons.setConfig({
	theme: getTheme({ base: 'light' }),
	sidebar: {
		showRoots: true,
		collapsedRoots: ['using-genesisx-ui'],
	},
});
