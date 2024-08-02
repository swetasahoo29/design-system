---
to: libs/ui/<%= component %>/<%= componentName %>/tsup.config.ts
---

import { defineConfig } from 'tsup';
import { config } from '@coderebus/tsup';

export default defineConfig({
	...config,
	entry: {
		index: 'src/index.ts'
	}
})
