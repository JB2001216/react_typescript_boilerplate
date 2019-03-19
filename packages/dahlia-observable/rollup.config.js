import typescript from 'rollup-plugin-typescript2'
import autoExternal from 'rollup-plugin-auto-external'

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    autoExternal(),
    typescript({
      rollupCommonJSResolveHack: true,
    }),
  ],
}
