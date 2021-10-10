import typescript from 'rollup-plugin-typescript'
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

const EXTERNALS = {
   'react': 'React',
   'react-dom': 'ReactDOM',
}

export default {
   input: 'src/wrapper.tsx',
   output: {
      dir: 'dist',
      format: 'iife',
      globals: EXTERNALS,
      sourcemap: true
   },
   plugins: [
      typescript(),
      commonjs(),
      nodeResolve({
         extensions: [".js", ".jsx", ".ts", ".tsx"],
         skip: Object.keys(EXTERNALS)
      })
   ],
   external: Object.keys(EXTERNALS),
}