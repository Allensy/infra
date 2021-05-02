require('esbuild').build({
    entryPoints: ['./src/types.ts'],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11'],
    outfile: 'dist/bundled.js',
}).catch(() => process.exit(1))