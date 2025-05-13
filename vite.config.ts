/**
 * The important part is /// <reference types="vitest" />
 * — this adds the type info so you don’t get type errors about test.
 */
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './tests/setup.ts',
	},
});
