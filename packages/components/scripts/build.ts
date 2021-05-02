require('esbuild').build({
    entryPoints: ['./src/types.ts'],
    bundle: true,
    outfile: 'dist/out.js',
}).catch(() => process.exit(1))