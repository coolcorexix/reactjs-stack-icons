import fs from 'fs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

const pkg = JSON.parse(fs.readFileSync('./package.json'));
const external = Object.keys(pkg.dependencies || {});

export default {
  input: './src/index.tsx',
  output: {
    format: 'es',
    dir: 'build',
  },
  preserveModules: true,
  external: [
    ...external
  ],
  plugins: [
    json(),
    terser(),
    resolve({
      extensions: ['.json', '.ts', '.tsx'],
    }),
    babel({
      exclude: 'node_modules/**/*',
      extensions: ['.jsx'],
    }),
    typescript(),
  ],
};
