import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';


export default {
    input: 'index.js',
    output: [
        {
            file: `test/bundle.iife.js`,
            format: 'iife', // Imdiately Invoked Function Expression 立即执行函数
            name: 'xcAliPayWebview',
        },
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**'
        }),
        // // 实时刷新页面
        livereload('test'),
        serve({
            contentBase: 'test',
            open: true,
            host: 'localhost',
            port: 8080,
        })
    ]
};