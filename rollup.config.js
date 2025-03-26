import typescript from '@rollup/plugin-typescript';

const buildCompletePlugin = {
  name: 'build-complete',
  closeBundle() {
    console.log('\nBuild completed successfully! ✅');
  }
};

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
    },
  ],
  external: ['react'],
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    buildCompletePlugin
  ]
};