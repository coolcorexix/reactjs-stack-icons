import fs from 'fs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';

const pkg = JSON.parse(fs.readFileSync('./package.json'));
const external = Object.keys(pkg.dependencies || {});

export default {
  input: './src/components/index.tsx',
  output: {
    format: 'es',
    dir: 'build',
  },
  preserveModules: true,
  external: [
    ...external,
    'react-dates/initialize',
    '@babel/runtime/helpers/inheritsLoose'
  ],
  plugins: [
    json(),
    terser(),
    resolve({
      extensions: ['.json', '.ts', '.tsx'],
    }),
    babel({
      exclude: 'node_modules/**/*',
      extensions: ['.json', '.ts', '.tsx'],
    }),
    typescript(),
    postcss(),
    copy({
      targets: [{ src: 'src/assets', dest: 'build' }],
    }),
    image(),
  ],
};
