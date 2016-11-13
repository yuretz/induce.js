/* eslint-disable import/no-extraneous-dependencies */
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    moduleName: 'induce',
    entry: 'src/induce.js',
    format: 'iife',
    dest: 'dist/induce.js',
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true,
        }),

        commonjs({
            // non-CommonJS modules will be ignored, but you can also
            // specifically include/exclude files
            include: 'node_modules/**',  // Default: undefined

            // if true then uses of `global` won't be dealt with by this plugin
            ignoreGlobal: false,  // Default: false

            // if false then skip sourceMap generation for CommonJS modules
            sourceMap: true,  // Default: true

            // explicitly specify unresolvable named exports
            // (see below for more details)
            // namedExports: { './module.js': ['foo', 'bar' ] }  // Default: undefined
        }),
        json(),
        babel()],
};
