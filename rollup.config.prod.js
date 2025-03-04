import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import obfuscatorPlugin from 'rollup-plugin-obfuscator';


/**
 * cjs: CommonJS规范，是Node.js的官方模块化规范
 * iife: Imdiately Invoked Function Expression 立即执行函数
 * amd: Asynchronous Module Definition 异步模块规范
 * umd: Universal Module Definition 通用模块规范
 */
const OUTPUT_FORMATS = ['cjs', 'iife', 'amd', 'umd'];

export default {
    input: 'index.js',
    output: OUTPUT_FORMATS.map(format => ({
        file: `dist/${process.env.npm_package_name}.${process.env.npm_package_version}.${format}.js`,
        format,
        name: 'xcAliPayWebview',
    })),
    plugins: [
        obfuscatorPlugin({
            options: {
                // 混淆配置项
                compact: true,
                controlFlowFlattening: false,
                deadCodeInjection: false,
                debugProtection: false,
                debugProtectionInterval: 0,
                disableConsoleOutput: false,
                identifierNamesGenerator: 'hexadecimal',
                log: false,
                numbersToExpressions: false,
                renameGlobals: false,
                selfDefending: false,
                simplify: true,
                splitStrings: false,
                stringArray: true,
                stringArrayCallsTransform: false,
                stringArrayCallsTransformThreshold: 0.5,
                stringArrayEncoding: [],
                stringArrayIndexShift: true,
                stringArrayRotate: true,
                stringArrayShuffle: true,
                stringArrayWrappersCount: 1,
                stringArrayWrappersChainedCalls: true,
                stringArrayWrappersParametersMaxCount: 2,
                stringArrayWrappersType: 'variable',
                stringArrayThreshold: 0.75,
            }
        }),
        terser(),
        nodeResolve(),
        commonjs(),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**'
        }),
    ]
};