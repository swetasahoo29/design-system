---
to: packages/<%= packageName %>/tsup.config.ts
---

import { defineConfig } from 'tsup';
import { config } from '@coderebus/tsup';

export default defineConfig({
	...config,
	entry: {
		index: 'index.ts'
	}
})
