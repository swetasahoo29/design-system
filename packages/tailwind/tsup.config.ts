import { defineConfig } from 'tsup';
import { config } from '@coderebus/tsup';

export default defineConfig({
	...config,
	entry: {
		themes: 'themes/index.ts',
		utilities: 'utilities/index.ts',
		config: 'config/index.ts',
	},
});
