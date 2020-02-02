import commonjs from 'rollup-plugin-commonjs'
import nodejs from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.js',
  plugins: [
    postcss(),
    babel(),
    nodejs({
      jsnext: true,
      main: true,
    }),
    commonjs(),
  ],
}
