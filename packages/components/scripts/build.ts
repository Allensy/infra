require('esbuild').build({
    entryPoints: ['./src/types.ts'],
    bundle: true,
    outfile: 'dist/bundled.js',
}).catch(() => process.exit(1))